import { HStack, Image } from '@chakra-ui/react'
import  logo  from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
  }

export default function Navbar({ onSearch }: Props) {
    return (
        <HStack padding={'16px'}>
            <Image src={logo} boxSize={'40px'} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}
