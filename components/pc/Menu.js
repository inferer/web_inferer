import LaunchAppButton from '../LaunchAppButton';
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

const MenuItem = ({ children, text, onClick }) => {
  const router = useRouter()
  const [currentItem, setCurrentItem] = useState('')
  const [hoverIng, setHoverIng] = useState(false)

  useEffect(() => {
    if (router.pathname === '/') setCurrentItem('Home')
    if (router.pathname === '/faq') setCurrentItem('FAQ')
    if (router.pathname === '/community') setCurrentItem('Community')
  }, [router])


  return (
    <div className="text-base font-fbold text-white cursor-pointer  transition-all"
      onClick={e => {
        onClick && onClick()
      }}
      onMouseOver={e => {
        setHoverIng(true)
      }}
      onMouseLeave={e => {
        setHoverIng(false)
      }}
    >
      <span className={` transition-all
        ${hoverIng ? 'menu-text' : ''}
      `}>{text || children}</span>
    </div>
)
}

const Menu = () => {
  const [showBg, setShowBg] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 1) {
        setShowBg(false)
      } else {
        setShowBg(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`fixed left-0 right-0 top-0 justify-center h-[104px] items-center hidden sm:flex transition-all
      ${showBg ? 'bg-[#0A0917] bg-opacity-95' : ''}
    `}>
      <div className='w-full max-w-[1200px] flex justify-between items-center'>
        <img src='/h5/logo.png' className='w-10 h-10' 
          onClick={e => {
            router.push('/')
          }}
        />
        <div className='text-base font-fbold text-white flex space-x-9 items-center'>
          <MenuItem className="cursor-pointer hover:text-[#44488F]">
              DOCS
          </MenuItem>
          <MenuItem className="cursor-pointer hover:text-[#44488F]">
              WHITEPAPER
          </MenuItem>
          <MenuItem className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
            router.push('/community')
          }}>
              COMMUNITY
          </MenuItem>
          <MenuItem className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
            router.push('/faq')
          }}>
              FAQ
          </MenuItem>
          <div className='launch-btn p-[2px] cursor-pointer ' 
          onClick={()=>{
              router.push('/app')
          }}>
            <div className='bg-[#121327] hover:bg-transparent transition-all rounded-[3px] flex justify-center items-center h-full text-white'>LAUNCH APP</div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu



