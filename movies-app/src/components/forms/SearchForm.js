import { Ionicons } from "@expo/vector-icons"
import { useState } from 'react'
import { FormControl, 
         Input, 
         VStack,  
         Icon, 
         HStack, 
         Select, 
         CheckIcon, 
         Button } from "native-base"


const SearchForm = props => {
    const {onInputChange, onValueChange, fetchSearchResults} = props
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})


    const validate = () => {
        if (formData.name === undefined) {
          setErrors({ ...errors,
            name: 'Name is required',
          });
          return false;
        }
    
        return true;
      };


    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');

        fetchSearchResults()        
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired isInvalid={'name' in errors} width='100%'>
                <FormControl.Label >
                    Search Movie/TV Show Name
                </FormControl.Label>
                <Input 
                    width='100%'
                    placeholder="i.e. James Bond, CSI"
                    variante='filled'
                    bg='gray.200'
                    px={3}
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={Ionicons} name='ios-search' />
                    }
                    onChangeText={value => {
                        onInputChange(value)
                        setData({ ...formData, name: value })
                      }}
                    _invalid={{
                        borderColor:'red.400' 
                    }}  
                />
                <FormControl.Label>
                    Choose Search Type
                </FormControl.Label>
                <HStack width='100%' space={2}>
                    <Select
                        minWidth='210'
                        accessibilityLabel='Search Type'
                        placeholder='Search Type'
                        onValueChange={value => {
                            onValueChange(value)
                        }}
                        _selectedItem={{
                            endIcon: <CheckIcon size="1" />
                        }}
                        _invalid={{
                            borderColor:'red.400' 
                        }}
                    >
                        <Select.Item label='Movie' value='movie'/>
                        <Select.Item label='Multi' value='multi'/>
                        <Select.Item label='TV' value='tv'/>
                    </Select>
                    <Button
                         startIcon={<Icon as={Ionicons} name='ios-search' />}
                         onPress={onSubmit}
                    >
                        Search
                    </Button>

                </HStack>
                <FormControl.HelperText 
                    _text={{
                        fontSize: 'xs'
                    }} 
                    _invalid={{
                        display: 'none'
                    }}
                >
                    Please select a search type
                </FormControl.HelperText>
                <FormControl.ErrorMessage 
                    _text={{
                        fontSize: 'xs'
                    }}
                >
                    Movie/TV show name is required
                </FormControl.ErrorMessage>
            </FormControl>

        </VStack>
    )

}
export default SearchForm