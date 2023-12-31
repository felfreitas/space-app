import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import bannerImagem from './assets/banner.png'
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Rodape from "./components/Rodape";


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
  const [tagSelecionada, setTagSelecionada] = useState(0);
  const [textoDigitado, setTextoDigitado] = useState('');



  const aoAlternarFavorito = (foto) => {
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      if (foto.id === fotoSelecionada?.id) {
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



  useEffect(() => {
    const fotosFiltradas = fotos.filter(ft => {

      const fotoFiltradaPorTag = !tagSelecionada || ft.tagId === tagSelecionada;
      const fotoFiltradaPorTexto = !textoDigitado || ft.titulo.toLowerCase().includes(textoDigitado.toLowerCase());

      return fotoFiltradaPorTag && fotoFiltradaPorTexto;
    });
    setFotosDaGaleria(fotosFiltradas)



  }, [tagSelecionada, textoDigitado])


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>

        <Cabecalho textoDigitado={textoDigitado} setTextoDigitado={setTextoDigitado} />
        <MainContainer>

          <BarraLateral />

          <ConteudoGaleria>

            <Banner texto='A galeria mais completa de fotos do espaço!' backgroundImage={bannerImagem} />


            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTagSelecionada={setTagSelecionada}
              fotos={fotosDaGaleria}
            />

          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />

      <ModalZoom foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito} />

    </FundoGradiente>
  )
}

export default App;
