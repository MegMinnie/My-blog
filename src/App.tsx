import "./App.css";
import Header from "./componentes/Header";
import Card1 from "./componentes/Card1";
import Card2 from "./componentes/Card2";
import Footer from "./componentes/Footer";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";

function App() {
    return (
        <>
            <Header />
            <main className="w-[90%] m-auto flex flex-col gap-10 md:w-[95%] lg:flex lg:flex-row">
                <section className="flex flex-col gap-10">
                    <Card1
                        capa={img1}
                        titulo="TITLE HEADING"
                        data="April 7, 2014"
                        descricao="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
                    />

                    <Card1
                        capa={img2}
                        titulo="BLOG ENTRY"
                        data="April 2, 2014"
                        descricao="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
                    />
                </section>
                <div className="lg:flex lg:flex-col gap-10">
                    <section className="bg-white border-1 border-gray-200 ">
                        <img className="md:w-[100%]" src={img3} alt="Imagem " />
                        <div className="p-2 flex flex-col gap-4">
                            <h1 className="font-semibold text-xl">My Name</h1>
                            <p className="md:w-[100%] md:text-justify">
                                Just me, myself and I, exploring the universe of
                                uknownment. I have a heart of love and a
                                interest of lorem ipsum and mauris neque quam
                                blog. I want to share my world with you.
                            </p>
                        </div>
                    </section>

                    <section className="flex flex-col border-1 border-gray-200">
                        <h2 className="bg-gray-100 p-4 font-medium text-lg border-t-1 border-gray-200 md:text-xl">
                            Popular Posts
                        </h2>
                        <Card2
                            capa2={img4}
                            titulo="Lorem"
                            descricao="Sed mattis nunc"
                        />

                        <Card2
                            capa2={img5}
                            titulo="Ipsum"
                            descricao="Praes tinci sed"
                        />

                        <Card2
                            capa2={img6}
                            titulo="Dorum"
                            descricao="Ultricies congue"
                        />

                        <Card2
                            capa2={img7}
                            titulo="Mingsum"
                            descricao="Lorem ipsum dipsum"
                        />
                    </section>

                    <section className="border-1 border-gray-200">
                        <h2 className="bg-gray-100 p-4 font-medium text-lg border-t-1 border-gray-200 ">
                            Tags
                        </h2>
                        <div className="flex flex-row bg-white gap-3 flex-wrap itens-center justify-left text-[12px] p-2 lg:p-6">
                            <a
                                className="bg-black text-white p-1 text-[13px] cursor-pointer"
                                href=""
                            >
                                Travel
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                New York
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                London
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                IKEA
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                NORWAY
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                DIY
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                Ideas
                            </a>
                            <a
                                className="bg-gray-200  p-1
                        cursor-pointer"
                                href=""
                            >
                                Baby
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                Family
                            </a>
                            <a
                                className="bg-gray-200 p-1 cursor-pointer"
                                href=""
                            >
                                News
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                Clothing
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                Shopping
                            </a>
                            <a
                                className="bg-gray-200  p-1 cursor-pointer"
                                href=""
                            >
                                Sports
                            </a>
                            <a
                                className="bg-gray-200 p-1
                        cursor-pointer"
                                href=""
                            >
                                Games
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
