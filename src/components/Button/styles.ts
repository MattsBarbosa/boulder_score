import styled from 'styled-components'
import { Props } from './index'
import { colors } from '../../styles'

export const Button = styled.button<Props>`
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    border-color: white;
    margin-top: 10px;
    width: 100%;
    color: #f1f2f6;
    background-color: ${(props) => {
        switch(props.backgroundColor) {
            case 'primary':
                return colors.primary;
            case 'secondary':
                return colors.secondary;
            case 'save':
                return colors.save;
            case 'edit':
                return colors.edit;
            case 'delete':
                return colors.delete;
        }
    }};
    cursor: pointer;
    transition-duration: 500ms;

    &:hover {
        background-color: white;
        color: black;
    }
`

export const FormButtonStyle = styled(Button)`
    display: block;
    margin: 10px auto;
    width: 50%;
`