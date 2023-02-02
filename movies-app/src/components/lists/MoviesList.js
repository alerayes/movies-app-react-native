import { FlatList } from "native-base"
import MoviesCard from "../listItems/MoviesCard"

const MoviesList = ({movies}) => {
  
    return (
    <FlatList
        data={movies}
        renderItem={({item}) => (
            <MoviesCard
                title={item.original_title} 
            />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} 
    />
  )
}

export default MoviesList
