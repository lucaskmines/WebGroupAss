import {Link, useLoaderData} from 'react-router-dom';
import './StoreItems.css';

export async function fetchStoreItems ({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items`);
    return await response;
}

export default function StoreItems() {
  const items = useLoaderData();
  console.log("StoreItems.js");

  return (
    <div className='main'>
      <h2>Items: </h2>
      <link rel="stylesheet" href="./StoreItems.css"/>
      {items.map((item) => (
        <div key={item._id}>
          <Link to={`/stores/${item.store_id}/items/${item._id}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}  
    </div>
  );
}
