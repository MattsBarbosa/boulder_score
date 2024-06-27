import { useEffect } from "react"
import { FormButton } from "../../components/Button"
import { FormDiv, FormLabel, FormStyling } from "../../components/FormContainer"
import Title from "../../components/Title"
import { toast } from 'react-toastify'
import { FormInput } from './styles'
import { getAtleta, saveAtleta, updateAtleta } from "../../services/AtletaService"
import { atletaSchema } from "../../schemas"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik";

interface Atleta {
    numero: string;
    nome: string;
    pontuacaoTotal: string;
    categoria: string;
}

const AtletaComponent = () => {

    const navigator = useNavigate()
    const {id} = useParams()

    const initialValues: Atleta = {
        numero: '',
        nome: '',
        pontuacaoTotal: '',
        categoria: ''
    }

    const { values, handleBlur, handleChange, handleSubmit, setValues, errors, touched, isSubmitting } = useFormik({
        initialValues,
        validationSchema: atletaSchema,
        enableReinitialize: true, // Ensure form initializes with initial values
        onSubmit: async (values, { resetForm, setSubmitting }) => {

            const convertedFormValues = {
                ...values,
                numero: Number(values.numero) || 0,
                pontuacaoTotal: Number(values.pontuacaoTotal) || 0
            }

            try{
                if(id){
                    await updateAtleta(id, convertedFormValues).then((response) => {
                        toast.success("Atleta alterado com sucesso");
                        navigator("/all-atletas")
                    }).catch(error => {
                        console.error(error)
                    })
                }else {
                    await saveAtleta(convertedFormValues).then((response) => {
                        toast.success("Atleta salvo com sucesso");
                    }).catch(error => {
                        console.error(error)
                    })
                }
                resetForm() //Reset form values
            } catch (error) {
                console.error(error)
            } finally {
                setSubmitting(false)
            }
        }
    })

    useEffect(() => {
        if(id){
            getAtleta(id).then((response) => {
                setValues((initialValues) => ({
                    ...initialValues,
                    numero: response.data.numero,
                    nome: response.data.nome,
                    pontuacaoTotal: response.data.pontuacaoTotal,
                    categoria : response.data.categoria
                }))
            }).catch(error => {
                console.error(error)
            })
        }
    }, [id, setValues]) //setValues updates Formik's values with fetched data

    return (
        <>
            <Title>{id ? "Edit Atleta" : "Add Atleta"}</Title>
            <FormStyling>
                <form onSubmit={handleSubmit}>
                    <FormDiv>
                        <FormLabel htmlFor="numero">Número:</FormLabel>
                        <FormInput type="number" 
                            id="numero"
                            name="numero"
                            placeholder="0"
                            value={values.numero}
                            onBlur={handleBlur}
                            onChange={handleChange}/>
                        <div>
                            {errors.numero && touched.numero &&
                                (<p>{errors.numero}</p>) }
                        </div>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="nome">Nome Completo:</FormLabel>
                        <FormInput type="text" 
                        id="nome"
                        name="nome"
                        placeholder="Nome Completo"
                        value={values.nome}
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                        <div>
                            {errors.nome && touched.nome &&
                                (<p>{errors.nome}</p>) }
                        </div>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="cat">Categoria:</FormLabel>
                        <FormInput type="text"
                        id="cat"
                        name="categoria"
                        placeholder="Ex: amador"
                        value={values.categoria}
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                        <div>
                            {errors.categoria && touched.categoria &&
                                (<p>{errors.categoria}</p>) }
                        </div>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel htmlFor="total">Pontuação Total:</FormLabel>
                        <FormInput type="number"
                        id="total"
                        name="pontuacaoTotal"
                        placeholder="1234"
                        value={values.pontuacaoTotal}
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                    </FormDiv>
                    <FormButton type='submit' disabled={isSubmitting} $bgcolor="save">{isSubmitting ? 'Salvando' : 'Salvar'}</FormButton>
                    <FormButton $bgcolor="delete" onClick={() => navigator("/all-atletas")}>Cancelar</FormButton>
                </form>
            </FormStyling>
        </>
    )

}
    
export default AtletaComponent