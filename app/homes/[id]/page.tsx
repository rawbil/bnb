// app/homes/[id]/page.tsx

import { fetchHomes } from '../../api';
import { useRouter } from 'next/navigation';

interface Home {
  _id: string;
  rating: string;
  name: string;
  location: string;
  description: string;
  price: string;
  imageUrl?: string;
}

const HomePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let home: Home | null = null;

  try {
    const response = await fetch(`http://localhost:5000/api/homes/${id}`);
    if (response.ok) {
      home = await response.json();
    } else {
      console.error('Failed to fetch home data');
    }
  } catch (error) {
    console.error('Error fetching home:', error);
  }

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <div>
      <h1>{home.name}</h1>
      <p>{home.description}</p>
      <p>Price: ${home.price}</p>
      {/* Add other home details here */}
    </div>
  );
};

export default HomePage;
