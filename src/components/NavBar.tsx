import { HStack, Image } from '@chakra-ui/react'
import  logo  from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';

export default function Navbar() {
    return (
        <HStack justifyContent={'space-between'} padding={'16px'}>
            <Image src={logo} boxSize={'40px'} />
            <ColorModeSwitch />
        </HStack>
    )
}
