import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button"
import { SidebarContainer } from "./styles"

function SideBar() {

    const navigator = useNavigate();

    function AddBoulder() {
        navigator('/add-boulder');
    }

    function AddAtleta() {
        navigator('/add-atleta');
    }

    function ListaAtletas() {
        navigator('/all-atletas')
    }

    function ListaBoulders() {
        navigator('/all-boulders')
    }

    return(
        <aside>
            <SidebarContainer>
                <Button backgroundColor="primary" onClick={AddBoulder}>Add Boulder</Button>
                <Button backgroundColor="primary" onClick={AddAtleta}>Add Atleta</Button>
                <Button backgroundColor="primary" onClick={ListaAtletas}>Lista de Atletas</Button>
                <Button backgroundColor="primary" onClick={ListaBoulders}>Lista de Boulders</Button>
            </SidebarContainer>
        </aside>
    )
}

export default SideBar