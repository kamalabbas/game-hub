import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;

    // same as here since we are using the same let it be an object
    // selectedGenre: Genre | null;
    // selectedPlatform: Platform | null;
}

// export default function GameGrid( {selectedGenre, selectedPlatform}: Props ) {
export default function GameGrid( {gameQuery}: Props ) {
    // const { data, error, isLoading } = useGames(gameQuery.selectedGenre, selectedPlatform);
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='16px' spacing={4}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}

                {data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}
