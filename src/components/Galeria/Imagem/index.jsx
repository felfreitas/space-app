import styled from "styled-components";


const FigureEstilizada = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  /* border-radius: 20px;
  width: 448px;
  height: 336px;
  padding: 15px; */
  /* box-shadow: 5px 5px ; */

`;
const ImagemEstilizada = styled.img`
    /* width: 448px;
    height: 256px; */
    border-radius:20px 20px 0px 0px;
    margin:0;
    width:100%;
`
const CaptionEstilizada = styled.figcaption`
    display:flex;
    flex-direction:column;
    background-color:#001634;
    color:#FFFFFF;
    margin:0;
    padding:12px;
    border-radius: 0px 0px 20px 20px;
`
const TituloFoto = styled.h3`
   margin: 0;
            font-size: 16px;
`
const FonteFoto = styled.h4`
      margin: 0;
    font-size: 16px;
`
const FooterEstilizado = styled.footer`
    /* background-color:#FF00FF; */
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0;
    border-radius: 0px 0px 20px 20px;
    padding: 2px 2px ;
`
const BotoesAgrupados = styled.div`
    display:flex;
    align-items:center;
`

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

//código comentado foi instruído e demonstrado na aula. É mais enxuto, contudo preferi deixar o meu
//por conta da minha aprendizagem. Mas farei da forma abaixo caso tenhamos algum outro desafio!

// const Figure = styled.figure`
//     width: ${props => props.$expandida ? '90%' : '460px'};
//     max-width: 100%;
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//     & > img {
//         max-width: 100%;
//         border-radius: 20px 20px 0 0;
//     }
//     figcaption {
//         background-color: #001634;
//         border-radius: 0px 0px 20px 20px;
//         color: white;
//         box-sizing: border-box;
//         padding: 12px;
//         h3 {
//             font-family: 'GandhiSansBold';
//         }
//         h4 {
//             flex-grow: 1;
//         }
//         h3, h4 {
//             margin: 0;
//             font-size: 16px;
//         }
//     }
// `

// const Rodape = styled.footer`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `
const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';


    return (
        <>

            <FigureEstilizada>
                <ImagemEstilizada src={foto.path} alt={foto.titulo} />


                <CaptionEstilizada>
                    <TituloFoto>{foto.titulo}</TituloFoto>
                    <FooterEstilizado>
                        <FonteFoto>{foto.fonte}</FonteFoto>
                        <BotoesAgrupados>
                            <BotaoIcone
                                onClick={() => aoAlternarFavorito(foto)}
                            >
                                <img src={iconeFavorito} alt="Icone de favorito" />
                            </BotaoIcone>
                            {!expandida &&
                                <BotaoIcone
                                    aria-hidden={expandida}
                                    onClick={() => aoZoomSolicitado(foto)}
                                >
                                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                                </BotaoIcone>}
                        </BotoesAgrupados>
                    </FooterEstilizado>
                </CaptionEstilizada>
            </FigureEstilizada>


            {/* <Figure $expandida={expandida} id={`foto-${foto.id}`}>
                <img src={foto.path} alt={foto.alt} />
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <Rodape>
                        <h4>{foto.fonte}</h4>
                        <BotaoIcone>
                            <img src="/icones/favorito.png" alt="Icone de favorito" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aria-hidden={expandida}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>}
                    </Rodape>
                </figcaption>
            </Figure> */}
        </>
    )
}

export default Imagem;