import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { BoxInfo } from '../../components/Continent/BoxInfo';
import { ContinentContent } from '../../components/Continent/Content';
import { GridCities } from '../../components/Continent/GridCities';

const NorthAmerica: NextPage = () => {
  const bio = `Um continente com poucos países, mas muitas paisagens e cenários diferentes para ver.`;
  return (
    <>
      <Head>
        <title>World Trip | América do Norte</title>
      </Head>
      <BannerContinent continent='América do Norte' image='northAmerica/usa' color='yellow.500' />
      <Container maxW='container.lg'>
        <Grid as='section' templateColumns='repeat(2, 1fr)' gap={12} my={16}>
          <ContinentContent text={bio} />
          <BoxInfo country='3' language='6' city='10' />
        </Grid>
        <GridCities
          city='Montreal'
          country='Canadá'
          flag='https://flagcdn.com/w80/ca.png'
          img='/assets/continents/northAmerica/montreal.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default NorthAmerica;