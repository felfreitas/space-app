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
    padding:0;
    border:0;
    background:transparent;
    `
const AgrupandoDentroDialogo = styled.div`
    display:flex;
    
`
const FormEstilizado = styled.form`
    position:absolute;
    top: 8px;
    right: 16px;
`
const BotaoEstilizado = styled.button`
    background-color: transparent;
    width:32px;
    height:32px;
    font-size:18px;
    color:#FFFFFF;
    border: none;
    cursor: pointer;
`
const ModalZoom = ({ foto, aoFechar }) => {

    const [show, setShow] = useState(false);

    function retirarOverlay() {
        setShow(false)
    }
    return (
        <>
            {foto &&
                <>
                    <Overlay hidden={show} />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <AgrupandoDentroDialogo>

                            <Imagem
                                foto={foto}
                                expandida={true}
                            />
                            <FormEstilizado method="dialog">
                                <BotaoEstilizado formMethod="dialog" onClick={retirarOverlay}>X</BotaoEstilizado>
                            </FormEstilizado>
                        </AgrupandoDentroDialogo>
                    </DialogEstilizado>
                </>
            }

        </>
    )

}

export default ModalZoom;