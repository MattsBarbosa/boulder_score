import AtletaBoulder from "./containers/AtletaBoulder";
import AtletaComponent from "./containers/AtletaComponent";
import BoulderComponent from "./containers/BoulderComponent";
import ListAtletas from "./containers/ListAtletas";
import ListBoulders from "./containers/ListBoulders";
import SideBar from "./containers/SideBar";
import GlobalStyle, { Container } from "./styles"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <BrowserRouter>
        <Container>
          <SideBar/>
          <main>
            <Routes>
              {/* http://localhost:300/all-atletas */}
              <Route path="/all-atletas" element= {<ListAtletas/>}></Route>
              {/* http://localhost:300/add-atleta */}
              <Route path="/add-atleta" element= {<AtletaComponent/>}></Route>
              {/* http://localhost:300/edit-atleta/1 */}
              <Route path="/edit-atleta/:id" element= {<AtletaComponent/>}></Route>
              {/* http://localhost:300/all-boulders */}
              <Route path="/all-boulders" element= {<ListBoulders/>}></Route>
              {/* http://localhost:300/add-boulder */}
              <Route path="/add-boulder" element= {<BoulderComponent/>}></Route>
              {/* http://localhost:300/edit-boulder/1 */}
              <Route path="/edit-boulder/:id" element= {<BoulderComponent/>}></Route>
              {/* http://localhost:300/atleta-boulder/{id} */}
              <Route path="/atleta-boulder/:id" element= {<AtletaBoulder/>}></Route>
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;
