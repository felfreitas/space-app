import styled from "styled-components";

const FigureEstilizada = styled.figure`
   
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow:1;
    display:flex;
    background-repeat: no-repeat;
    background-size:cover;
    align-items:center;
    margin:0;
    min-height: 328px;
    border-radius:20px;
    max-width:100%;
       
`


const TituloEstilizado = styled.h1`
        color:#FFFFFF;
        font-size:40px;
        font-weight:400;
        line-height:48px;
        width:301px;
        margin-top: 92px;
        margin-left: 64px;
       
`

const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>

            <TituloEstilizado>{texto}</TituloEstilizado>

        </FigureEstilizada>
    )
}


export default Banner;