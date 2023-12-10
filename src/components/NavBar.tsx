import { HStack, Image, Text } from '@chakra-ui/react'
import  logo  from '../assets/react.svg';

export default function Navbar() {
    return (
        <HStack>
            <Image src={logo} boxSize={'60px'} padding={'16px 0'} />
            <Text> NavBar</Text>
        </HStack>
    )
}
