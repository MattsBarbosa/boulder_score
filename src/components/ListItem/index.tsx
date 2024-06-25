import { ReactElement } from "react"
import { ListItem as ListItemStyle } from './styles'

type Props = {
    children: ReactElement[] | ReactElement
    onClick?: (e: any) => void 
}

const ListItem = (props: Props) => (
    <ListItemStyle onClick={props.onClick}>{props.children}</ListItemStyle>
)

export default ListItem