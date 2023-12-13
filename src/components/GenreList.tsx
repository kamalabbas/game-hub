import { HStack, List, ListItem, Image, Text, Spinner, Skeleton } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';
import GameCardSkeleton from './GameCardSkeleton';

export default function GenreList() {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  if (error) return null;
  // if(isLoading) return <Spinner />

  return (
    <List>
      {isLoading && skeletons.map(skeleton => <GenreSkeleton key={skeleton} />)}

      {data.map(genre =>
        <ListItem key={genre.id} paddingY='6px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg'>{ genre.name }</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}