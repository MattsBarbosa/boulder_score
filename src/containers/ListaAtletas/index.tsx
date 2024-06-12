import { Title } from '../../components/Title/styles'
import List from '../../components/List';
import ListItem from '../../components/ListItem';

function ListaAtletas() {

    return(
        <>
        <Title>Lista de Atletas</Title>
        <List>
            <ListItem>
                <p><b>Número:</b> 1025</p>
                <p><b>Nome:</b> Matheus Barbosa</p>
            </ListItem>
        </List>
        </>
    )
}

export default ListaAtletas