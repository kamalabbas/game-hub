// import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
// import useGames, { Platform } from '../hooks/useGames';
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from '../hooks/useGenres';
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;

  // same as here since we are using the same let it be an object
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

// export default function GameGrid( {selectedGenre, selectedPlatform}: Props ) {
export default function GameGrid({ gameQuery }: Props) {
  // const { data, error, isLoading } = useGames(gameQuery.selectedGenre, selectedPlatform);
  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="16px">
      <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={4}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
          {/* {data?.results?.map((game) => (
              <GameCardContainer key={game.id}>
            <GameCard game={game} />
              </GameCardContainer>
          ))} */}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && <Button marginY={5} onClick={ () => fetchNextPage()}>{isFetchingNextPage ? 'loading...' : 'Load More'} </Button>} */}
    </Box>
  );
}
