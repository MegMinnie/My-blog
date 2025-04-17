function Header() {
    return (
        <>
            <div className="text-center p-8 flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">MY BLOG</h1>
                <p>
                    Welcome to the blog of{" "}
                    <a className="bg-black text-white p-1">unknown</a>
                </p>
            </div>
        </>
    );
}

export default Header;
