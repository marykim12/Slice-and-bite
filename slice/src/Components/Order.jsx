
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function OrderForm() {
    const [cakeType, setCakeType] = useState('');
    const [size, setSize] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        cakeType,
        size,
        name,
        phoneNumber,
      });

      navigate('/confirmation');
    };
    return (
      <div className='max-w-lg mx-auto p-6 bg-red shadow-lg rounded-lg'>

        <h1 className='text-2xl font-bold mb-6' >Order Your Cake</h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>

            Cake Type:
            <select value={cakeType} 
            onChange={(e) => setCakeType(e.target.value)} 
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500'>

              <option value="">Select</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="red-velvet">Red Velvet</option>
            </select>
        
          </label>
          <br />


          <label  className='block text-sm font-medium text-gray-700 mb-1'>
            Size:
            <select value={size} onChange={(e) => setSize(e.target.value)}
                 className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500'>

              <option value="">Select</option>
              <option value="small">1Kg</option>
              <option value="medium">1.5Kg</option>
              <option value="large">2Kg</option>
            </select>
          </label>
          <br />

          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
             className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500'/>
          </label>
          <br />

          <label className='block text-sm font-medium text-gray-700 mb-1'> 
            Phone Number:
            <input type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50'/>
          </label>
          <br />

          <button type="submit" className=' w-full bg-rose-400 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-2'>
            Submit Order</button>
        </form>
      </div>
    );
  }
  
  export default OrderForm;
