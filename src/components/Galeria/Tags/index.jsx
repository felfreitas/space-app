
import styled from 'styled-components';
import tags from './tags.json';


const TesteFlex = styled.div`
    display:flex;
    align-items:center;
    gap:10px;    
`

const TituloTag = styled.h2`
    font-size:24px;
    color:#D9D9D9;
    font-weight:400;
    /* margin:0; */
`

const BotaoEstilizado = styled.button`

    font-size:24px;
    color:#FFFFFF;
    border-radius: 10px;
   
    background: rgba(217, 217, 217, 0.3);
    cursor:pointer;

    border: 2px solid transparent;
    padding:5px;
    box-sizing:border-box;
    transition: background-color 0.3s ease;
    &:hover{
        border-color:#C98CF1;
    }

`

const DivBotao = styled.div`
    display:flex;
    gap:24px;
    margin-left:24px;
`

const Tags = () => {

    return (
        <TesteFlex>


            <TituloTag>Busque por Tags:</TituloTag>

        <DivBotao>

            {tags.map(tag => <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>)
            }
            </DivBotao>
        </TesteFlex>


    )
}

export default Tags;