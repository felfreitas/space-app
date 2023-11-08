import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import bannerImagem from './assets/banner.png'
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";


const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`

const AppContainer = styled.div`
  width:1440px;
  margin: 0 auto;
  max-width:100%;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`

const ConteudoGaleria = styled.section`
  display:flex;
  flex-direction:column;
  flex-grow: 1;
`

const App = () => {


  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto)=>{
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria =>{
      if(foto.id === fotoSelecionada?.id){
        setFotoSelecionada({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        })
      }
      return {
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>

        <Cabecalho />
        <MainContainer>

          <BarraLateral />

          <ConteudoGaleria>

            <Banner texto='A galeria mais completa de fotos do espaço!' backgroundImage={bannerImagem} />


            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />

          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>

      <ModalZoom foto={fotoSelecionada} aoFechar={()=> setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>

      
    </FundoGradiente>
  )
}

export default App;
