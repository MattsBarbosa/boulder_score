import { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/Title";
import { FormDiv, FormStyling, FormLabel } from "../../components/FormContainer";
import { toast } from 'react-toastify'
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
            [name]: value === '' ? '' : Number(value)
        })
    }

    async function saveOrUpdateBoulder(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        try{
            if(id){
                await updateBoulder(id,boulder).then((response) => {
                    toast.success("Boulder alterado com sucesso")
                    navigator("/all-boulders")
                }).catch(error => {
                    console.error(error)
                })
            }else {
                await saveBoulder(boulder).then((response) => {
                    toast.success("Boulder salvo com sucesso")
                }).catch(error => {
                    console.error(error)
                })
            }
        } catch(error) {
            console.error(error)
        }

        setBoulder({
            numero: 0,
            pontuacaoPrimeiraTentativa: 0,
            pontuacaoSegundaTentativa: 0,
            pontuacaoPadrao: 0
        })
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
                        value={boulder.numero === 0 ? '' : boulder.numero} 
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
                        value={boulder.pontuacaoPrimeiraTentativa === 0 ? '' : boulder.pontuacaoPrimeiraTentativa} 
                        onChange={handleInputChange}/>

                        <FormLabel htmlFor="segunda">2ª</FormLabel>
                        <FormInput type="number" 
                        id="segunda"
                        placeholder="Segunda Tentativa"
                        name="pontuacaoSegundaTentativa"
                        value={boulder.pontuacaoSegundaTentativa === 0 ? '' : boulder.pontuacaoSegundaTentativa}
                        onChange={handleInputChange}/>
                        
                        <FormLabel htmlFor="padrao">Padrão</FormLabel>
                        <FormInput type="number" 
                        id="padrao"
                        placeholder="Pontuação Padrão"
                        name="pontuacaoPadrao"
                        value={boulder.pontuacaoPadrao === 0 ? '' : boulder.pontuacaoPadrao}
                        onChange={handleInputChange}/>  
                    </FormDiv>
                    <FormButton $bgcolor="save" onClick={saveOrUpdateBoulder}>Salvar</FormButton>
                    <FormButton $bgcolor="delete" onClick={() => navigator("/all-boulders")}>Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )
}

export default BoulderComponent