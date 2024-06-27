import styled from 'styled-components'

export const FormInput = styled.input`
    font-size: 16px;
    padding: 8px;
    display: block;
    margin: 10px auto;
    text-align: center;
    /* Hide the spin buttons in WebKit browsers */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Hide the spin buttons in Firefox */
    -moz-appearance: textfield;
`