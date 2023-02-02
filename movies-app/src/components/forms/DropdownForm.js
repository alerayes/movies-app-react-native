import { CheckIcon, Select, VStack, FormControl } from "native-base"


const DropdownForm = props => {
    const { fetchMovies } = props

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
                        fetchMovies(value)
                    }}
                >
                    <Select.Item label='Now Playing' value='now_playing'/>
                    <Select.Item label='Popular' value='popular'/>
                    <Select.Item label='Top Rated' value='top_rated'/>
                    <Select.Item label='Upcoming' value='upcoming'/>
                </Select>
            </VStack>
        </FormControl>
    )
}

export default DropdownForm