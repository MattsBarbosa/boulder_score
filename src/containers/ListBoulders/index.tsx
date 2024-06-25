import { useEffect, useState } from "react"
import List from "../../components/List"
import ListItem from "../../components/ListItem"
import { Title } from "../../components/Title/styles"
import { deleteBoulder, getAllBoulders } from "../../services/BoulderService"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"

function ListBoulders() {

    const [boulders, setBoulders] = useState([])

    const navigator = useNavigate();

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

    function editBoulder(boulderId: string) {
        navigator(`/edit-boulder/${boulderId}`)
    }

    function removeBoulder(boulderId: string) {
        deleteBoulder(boulderId)

        setBoulders((boulders) => 
            boulders.filter((b) => b['id'] !== boulderId)
        )

        navigator("")
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
                    <Button $bgcolor='edit' onClick={() => editBoulder(boulder['id'])}>Editar</Button>
                    <Button $bgcolor='delete' onClick={() => removeBoulder(boulder['id'])}>Deletar</Button>
                </ListItem>
            )
        }
        </List>
        </>
    )
}

export default ListBoulders