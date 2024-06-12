import AddAtleta from "./containers/AddAtleta";
import AddBoulder from "./containers/AddBoulder";
import ListaAtletas from "./containers/ListaAtletas";
import ListaBoulders from "./containers/ListaBoulders";
import SideBar from "./containers/SideBar";
import GlobalStyle, { Container } from "./styles"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Container>
          <SideBar/>
          <main>
            <Routes>
              {/* http://localhost:300/all-atletas */}
              <Route path="/all-atletas" element= {<ListaAtletas/>}></Route>
              {/* http://localhost:300/all-boulders */}
              <Route path="/all-boulders" element= {<ListaBoulders/>}></Route>
              {/* http://localhost:300/add-boulder */}
              <Route path="/add-boulder" element= {<AddBoulder/>}></Route>
              {/* http://localhost:300/add-atleta */}
              <Route path="/add-atleta" element= {<AddAtleta/>}></Route>
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
