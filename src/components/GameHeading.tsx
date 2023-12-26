import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Pros {
    gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Pros) {
    const { data: genres } = useGenres();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId);

    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading marginY={5} fontSize='5xl' as="h1">{heading}</Heading>
    )
}
