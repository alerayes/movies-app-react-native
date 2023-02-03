
import { FlatList } from "native-base"
import { APP_KEY } from "../config/api_config"
import MoviesCard from "../listItems/MoviesCard"

const MoviesList = ({results, navigation}) => {


    return (
    <FlatList
        data={results}
        renderItem={({item}) => (
            <MoviesCard
                title={item.original_title ? item.original_title : item.name} 
                image={item.poster_path}
                popularity={item.popularity}
                releaseDate={item.release_date}
                name={item.name}
                firstAirDate={item.first_air_date}
                id={item.id}
                navigation={navigation}
                isMovie={item.title ? true : false}
            />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} 
    
    />
  )
}

export default MoviesList
