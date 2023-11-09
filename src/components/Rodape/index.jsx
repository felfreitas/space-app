import styled from "styled-components";

import socialMedia from "../../social-media.json";

const RodapeEstilizado = styled.footer`
    height:80px;
    background-color:#04244F;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
    padding:19px 24px;
    
    & > p{
        color: #FFFFFF;
        font-weight:500;
        font-size:25px;
    }
    
`

const Media = styled.ul`
    display:flex;
    gap:60px;
    
    & > li{
        list-style:none;
        text-decoration: none;
    }
    & >a{
        max-width:100%
    }
    
    `
const ImagemEstilizada = styled.img`
   width:35px;
    /* gap:60px; */
    
`

const Rodape = () => {

    return (
        <RodapeEstilizado>
            <Media>
                {socialMedia.map(icone =>
                    <li>

                        <a href="#">
                            <ImagemEstilizada src={icone.path} alt={icone.nome} />
                        </a>
                    </li>

                )}
            </Media>

            <p>Desenvolvido por Felipe</p>

        </RodapeEstilizado>
    )
}


export default Rodape;