import React, { useEffect, useState } from 'react'

function Gallery() {
    const [gallery,setGallery] = useState([]);

    useEffect(() => {const fetchGallery =async() => {
        try{
            const response = await fetch('http://localhost:3000/CAKES');
              const data = await response.json();
              console.log('fetched data:', data)
              setGallery(data.CAKES)  ;
            
        }
        catch (error) {
            console.error(`Error`, error);

        }
    };
    fetchGallery();
},  []);

    
  return (
    <div>
      <h1 className='text-3xl font-bold text center m-8'>Our Cakes</h1>
      <div>
        {gallery.length > 0 ? (
            gallery.map((cake) =>(
            <div key ={cake.id}>
                <h2>{cake.name}</h2>
                <img src={cake.image} alt={cake.name} className='w-full h-auto object-cover rounded-md' />
                <h3>{cake.price}</h3>
                <p>{cake.description}</p>

            </div>    

            ))
        ) :(
            <p>Cakes...</p>
        )}
      </div>
    </div>
  )
};

export default Gallery
