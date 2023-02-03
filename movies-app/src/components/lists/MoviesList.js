import { FlatList } from "native-base"
import { APP_KEY } from "../config/api_config"
import MoviesCard from "../listItems/MoviesCard"

const MoviesList = ({results}) => {


    return (
    <FlatList
        data={results}
        renderItem={({item}) => (
            <MoviesCard
                title={item.original_title} 
                image={item.poster_path}
                popularity={item.popularity}
                releaseDate={item.release_date}
                name={item.name}
            />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} 
    />
  )
}

export default MoviesList
