import AtletaComponent from "./containers/AtletaComponent";
import BoulderComponent from "./containers/BoulderComponent";
import ListAtletas from "./containers/ListAtletas";
import ListBoulders from "./containers/ListBoulders";
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
              <Route path="/all-atletas" element= {<ListAtletas/>}></Route>
              {/* http://localhost:300/all-boulders */}
              <Route path="/all-boulders" element= {<ListBoulders/>}></Route>
              {/* http://localhost:300/add-boulder */}
              <Route path="/add-boulder" element= {<BoulderComponent/>}></Route>
              {/* http://localhost:300/add-atleta */}
              <Route path="/add-atleta" element= {<AtletaComponent/>}></Route>
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
