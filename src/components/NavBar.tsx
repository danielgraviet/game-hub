import { HStack, Image} from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch />
    </HStack>
  )
}

export default navbar
