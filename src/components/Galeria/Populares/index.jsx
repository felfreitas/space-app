import Titulo from "../../Titulo";
import fotos from "../../../fotos-populares.json";

import styled from "styled-components";


const ColunaFotos = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    margin-left:24px;
     & > img {
        max-width: 212px;
        border-radius: 20px;
     }
     & > button{
        background-color:transparent;
        color:#FFF;
        font-size:20px;
        padding:12px 20px;
        border:2px solid;
        border-radius:10px;
        border-color:#C98CF1;
        cursor:pointer;
        margin-top:16px;
     }
`


const Populares = () => {
    console.log(fotos);
    return (<>

        <section>

            <Titulo $alinhamento='center'>Populares</Titulo>

            <ColunaFotos>

                {fotos.map(foto => 
                    <img key={foto.id} src={foto.path} alt={foto.titulo} />
                )}
             <button> Ver Mais </button>
            </ColunaFotos>
        </section>
    </>
    )
}

export default Populares;