function Footer() {
    return (
        <>
            <footer className="bg-[#616161] p-6 flex flex-col gap-8 mt-12">
                <div className="flex flex-row gap-1">
                    <button className="bg-[#434343] p-2 w-[30%] text-white hover:bg-gray-600 cursor-pointer md:w-[15%]">
                        Previous
                    </button>
                    <button className="bg-black text-white p-2 w-[25%] hover:bg-gray-200 hover:text-black cursor-pointer md:w-[15%]">
                        Next
                    </button>
                </div>
                <p className="text-white">
                    Powered by{" "}
                    <a
                        className="underline"
                        href="https://github.com/MegMinnie"
                    >
                        Mirele Oliveira
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Footer;
