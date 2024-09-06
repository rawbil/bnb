// app/homes/[id].tsx

"use client";

import { GetServerSideProps } from 'next';
import { getHomeById } from './api';
import { Home } from './types'; // Adjust the path as needed

interface Props {
  home: Home | null;
}

const HomePage: React.FC<Props> = ({ home }) => {
  console.log('Rendering HomePage');
  console.log('Home data:', home);

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <div>
      <h1>{home.name}</h1>
      <p>{home.description}</p>
      <p>Price: ${home.price}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.params as { id: string };
  console.log(`Fetching home with ID: ${id}`);

  try {
    const home = await getHomeById(id);
    console.log('Fetched home:', home);
    return { props: { home } };
  } catch (error) {
    console.error('Error fetching home:', error);
    return { props: { home: null } };
  }
};

export default HomePage;
