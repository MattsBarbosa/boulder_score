import { ReactElement } from "react"
import { FormContainer, FormDivStyle , FormLabelStyle } from "./styles"

type Props = {
    children?: ReactElement[] | ReactElement | String
}

export const FormStyling = (props: Props) => (
    <FormContainer>{props.children}</FormContainer>
)

export const FormDiv = (props: Props) => (
    <FormDivStyle>{props.children}</FormDivStyle>
)

export const FormLabel = (props: Props) => (
    <FormLabelStyle>{props.children}</FormLabelStyle>
)

