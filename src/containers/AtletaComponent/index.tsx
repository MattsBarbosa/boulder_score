import { ChangeEvent, useEffect, useState } from "react"
import { FormButton } from "../../components/Button"
import { FormDiv, FormLabel, FormStyling } from "../../components/FormContainer"
import Title from "../../components/Title"

import { FormInput } from './styles'
import { saveAtleta } from "../../services/AtletaService"

interface Atleta {
    numero: number
    nome: string
    pontuacaoTotal: number
    categoria: string
}

const AtletaComponent = () => {

    const [atleta, setAtleta] = useState<Atleta>({
        numero: 0,
        nome: "",
        pontuacaoTotal: 0,
        categoria: ""
    })

    useEffect(() => {
        //use for updating atleta
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAtleta({
            ...atleta,
            [name]: value
        })
    }

    function saveOrUpdateAtleta(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        saveAtleta(atleta).then((response) => {
            console.log("Atleta salvo", response)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <>
            <Title>Add Atleta</Title>
            <FormStyling>
                <form>
                    <FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="numero">Número:</FormLabel>
                        <FormInput type="number" 
                        id="numero"
                        name="numero"
                        value={atleta.numero}
                        placeholder="0"
                        onChange={handleInputChange}/>
                    </FormDiv>
                        <FormLabel htmlFor="nome">Nome Completo:</FormLabel>
                        <FormInput type="text" 
                        id="nome"
                        name="nome"
                        value={atleta.nome}
                        placeholder="Nome Completo"
                        onChange={handleInputChange}/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="cat">Categoria:</FormLabel>
                        <FormInput type="text"
                        id="cat"
                        name="categoria"
                        value={atleta.categoria}
                        placeholder="Ex: amador"
                        onChange={handleInputChange}/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="total">Pontuação Total:</FormLabel>
                        <FormInput type="text"
                        id="total"
                        name="pontuacaoTotal"
                        value={atleta.pontuacaoTotal}
                        placeholder="1234"
                        onChange={handleInputChange}/>
                    </FormDiv>
                    <FormButton $bgcolor="save" onClick={saveOrUpdateAtleta}>Salvar</FormButton>
                    <FormButton $bgcolor="delete">Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )

}
    
export default AtletaComponent