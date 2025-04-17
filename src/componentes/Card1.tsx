interface ICard1 {
    capa: string;
    titulo: string;
    data: string;
    descricao: string;
}

function Card1({ capa, titulo, data, descricao }: ICard1) {
    return (
        <>
            <div className="flex flex-col gap-2 bg-white border-1 border-gray-200">
                <img className="capa" src={capa} alt="Capa" />
                <div className="flex flex-col gap-4 p-2">
                    <h1 className="titulo text-2xl font-semibold">{titulo}</h1>
                    <p className="data text-[18px]">
                        {" "}
                        Title description,{" "}
                        <a className="text-gray-500 text-justify">{data}</a>
                    </p>
                    <p className="descricao ">{descricao}</p>
                    <div className="flex flex-row justify-between md:mt-[20px] p-2">
                        <button className="ml-2 border-[1px] w-[40%] border-gray-400 p-2 font-mono cursor-pointer hover:bg-gray-300 hover:border-none md:w-[20%]">
                            READ MORE
                        </button>
                        <div className="md:flex md:flex-row md:gap-4 hidden md:justify-center md:items-center">
                            <p>Comments</p>
                            <p className="bg-black text-white flex flex-row justify-center items-center text-center w-[20px]">
                                0
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card1;
