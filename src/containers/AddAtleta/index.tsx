import { FormButton } from "../../components/Button"
import { FormDiv, FormLabel, FormStyling } from "../../components/FormContainer"
import Title from "../../components/Title"

import { FormInput } from './styles'

const AddAtleta= () => {

    return (
        <>
            <Title>Add Atleta</Title>
            <FormStyling>
                <form action="">
                    <FormDiv>
                    <FormDiv>
                        <FormLabel>Número:</FormLabel>
                        <FormInput type="text" placeholder="0"/>
                    </FormDiv>
                        <FormLabel>Nome Completo:</FormLabel>
                        <FormInput type="text" placeholder="Nome Completo"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Categoria:</FormLabel>
                        <FormInput type="text" placeholder="Ex: amador"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Pontuação Total:</FormLabel>
                        <FormInput type="text" placeholder="1234"/>
                    </FormDiv>
                    <FormButton backgroundColor="save">Salvar</FormButton>
                    <FormButton backgroundColor="delete">Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )

}
    
export default AddAtleta