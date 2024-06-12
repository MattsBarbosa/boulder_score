import List from "../../components/List"
import ListItem from "../../components/ListItem"
import { Title } from "../../components/Title/styles"

function ListaBoulders() {

    return(
        <>
        <Title>Lista de Boulders</Title>
        <List>
            <ListItem>
                <p><b>Boulder Número:</b> 1</p>
                <p><b>Pontuação:</b></p>
                <ul>
                    <li>1 Tentativa:</li>
                    <li>2 Tentativa:</li>
                    <li>3 Tentativa:</li>
                </ul>
            </ListItem>
        </List>
        </>
    )
}

export default ListaBoulders