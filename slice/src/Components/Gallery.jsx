import React, { useEffect, useState } from 'react'

function Gallery() {
    const [gallery,setGallery] = useState([]);

    useEffect(() => {const fetchGallery =async() => {
        try{
            const response = await fetch('http://localhost:3000/CAKES');
              const data = await response.json();
              console.log('fetched data:', data)
              setGallery(data)  ;
            
        }
        catch (error) {
            console.error(`Error`, error);

        }
    };
    fetchGallery();
},  []);

    
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold text center m-8'>Our Cakes</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0'> 
        {gallery.length > 0 ? (
            gallery.map((cake) =>(
            <div key ={cake.id} className=' p-2'>
                
                <img src={cake.image} alt={cake.name} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" />
                <h2 className='text-xl font-semibold'>{cake.name}</h2>
                 <h3 className='text-lg font-medium'>{cake.price}</h3>
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
