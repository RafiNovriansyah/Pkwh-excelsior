const express = require('express');
const cors = require('cors');
const connection = require('./db');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, "img_" + Date.now() + "." + extension);
    },
  });
  const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const content = req.body;
  
  console.log(content);
  connection.query(`SELECT id, name, image FROM item_home WHERE id > ${content.min} AND id < ${content.max} `, (err, rows, fields) => {
        if (err) return res.status(500).json({error: err});
        else res.status(200).json(rows);
    })
});

app.post('/comics-query', async (req, res) => {
  const content = req.body;
  
  console.log(content);
  connection.query(`SELECT id, name, image FROM item_marvel WHERE id > ${content.min} AND id < ${content.max} `, (err, rows, fields) => {
        if (err) return res.status(500).json({error: err});
        else res.status(200).json(rows);
    })
});

app.post('/marvel-character', async (req, res) => {
  const content = req.body;
  
  console.log(content);
  connection.query(`SELECT id, name, image, alias FROM characters WHERE id > ${content.min} AND id < ${content.max} `, (err, rows, fields) => {
        if (err) return res.status(500).json({error: err});
        else res.status(200).json(rows);
    })
});


app.get('/getimage/:imagename', async (req, res) => {
    res.sendFile(
        path.resolve(
          __dirname + "/uploads/" + req.params.imagename
        )
      );
});

app.get('/id/:comic_id', async (req, res) => {
  connection.query(`SELECT * FROM item_marvel WHERE id = ${req.params.comic_id}`, (err, rows, fields) => {
    if (err) return res.status(500).json({error: err});
    else return res.status(200).json(rows[0]);
  })
})

app.get('/id/:main_id', async (req, res) => {
  connection.query(`SELECT * FROM item_home WHERE id = ${req.params.main_id}`, (err, rows, fields) => {
    if (err) return res.status(500).json({error: err});
    else return res.status(200).json(rows[0]);
  })
})

app.listen(3005, async () => {
    console.log('Excelsior main item server is running');
});