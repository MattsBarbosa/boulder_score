import { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/Title";
import { FormDiv, FormStyling, FormLabel } from "../../components/FormContainer";

import { FormInput } from "./styles";
import { FormButton } from "../../components/Button";
import { getBoulder, saveBoulder, updateBoulder } from "../../services/BoulderService";
import { useNavigate, useParams } from "react-router-dom";

interface Boulder {
    numero: number
    pontuacaoPrimeiraTentativa: number
    pontuacaoSegundaTentativa: number
    pontuacaoPadrao: number
}

const BoulderComponent = () => {

    const {id} = useParams()
    const navigator = useNavigate()

    const [boulder, setBoulder] = useState<Boulder>({
        numero: 0,
        pontuacaoPrimeiraTentativa: 0,
        pontuacaoSegundaTentativa: 0,
        pontuacaoPadrao: 0
    })

    useEffect(() => {
        if(id){
            getBoulder(id).then((response) => {
                setBoulder({
                    ...boulder,
                    numero: response.data.numero,
                    pontuacaoPrimeiraTentativa: response.data.pontuacaoPrimeiraTentativa,
                    pontuacaoSegundaTentativa: response.data.pontuacaoSegundaTentativa,
                    pontuacaoPadrao: response.data.pontuacaoPadrao
                })
            }).catch(error => {
                console.error(error)
            })
        }
    }, [id])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBoulder({
            ...boulder,
            [name]: value
        })
    }

    function saveOrUpdateBoulder(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        if(id){
            updateBoulder(id,boulder).then((response) => {
                navigator("/all-boulders")
            }).catch(error => {
                console.error(error)
            })
        }else {
            saveBoulder(boulder).then((response) => {
            }).catch(error => {
                console.error(error)
            })
        }
    }

    return (
        <>
            <Title>{id ? "Edit Boulder" : "Add Boulder" }</Title>
            <FormStyling>
                <form>
                    <FormDiv>
                        <FormLabel htmlFor="numero">Número do Boulder:</FormLabel>
                        <FormInput type="number"
                        id="numero"
                        placeholder="0"
                        name="numero" 
                        value={boulder.numero} 
                        onChange={handleInputChange}/>
                    </FormDiv>
                    <FormDiv> 
                        <FormLabel htmlFor="primeira">Pontuação:</FormLabel>
                        <br />
                        <FormLabel htmlFor="primeira">1ª</FormLabel>
                        <FormInput type="number"
                        id="primeira"
                        placeholder="Primeira Tentativa"
                        name="pontuacaoPrimeiraTentativa"
                        value={boulder.pontuacaoPrimeiraTentativa} 
                        onChange={handleInputChange}/>

                        <FormLabel htmlFor="segunda">2ª</FormLabel>
                        <FormInput type="number" 
                        id="segunda"
                        placeholder="Segunda Tentativa"
                        name="pontuacaoSegundaTentativa"
                        value={boulder.pontuacaoSegundaTentativa}
                        onChange={handleInputChange}/>
                        
                        <FormLabel htmlFor="padrao">Padrão</FormLabel>
                        <FormInput type="number" 
                        id="padrao"
                        placeholder="Pontuação Padrão"
                        name="pontuacaoPadrao"
                        value={boulder.pontuacaoPadrao}
                        onChange={handleInputChange}/>  
                    </FormDiv>
                    <FormButton $bgcolor="save" onClick={saveOrUpdateBoulder}>Salvar</FormButton>
                    <FormButton $bgcolor="delete">Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )
}

export default BoulderComponent