import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import { setLocation } from '../redux/Slice/addressslice';

export default function Address() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    state: '',
    city: '',
    country: '',
  });

  const handleAddress = (e) => {
    e.preventDefault();
    dispatch(setLocation(address));
    setAddress({
      state: '',
      city: '',
      country: '',
    });
    navigate('/order');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md mt-24">
      <form className="space-y-4 font-semibold text-lg m-2 self-center" onSubmit={handleAddress}>
        <p className='p-2 m-c flex justify-center text-cyan-700 font-bold text-xl'>Shippment Address</p>
        <input
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Enter your state/street"
          required
          value={address.state}
          onChange={(e) =>
            setAddress({
              ...address,
              state: e.target.value,
            })
          }
        />
        <input
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Enter your City"
          value={address.city}
          required
          onChange={(e) =>
            setAddress({
              ...address,
              city: e.target.value,
            })
          }
        />
        <input
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Enter your Country"
          value={address.country}
          required
          onChange={(e) =>
            setAddress({
              ...address,
              country: e.target.value,
            })
          }
        />

        <Button text={'Add the address'} />
      </form>
    </div>
  );
}
