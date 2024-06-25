import { ChangeEvent, useEffect, useState } from "react"
import { FormButton } from "../../components/Button"
import { FormDiv, FormLabel, FormStyling } from "../../components/FormContainer"
import Title from "../../components/Title"
import { toast } from 'react-toastify'
import { FormInput } from './styles'
import { getAtleta, saveAtleta, updateAtleta } from "../../services/AtletaService"
import { useNavigate, useParams } from "react-router-dom"


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

    const navigator = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        if(id){
            getAtleta(id).then((response) => {
                setAtleta((atleta) => ({
                    ...atleta,
                    numero: response.data.numero,
                    nome: response.data.nome,
                    pontuacaoTotal: response.data.pontuacaoTotal,
                    categoria : response.data.categoria
                }))
            }).catch(error => {
                console.error(error)
            })
        }
    }, [id])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAtleta({
            ...atleta,
            [name]: value
        })
    }

    function notify() {
        toast.success("Atleta salvo com sucesso");
    }

    function saveOrUpdateAtleta(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        if(id){
            updateAtleta(id, atleta).then((response) => {
                navigator("/all-atletas")
            }).catch(error => {
                console.error(error)
            })
        }else {
            saveAtleta(atleta).then((response) => {
                notify()
            }).catch(error => {
                console.error(error)
            })
        }
    }

    return (
        <>
            <Title>{id ? "Edit Atleta" : "Add Atleta"}</Title>
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