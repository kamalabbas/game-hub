import { HStack, Image } from '@chakra-ui/react'
import  logo  from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

export default function Navbar() {
    return (
        <HStack padding={'16px'}>
            <Image src={logo} boxSize={'40px'} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}
