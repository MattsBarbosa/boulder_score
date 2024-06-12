import { ReactElement } from "react"
import { ListItem as ListItemStyle } from './styles'

type Props = {
    children: ReactElement[] | ReactElement
}

const ListItem = (props: Props) => (
    <ListItemStyle>{props.children}</ListItemStyle>
)

export default ListItem