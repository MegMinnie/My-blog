interface ICard2 {
    capa2: string;
    titulo: string;
    descricao: string;
}

function Card2({ capa2, titulo, descricao }: ICard2) {
    return (
        <>
            <div className="flex flex-row bg-white gap-4 p-4 border-1 border-gray-100 hover:bg-gray-300 cursor-pointer md:p-3">
                <img
                    className="capa2 w-[18%] md:w-[50px] md:h-[50px] "
                    src={capa2}
                    alt="Capa"
                />
                <div className="flex flex-col">
                    <h1 className="titulo">{titulo}</h1>
                    <p className="descricao">{descricao}</p>
                </div>
            </div>
        </>
    );
}

export default Card2;
