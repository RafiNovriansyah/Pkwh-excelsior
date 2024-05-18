import Link from "next/link";

function MyButton() {
    return (
        <Link href="/halaman-lain">
            <p>
                <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8">
                    Read More
                </button>
            </p>
        </Link>
    );
}

export default MyButton;

