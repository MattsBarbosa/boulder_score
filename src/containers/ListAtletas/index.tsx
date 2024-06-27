import { Title } from '../../components/Title/styles'
import List from '../../components/List';
import { useState, useEffect } from 'react';
import { deleteAtleta, getAllAtletas } from '../../services/AtletaService'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { toast } from 'react-toastify'
import { Item } from './styles';


function ListAtletas() {

    const [atletas, setAtletas] = useState([])

    const navigator = useNavigate();

    const AtletaBoulder = (atletaId: string) => {
        navigator(`/atleta-boulder/${atletaId}`)
    }

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

    //Buttons Functions

    function editAtleta(atletaId: string) {
        navigator(`/edit-atleta/${atletaId}`)
    }
    
    function removeAtleta(ateltaId: string) {
        deleteAtleta(ateltaId)
        toast.success("Atleta deletado com sucesso.")
        setAtletas((atletas) => 
        atletas.filter((a) => a['id'] !== ateltaId)
        )

        navigator("")
    }

    return(
        <>
        <Title>Lista de Atletas</Title>
        <List>
        {
            atletas.map(atleta => 
                <Item key={atleta['id']}>
                    <div onClick={() => AtletaBoulder(atleta['id'])}>
                        <b>Número:</b>
                        <p>{atleta['numero']}</p>
                        <b>Nome:</b>
                        <p>{atleta['nome']}</p>
                        <b>Pontuação total:</b>
                        <p>{atleta['pontuacaoTotal']}</p>
                        <b>Categoria:</b>
                        <p>{atleta['categoria']}</p>
                    </div>
                    <Button $bgcolor='edit' onClick={() => editAtleta(atleta['id'])}>Editar</Button>
                    <Button $bgcolor='delete' onClick={() => removeAtleta(atleta['id'])}>Deletar</Button>
                </Item>
            )
        }
        </List>
        </>
    )
}

export default ListAtletas