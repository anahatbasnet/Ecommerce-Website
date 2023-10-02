import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useTranslation, Trans } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export default function Navbar({ onSelectCategory, setSearch, state }) {
  const lngs = {
    en: { nativeName: "EN" },
    np: { nativeName: "NP" },
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const url = window.location.href;
  const [selectedCategory, setSelectedCategory] = useState(state ? state : "");
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
        console.error("Error fetching search suggestions:", error);
      }
    }, 500);
  };

  useEffect(() => {
    setSelectedCategory(state ? state : "");
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
      case "jewelry":
        navigate("/jewelry");
        break;
      case "electronics":
        navigate("/electronics");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm === "") {
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
    setSearchTerm("");
    setSearchSuggestions([]);
  };

  return (
    <div className="w-[full]">
      <nav className="flex justify-between items-center py-6 xl:px-10 xl:max-w-9xl xl:w-7xl  mx-auto bg-[#0F4C75] xl:h-[5rem] lg:h-[6rem] h-[5rem]">
        <div className="logo w-[15rem] visible pl-2">
          <Link to="/">
            <img
              src={logo}
              alt="bazaar"
              className="w-[10rem] xl:h-7  xl:max-h-[2rem] xl:max-w-[15rem] lg:max-w-[10rem] xl:m-8 ml-0  "
            />
          </Link>
        </div>

        <div className="about text-sm xl:text-xl text-[#BBE1FA] flex xl:flex xl:justify-evenly   xl:w-[10rem] ">
          <select
            className="bg-[#0F4C75]  xl:ml-5 ml-2 mb-2 w-[5rem] lg:w-[10rem] sm:w-[7rem] text text-xs sm:text-lg md:w-[8rem]  md:text-xl lg:text-2xl xl:w-[10rem] mt-2 xl:mt-0"
            onChange={handleCategorySelect}
            value={selectedCategory}>
            <option value="">{t("category")}</option>
            <option value="men's clothing"> {t("mensclothing")}</option>
            <option value="jewelry">{t("jwelry")}</option>
            <option value="electronics">{t("Electronics")}</option>
          </select>
        </div>

        {url === "http://localhost:3000/" && (
          <div className="first  space-x-6 xl:flex flex-row items-center">
            <div className="about text-sm lg:text-2xl text-[#BBE1FA]  xl:flex xl:justify-evenly hidden xl:visible">
              <Link to={"/about"} className="ml-5 mb-2">
                <Trans i18nKey="about"> {t("learn")}</Trans>
              </Link>
            </div>

            <div className="flex items-center  xl:w-[35rem] md:w-[24rem] lg:w-[36rem] w-[7rem] border ">
              <input
                type="text"
                onChange={handleSearchChange}
                className="flex xl:w-[35rem] lg:w-[36rem] md:w-[24rem] w-[6rem] border-sky-700 border-2 "
                placeholder="Search"
                value={searchTerm}
              />

              {searchTerm && (
                <AiOutlineClose
                  className="ml-2 text-[#BBE1FA] cursor-pointer"
                  onClick={clearSearchSuggestions}
                />
              )}
              <button onClick={handleSearchChange}>
                <AiOutlineSearch className=" text-[#BBE1FA] " />
              </button>
            </div>

            {searchSuggestions.length > 0 && (
              <ul className="absolute bg-white p-2 top-14 xl:left-[33rem] border border-gray-300 xl:w-[33.5rem] w-[12rem]">
                {searchSuggestions.map((suggestion, index) => (
                  <li
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    key={index}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <div className="ml-5 d-none d-xl-block flex p-0.8 mr-4 ">
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className={
                i18n.resolvedLanguage === lng
                  ? "border text-white p-0.5 bg-slate-400 text-xs"
                  : "border text-white text-xs xl:p-0.5"
              }>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

        <div className="middle flex flex-grow hidden xl:visible"></div>

        <div className="xl:last xl:flex xl:space-x-6  hidden xl:visible   ">
          <Link to="/wishlist">
            <div className="cart xl:text-3xl xl:m-2 text-xl text-[#BBE1FA] mb-[2.1rem] mr-2  ">
              <AiOutlineHeart />
            </div>
          </Link>
          <Link to="/cart">
            <div className="cart xl:text-3xl xl:m-2 text-xl text-[#BBE1FA] mr-2 ">
              <AiOutlineShoppingCart />
            </div>
          </Link>
          <Link to="/login">
            <div className="profile xl:text-3xl xl:m-2 text-xl text-[#BBE1FA]  ">
              <button onClick={handleLogout}>
                <BiLogOut />
              </button>
            </div>
          </Link>
        </div>
        <div className="xl:hidden text-xl text-[#BBE1FA] pt-5  h-[4rem] w-[3rem] bg-[#0F4C75] mr-5">
          <button onClick={handleMenu}>
            <AiOutlineMenu />
          </button>
          {toggle && (
            <>
              <div className="bg-[#0F4C75] w-[4rem]  absolute pr-5">
                <Link to={"/about"}>
                  <div className="profile xl:text-3xl xl:m-2 text-xl text-[#BBE1FA] mr:20 relative  ">
                    {t("learn")}
                  </div>
                </Link>
                <Link to="/wishlist">
                  <div className="profile xl:text-3xl xl:m-2 text-xl text-[#BBE1FA] mr:20 relative">
                    {t("wishlist")}
                  </div>
                </Link>
                <Link to="/cart">
                  <div className="cart xl:text-3xl xl:m-2  text-[#BBE1FA] xl:mr-2 mr:20 relative">
                    {t("cart")}
                  </div>
                </Link>
                <Link to="/login">
                  <div className="profile xl:text-3xl xl:m-2 text-xl text-[#BBE1FA]  mr:20 relative">
                    <button onClick={handleLogout}>{t("logout")}</button>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
