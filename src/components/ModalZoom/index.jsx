import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { useState } from "react";

//serve para cobrir a tela de fundo
const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
`
const DialogEstilizado = styled.dialog`
    position:absolute;
    top:294px;
`
const ModalZoom = ({ foto }) => {

    const [show, setShow] = useState(false);

    function retirarOverlay(){
        setShow(!show)
    }
    return (
        <>
            {foto &&
                <>
                    <Overlay hidden ={show}/>
                    <DialogEstilizado open={!!foto}>
                        <Imagem
                            foto={foto}
                            expandida={true}
                        />
                        <form method="dialog">
                            <button onClick={retirarOverlay}>OK</button>
                        </form>
                    </DialogEstilizado>
                </>
            }

        </>
    )

}

export default ModalZoom;