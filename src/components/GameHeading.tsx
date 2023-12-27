import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
// import useGenres from '../hooks/useGenres';
// import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Pros {
    gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Pros) {
    const genre = useGenre(gameQuery.genreId);

   const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading marginY={5} fontSize='5xl' as="h1">{heading}</Heading>
    )
}
