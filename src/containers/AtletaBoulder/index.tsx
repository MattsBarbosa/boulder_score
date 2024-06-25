import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAllBouldersFromAtleta, recordAttempt, recordSend } from "../../services/AtletaBoulderService";
import Title from "../../components/Title";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import { getAtleta } from "../../services/AtletaService";
import { Button } from "../../components/Button";
import { getBoulder } from "../../services/BoulderService";

interface AtletaBoulderProps {
    id: string
    atletaId: string
    boulderId: string
    boulderNumero: number
    tentativas: number
    pontuacao: number
    encadenado: boolean
}

interface Boulder {
    numero: number
    pontuacaoPrimeiraTentativa: number
    pontuacaoSegundaTentativa: number
    pontuacaoPadrao: number
}

function AtletaBoulder() {

    const [atletaBoulders, setAtletaBoulders] = useState<AtletaBoulderProps[]>([])
    const [atleta, setAtleta] = useState("")

    const {id} = useParams();

    useEffect(() => {
        getAllBouldersForAtleta(id)
        getAtletaById(id)
    }, [id])

    function getAllBouldersForAtleta(atletaId: string | undefined) {
        getAllBouldersFromAtleta(atletaId).then((response) => {
            const sortedBoulders = response.data.sort((a: { boulderNumero: number; }, b: { boulderNumero: number; }) => a.boulderNumero - b.boulderNumero);
            setAtletaBoulders(sortedBoulders)
        }).catch(error => {
            console.error(error)
        })
    }

    function getAtletaById(atletaId: string | undefined) {
        getAtleta(atletaId).then((response) => {
            setAtleta(response.data.nome)
        }).catch(error => {
            console.error(error)
        })
    }

    //Buttons Functions

    function addAttempt(atletaBoulderId: string) {
        recordAttempt(atletaBoulderId)

        setAtletaBoulders((boulders) => 
            boulders.map((b) => 
                b.id === atletaBoulderId
                ? {...b, tentativas: b.tentativas + 1}
                : b
            ))
    }

    const calculateScore = (tentativas: number, boulder: Boulder): number => {
        if (tentativas === 1) return boulder.pontuacaoPrimeiraTentativa;
        if (tentativas === 2) return boulder.pontuacaoSegundaTentativa;
        return boulder.pontuacaoPadrao;
    }

    async function addSend(boulderAtletaId: string, boulderId: string) {
        recordSend(boulderAtletaId)

        try {
            const response = await getBoulder(boulderId);
            const fetchedBoulder: Boulder = {
                numero: response.data.numero,
                pontuacaoPrimeiraTentativa: response.data.pontuacaoPrimeiraTentativa,
                pontuacaoSegundaTentativa: response.data.pontuacaoSegundaTentativa,
                pontuacaoPadrao: response.data.pontuacaoPadrao
            };

            setAtletaBoulders((boulders) =>
                boulders.map((b) =>
                b.id === boulderAtletaId
                    ? {
                        ...b,
                        tentativas: b.tentativas + 1,
                        encadenado: true,
                        pontuacao: calculateScore(b.tentativas + 1, fetchedBoulder)
                    }
                    : b
                )
            );
            } catch (error) {
            console.error('Error fetching boulder:', error);
            }
    }

    return (
        <>
        <Title>Boulders do {atleta} </Title>
        <List>
        {
            atletaBoulders.map(boulder => 
                <ListItem key={boulder['id']}>
                    <div>
                        <b>Número:</b>
                        <p>{boulder['boulderNumero']}</p>
                        <b>Tentativas:</b>
                        <p>{boulder['tentativas']}</p>
                        <b>Pontuação:</b>
                        <p>{boulder['pontuacao']}</p>
                        <b>Encadenado:</b>
                        <p>{boulder['encadenado'] ? "SIM" : "NÃO"}</p>
                    </div>
                    <div>
                        {boulder['encadenado'] ? 
                            <></>
                            : <>
                            <Button onClick={() => addAttempt(boulder['id'])}> +1 tentativa</Button>
                            <Button onClick={() => addSend(boulder['id'],boulder['boulderId'])}>Encadenou</Button>
                            </>  
                        }
                    </div>
                </ListItem>
            )
        }
        </List>
        </>
    )
}

export default AtletaBoulder