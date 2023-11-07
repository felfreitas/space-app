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
const ModalZoom = ({ foto }) => {

    const [show, setShow] = useState(false);

    function retirarOverlay() {
        setShow(!show)
    }
    return (
        <>
            {foto &&
                <>
                    <Overlay hidden={show} />
                    <DialogEstilizado open={true}>
                        <AgrupandoDentroDialogo>

                            <Imagem
                                foto={foto}
                                expandida={true}
                            />
                            <FormEstilizado method="dialog">
                                <BotaoEstilizado onClick={retirarOverlay}>X</BotaoEstilizado>
                            </FormEstilizado>
                        </AgrupandoDentroDialogo>
                    </DialogEstilizado>
                </>
            }

        </>
    )

}

export default ModalZoom;