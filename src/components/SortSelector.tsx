import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

export default function SortSelector({ onSelectSortOrder, selectedSortOrder }: Props) {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ];

    const currentSortOrder = sortOrders.find((order) => order.value === selectedSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {/* {selectedSort?.name || 'Platforms'} */}
                { currentSortOrder?.label || 'Order by: Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) =>
                    <MenuItem key={order.value} onClick={() => onSelectSortOrder(order.value)} >
                        {order.label}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}
