import { CheckIcon, Select, VStack, FormControl } from "native-base"

const TvShowForm = props => {

    const {fetchTvShows} = props


  return (
    <FormControl>
    <VStack space={2} width='80%' py={5}  mx='auto' my={4} >
        <Select
            minWidth='200'
            accessibilityLabel='Choose Movie Type'
            placeholder='Choose Movie Type'
            _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="1" />
            }}
            // ml='20'
            onValueChange={value => {
                fetchTvShows(value)
            }}
        >
            <Select.Item label="Airing Today" value="airing_today"/>
            <Select.Item label='Popular' value='popular'/>
            <Select.Item label="On the Air" value="on_the_air"/>
            <Select.Item label="Top Ratedr" value="top_rated"/>
        </Select>
    </VStack>
</FormControl>
  )
}

export default TvShowForm
