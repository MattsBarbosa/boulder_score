import * as Yup from 'yup'

export const atletaSchema = Yup.object({
    numero: Yup.number().required("Preencha o número de inscrição."),
    nome: Yup.string().required("Preencha o nome."),
    pontuacaoTotal: Yup.number(),
    categoria: Yup.string().required("Preencha a categoria.")
})