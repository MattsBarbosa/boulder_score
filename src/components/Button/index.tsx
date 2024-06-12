import { Button as ButtonStyle, FormButtonStyle } from './styles'

export type Props = {
    onClick?: () => void
    children: string
    backgroundColor?: 'primary' | 'secondary' | 'save' | 'edit' | 'delete'
}

export const Button = ({children, backgroundColor = 'primary', onClick}: Props) => (
    <ButtonStyle backgroundColor={backgroundColor} onClick={onClick}>{children}</ButtonStyle>
)

export const FormButton = ({children, backgroundColor = 'primary', onClick}: Props) => (
    <FormButtonStyle backgroundColor={backgroundColor} onClick={onClick}>{children}</FormButtonStyle>
)
