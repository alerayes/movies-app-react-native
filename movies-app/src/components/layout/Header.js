import { StatusBar, Box, HStack, Text } from "native-base"

const Header = () => {
    return (
        <>
            <StatusBar backgroundColor='hotpink' barStyle='light-content'/>
            <Box safeAreaTop backgroundColor='hotpink'>
                <HStack bg='hotpink' px={1} py={3} alignItems='center' justifyContent='center'>
                    <Text color='#fff' fontSize={20} fontWeight='bold'>
                        Movies App
                    </Text>
                </HStack>
            </Box>
        </>    
    )
}

export default Header