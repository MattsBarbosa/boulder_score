import { useState } from "react";
import Title from "../../components/Title";
import { FormDiv, FormStyling, FormLabel } from "../../components/FormContainer";

import { FormInput } from "./styles";
import { FormButton } from "../../components/Button";

const AddBoulder = () => {

    const [numero, setNumero] = useState('')
    const [pontuacao, setPontuacao] = useState([])

    return (
        <>
            <Title>Add Boulder</Title>
            <FormStyling>
                <form action="">
                    <FormDiv>
                        <FormLabel>Número do Boulder:</FormLabel>
                        <FormInput type="text"
                        placeholder="0"
                        name="numero" />
                    </FormDiv>
                    <FormDiv> 
                        <FormLabel>Pontuação:</FormLabel>
                        <FormInput type="text" 
                        placeholder="Primeira Tentativa"
                        name="pontuacao"/>
                        <FormInput type="text" 
                        placeholder="Segunda Tentativa"
                        name="pontuacao"/>
                        <FormInput type="text" 
                        placeholder="Terceira Tentativa"
                        name="pontuacao"/>  
                    </FormDiv>
                    <FormButton backgroundColor="save">Salvar</FormButton>
                    <FormButton backgroundColor="delete">Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )
}

export default AddBoulder