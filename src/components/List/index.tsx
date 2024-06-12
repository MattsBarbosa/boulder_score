import { ReactElement } from 'react'
import {List as ListStyle} from './styles'

type Props = {
    children: ReactElement[] | ReactElement
}

const List = (props: Props) => (
    <ListStyle>{props.children}</ListStyle>
)

export default List