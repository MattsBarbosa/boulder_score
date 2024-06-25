import { ReactElement } from 'react'
import { Title as TitleStyle } from './styles'

export type Props = {
    children: string | ReactElement | any[]
    fontSize?: number
}


const Title = (props: Props) => (
    <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title