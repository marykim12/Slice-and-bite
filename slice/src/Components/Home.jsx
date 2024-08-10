import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Order'); 
  };
    
  return (
    <div className='p-8'> 
         <h1 className='text-3xl font-bold text-center my-10'> Welcome To Slice and Bite</h1>

    <div className="flex flex-col-reverse lg:flex-row items-center justify-between"> 
  
    <img src="/src/assets/images/Red-Velvet.jpg" className='w-4/6 h-4/6'/>
    <p className='text-2xl font-bold text-center '>Cakes are special. Every birthday, every celebration ends with something sweet, a cake and people remember. It's all about the memories
         - Buddy Valastro</p>
         </div>

         <div>
         <button
          onClick={handleButtonClick}
          className='bg-rose-400 text-white px-20 py-5 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Order Now
        </button>
         </div>
      
    
    </div>
  )
}

export default Home
