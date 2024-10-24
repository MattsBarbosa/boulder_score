import { Button as ButtonStyle, FormButtonStyle } from './styles'

export type Props = {
    onClick?: (e: any) => void
    children: string
    $bgcolor?: 'primary' | 'secondary' | 'save' | 'edit' | 'delete'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export const Button = ({children, $bgcolor = 'primary', onClick, type = 'button', disabled }: Props) => (
    <ButtonStyle $bgcolor={$bgcolor} onClick={onClick} type={type} >{children}</ButtonStyle>
)

export const FormButton = ({children, $bgcolor = 'primary', onClick, type = 'button', disabled}: Props) => (
    <FormButtonStyle $bgcolor={$bgcolor} onClick={onClick} type={type} disabled={disabled}>{children}</FormButtonStyle>
)
