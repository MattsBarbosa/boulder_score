import { Title } from '../../components/Title/styles'
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import { useState, useEffect } from 'react';
import { getAllAtletas } from '../../services/AtletaService'


function ListAtletas() {

    const [atletas, setAtletas] = useState([])

    useEffect(() => {
        getAllAtletasFromApi()
    }, [])

    function getAllAtletasFromApi() {
        getAllAtletas().then((response) => {
            const sortedAtletas = response.data.sort((a: { numero: number; }, b: { numero: number; }) => a.numero - b.numero);
            setAtletas(sortedAtletas);
        }).catch(error => {
            console.error(error)
        })
    }
    
    return(
        <>
        <Title>Lista de Atletas</Title>
        <List>
        {
            atletas.map(atleta => 
                <ListItem key={atleta['id']}>
                    <b>Número:</b>
                    <p>{atleta['numero']}</p>
                    <b>Nome:</b>
                    <p>{atleta['nome']}</p>
                    <b>Categoria:</b>
                    <p>{atleta['categoria']}</p>
                </ListItem>
            )
        }
        </List>
        </>
    )
}

export default ListAtletas