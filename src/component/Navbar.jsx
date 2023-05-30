import { useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

import { Link,  useNavigate } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

export default function Navbar({ onSelectCategory, setSearch, state }) {
  const navigate = useNavigate();
  
  const url = window.location.href;
  const [selectedCategory, setSelectedCategory] = useState(state ? state : '');
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const handleMenu = () => {
    setToggle(!toggle);
  };
  // eslint-disable-next-line
let timeoutId;
  const fetchSearchSuggestions = async (searchTerm) => {
    timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?title=${searchTerm}`
        );
        const data = await response.json();
        const suggestions = data
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => product.title);
        setSearchSuggestions(suggestions);
      } catch (error) {
        console.error('Error fetching search suggestions:', error);
      }
    }, 500);
  };
  

  useEffect(() => {
    setSelectedCategory(state ? state : '');
  }, [state]);

  const handleCategorySelect = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigateToCategory(category);
  };

  const navigateToCategory = (category) => {
    switch (category) {
      case "men's clothing":
        navigate("/men's clothing");
        break;
      case 'jewelry':
        navigate('/jewelry');
        break;
      case 'electronics':
        navigate('/electronics');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setSearchSuggestions([]);
    } else {
      fetchSearchSuggestions(searchTerm);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSearch(suggestion); // Trigger search with the selected suggestion
    setSearchSuggestions([]); // Clear suggestion list
  };

  const clearSearchSuggestions = () => {
    setSearchTerm('');
    setSearchSuggestions([]);
  };

  return (
    <div className=''>
      <nav className='flex justify-between items-center py-6 md:px-10 lg:max-w-9xl md:w-7xl  mx-auto bg-[#0F4C75] md:h-[5rem] h-[5rem]'>
        <div className='logo md:visible'>
          <Link to='/'>
            <img
              src={logo}
              alt='bazaar'
              className='w-[4rem] md:h-7 md:w-auto md:max-h-[2rem] md:max-w-[15rem] md:m-8 ml-0  '
            />
          </Link>
        </div>

        <div className='about text-sm md:text-xl text-[#BBE1FA] flex md:flex md:justify-evenly   md:w-[10rem] '>
          <select
            className='bg-[#0F4C75] md:ml-5 ml-2 mb-2 w-[5rem] text-xs md:text-xl md:w-[10rem] mt-2 md:mt-0'
            onChange={handleCategorySelect}
            value={selectedCategory}
          >
            <option value=''>CATEGORY</option>
            <option value="men's clothing">MEN'S CLOTHING</option>
            <option value='jewelry'>JEWELRY</option>
            <option value='electronics'>ELECTRONICS</option>
          </select>
        </div>

        {url === 'http://localhost:3000/' && (
          <div className='first  space-x-6 md:flex flex-row items-center'>
            <div className='about text-sm md:text-xl text-[#BBE1FA]  md:flex md:justify-evenly hidden md:visible'>
              <Link to={'/about'} className='ml-5 mb-2'>
                ABOUT
              </Link>
            </div>

            <div className='flex items-center  md:w-[35rem] w-[14rem] border '>
              <input
                type='text'
                onChange={handleSearchChange}
                className='flex md:w-[35rem] w-[12rem] border-sky-700 border-2 '
                placeholder='Search'
                value={searchTerm}
              />

              {searchTerm && (
                <AiOutlineClose
                  className='ml-2 text-[#BBE1FA] cursor-pointer'
                  onClick={clearSearchSuggestions}
                />
              )}
<button onClick={handleSearchChange}>

              <AiOutlineSearch className='ml-2 text-[#BBE1FA] ' />
</button>
            </div>

            {searchSuggestions.length > 0 && (
              <ul className='absolute bg-white p-2 top-14 md:left-[33rem] border border-gray-300 md:w-[33.5rem] w-[12rem]'>
                {searchSuggestions.map((suggestion, index) => (
                  <li
                    onClick={() => handleSuggestionClick(suggestion)}
                    className='cursor-pointer p-2 hover:bg-gray-100'
                    key={index}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className='middle flex flex-grow hidden md:visible'></div>

        <div className='md:last md:flex md:space-x-6  hidden md:visible   '>
          <Link to='/wishlist'>
            <div className='cart md:text-3xl md:m-2 text-lg text-[#BBE1FA] mb-[2.1rem] mr-2  '>
              <AiOutlineHeart />
            </div>
          </Link>
          <Link to='/cart'>
            <div className='cart md:text-3xl md:m-2 text-lg text-[#BBE1FA] mr-2 '>
              <AiOutlineShoppingCart />
            </div>
          </Link>
          <Link to='/login'>
            <div className='profile md:text-3xl md:m-2 text-lg text-[#BBE1FA]  '>
              <button onClick={handleLogout}>
                <BiLogOut />
              </button>
            </div>
          </Link>
        </div>
        <div className='md:hidden text-lg text-[#BBE1FA] pt-5 pr-7 h-[4rem] w-[3rem] bg-[#0F4C75] mr-5'>
          <button onClick={handleMenu}>
            <AiOutlineMenu />
          </button>
          {toggle && (
            <>
              <div className='bg-[#0F4C75] w-[4rem]  absolute pr-5'>
                <Link
                  to={'/about'}
                  className='profile md:text-3xl md:m-2 text-lg text-[#BBE1FA] mr:20 relative  '
                >
                  About
                </Link>
                <Link to='/wishlist'>
                  <div className='profile md:text-3xl md:m-2 text-lg text-[#BBE1FA] mr:20 relative'>
                    Wishlist
                  </div>
                </Link>
                <Link to='/cart'>
                  <div className='cart md:text-3xl md:m-2  text-[#BBE1FA] md:mr-2 mr:20 relative'>
                    Cart
                  </div>
                </Link>
                <Link to='/login'>
                  <div className='profile md:text-3xl md:m-2 text-lg text-[#BBE1FA]  mr:20 relative'>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}
