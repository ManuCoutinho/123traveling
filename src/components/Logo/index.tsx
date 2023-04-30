import { Box } from '@chakra-ui/react'
import Image from 'next/image'
export const Logo: React.FC = () => {
	return (
		<Box pos='relative'>
			<Image
				src='/assets/logo/logo.svg'
				alt='logo com a expressão Excursionista'
				height={50}
				width={300}
				role='img'
				aria-label='logo'
			/>
		</Box>
	)
}
