import styled from "styled-components";


const ListaEstilizada = styled.ul`
    list-style-type: style none;
    padding:0;
    margin:0;
    width:212px;
`




const BarraLateral = ()=>{
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <a href="">Início</a>
                       
                    </li>
                    <li>
                        <a href="">Início</a>
                       
                    </li>
                </ListaEstilizada>
            </nav>

        </aside>
    )
}

export default BarraLateral;