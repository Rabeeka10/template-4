'use client'
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-full'>
      {/* Top Section */}
      <div className='bg-violet-500 text-white py-2 text-sm flex justify-between items-center w-full'>
        <div className='text-center flex-1'>
          <div className='flex justify-center gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <CiMail className='text-2xl' />
              <p className='text-sm'>mhhasanul@gmail.com</p>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <IoCallOutline className='text-2xl' />
              <p className='text-sm'>(12345)67890</p>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-[8px] mr-20'>
          <div className='text-white text-sm font-normal leading-[21px]'>
            English
          </div>
          <RiArrowDropDownLine className='text-white text-3xl' />
          <div className='text-white text-sm font-normal leading-[21px]'>
            USD
          </div>
          <RiArrowDropDownLine className='text-white text-3xl' />
          <div className='text-white text-sm font-normal leading-[21px]'>
            Login
          </div>
          <FaRegUser className='text-white text-xl' />
          <div className='text-white text-sm font-normal leading-[21px]'>
            Wishlist
          </div>
          <CiHeart className='text-white text-xl' />
          <FiShoppingCart className='text-white text-xl' />
        </div>
      </div>

      {/* Main Navigation */}
      <div className='flex justify-between items-center px-8 md:px-20 py-4 w-full'>
        <h1 className='text-3xl font-bold text-black'>Hekto</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>

        <nav className={`md:flex space-x-8 items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <a href='#' className='text-red-600 hover:text-black flex'>
            Home
            <RiArrowDropDownLine className='text-red text-xl' />
          </a>
          <a href='#' className='text-slate-600 hover:text-black'>Pages</a>
          <a href='#' className='text-slate-600 hover:text-black'>Products</a>
          <a href='#' className='text-slate-600 hover:text-black'>Blogs</a>
          <a href='#' className='text-slate-600 hover:text-black'>Shop</a>
          <a href='#' className='text-slate-600 hover:text-black'>Contact</a>
        </nav>

        {/* Search Icon */}
        <div className='flex items-center space-x-4 mr-10'>
          <div className='hidden lg:flex items-center bg-slate-100 px-3 py-2'>
            <input type="text" placeholder='' className='bg-slate-100 outline-none text-sm' />
            <div className='bg-pink-600 w-full h-full text-white text-2xl'>
            <CiSearch
                className="text-xl w-[50px] h-[30px] bg-[#FB2E86] text-[#F3F9FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
