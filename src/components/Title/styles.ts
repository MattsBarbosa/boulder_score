import styled from "styled-components"
import { Props } from './index'

export const Title = styled.h2<Props>`
    font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '28px'};
    font: bold;
    text-align: center;
    margin-bottom: 16px;
`