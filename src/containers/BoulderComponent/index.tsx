import { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/Title";
import { FormDiv, FormStyling, FormLabel } from "../../components/FormContainer";

import { FormInput } from "./styles";
import { FormButton } from "../../components/Button";
import { saveBoulder } from "../../services/BoulderService";

interface Boulder {
    numero: number
    pontuacaoPrimeiraTentativa: number
    pontuacaoSegundaTentativa: number
    pontuacaoPadrao: number
}

const BoulderComponent = () => {

    const [boulder, setBoulder] = useState<Boulder>({
        numero: 0,
        pontuacaoPrimeiraTentativa: 0,
        pontuacaoSegundaTentativa: 0,
        pontuacaoPadrao: 0
    })

    useEffect(() => {
        //use for updating boulder
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBoulder({
            ...boulder,
            [name]: value
        })
    }

    function saveOrUpdateBoulder(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        saveBoulder(boulder).then((response) => {
            console.log("Boulder salvo", response)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <>
            <Title>Add Boulder</Title>
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