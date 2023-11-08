import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares"
import Tags from "./Tags";
import Imagem from "./Imagem";


const GaleriaContainer = styled.div`
    display:flex;
`

const SecaoFluida = styled.section`
    flex-grow:1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (

        <>
            <Tags />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>

                        {
                            fotos.map(foto =>

                                <Imagem
                                    aoZoomSolicitado ={aoFotoSelecionada}
                                    key={foto.id}
                                    aoAlternarFavorito ={aoAlternarFavorito}
                                    foto={foto}
                                />

                            )
                        }

                    </ImagensContainer>
                </SecaoFluida>

                <Populares />

            </GaleriaContainer>
        </>
    )
}


export default Galeria;