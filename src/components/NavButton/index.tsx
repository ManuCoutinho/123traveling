import { Box, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'

export const NavButton: React.FC = () => {
  return (
    <Box>
      <Link href='/' passHref>
        <IconButton
          aria-label='navigation-home'
          role='navigation'
          icon={<IoHomeOutline size={25} />}
          bgColor='transparent'
          color='purple.300'
          size='lg'
          variant='unstyled'
          outline={0}
          p={2}
          _hover={{
            color: 'yellow.500'
          }}
          _focus={{
            outline: 'none'
          }}
        />
      </Link>
    </Box>
  )
}