import { useEffect, useState } from "react"
import List from "../../components/List"
import ListItem from "../../components/ListItem"
import { Title } from "../../components/Title/styles"
import { getAllBoulders } from "../../services/BoulderService"

function ListBoulders() {

    const [boulders, setBoulders] = useState([])

    useEffect(() => {
        getAllBouldersFromApi()
    }, [])

    function getAllBouldersFromApi() {
        getAllBoulders().then((response) => {
            const sortedBoulders = response.data.sort((a: { numero: number; }, b: { numero: number; }) => a.numero - b.numero);
            setBoulders(sortedBoulders);
        }).catch(error => {
            console.error(error)
        })
    }

    return(
        <>
        <Title>Lista de Boulders</Title>
        <List>
        {   
            boulders.map(boulder =>
                <ListItem key={boulder['id']}>
                    <b>Número:</b>
                    <p>{boulder['numero']}</p>
                    <b>Pontuação:</b>
                    <ul>
                    <br></br>
                        <li>1ª Tentativa: {boulder['pontuacaoPrimeiraTentativa']}</li>
                        <br></br>
                        <li>2ª Tentativa: {boulder['pontuacaoSegundaTentativa']}</li>
                        <br></br>
                        <li>Pontuação Padrão: {boulder['pontuacaoPadrao']}</li>
                    </ul>
                </ListItem>
            )
        }
        </List>
        </>
    )
}

export default ListBoulders