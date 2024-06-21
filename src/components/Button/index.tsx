import { Button as ButtonStyle, FormButtonStyle } from './styles'

export type Props = {
    onClick?: (e: any) => void
    children: string
    $bgcolor?: 'primary' | 'secondary' | 'save' | 'edit' | 'delete'
}

export const Button = ({children, $bgcolor = 'primary', onClick}: Props) => (
    <ButtonStyle $bgcolor={$bgcolor} onClick={onClick}>{children}</ButtonStyle>
)

export const FormButton = ({children, $bgcolor = 'primary', onClick}: Props) => (
    <FormButtonStyle $bgcolor={$bgcolor} onClick={onClick}>{children}</FormButtonStyle>
)
