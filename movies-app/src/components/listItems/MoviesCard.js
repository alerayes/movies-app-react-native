import { Text } from "native-base"

const MoviesCard = props => {
  const {title} = props

  return (
    <Text>{title}</Text>
  )
}
export default MoviesCard