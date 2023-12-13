import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GenreSkeleton() {
  return (
    <ListItem paddingY='6px'>
        <HStack>
            <Skeleton height='30px' width='25%' />
            <SkeletonText width='75%' />
        </HStack>
    </ListItem>
  )
}
