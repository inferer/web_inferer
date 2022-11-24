import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MenuItem = ({
  title,
  showMenu,
  onClick
}) => {
  const router = useRouter()
  const [currentItem, setCurrentItem] = useState('')

  useEffect(() => {
    if (router.pathname === '/') setCurrentItem('Home')
    if (router.pathname === '/faq') setCurrentItem('FAQ')
    if (router.pathname === '/community') setCurrentItem('Community')
  }, [router])

  return (
    <div className="px-[5.3333vw]"
      // onMouseOver={e => {
      //   setCurrentItem(title)
      // }}
      // onMouseLeave={() => {
      //   setCurrentItem('')
      // }}
      onClick={() => {
        onClick && onClick()
      }}
    >
      <div className={`
        h-[10.4vw] rounded-[2.8vw] flex items-center justify-center text-white text-[4.2667vw] font-medium cursor-pointer 
        ${showMenu ? 'hover:bg-[rgba(10,9,23,1)]' : ''}
        `}>
        <span className={`${currentItem === title ? 'menu-text text-[4.2667vw] font-fbold' : ' font-fmedium'}`}>{title}</span>
      </div>
    </div>
  )
}

const H5Menu = ({ className }) => {
  const router = useRouter()
  const [currentItem, setCurrentItem] = useState('')
  const handleHover = (current) => {
    setCurrentItem(current)
  }
  const [showMenu, setShowMenu] = useState(false)
  const [showBg, setShowBg] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 1) {
        setShowBg(false)
      } else {
        setShowBg(true)
      }
    }

    const clickAnyway = () => {
      setShowMenu(false)
    }
    document.addEventListener('click', clickAnyway)
    return () => {
      window.onscroll = null
      document.removeEventListener('click', clickAnyway)
    }
  }, [])

  return (
    <>
    <div className={`px-[5.3333vw] py-[6.6667vw] fixed w-full top-0 left-0 transition-all ${showBg ? 'bg-[#0F0C2F] bg-opacity-95' : ''} ${showMenu ? ' -z-10' : ' z-10'}`}>
      <div className="flex items-center justify-between relative z-50">
        <div>
          <img src="/h5/logo.png" className="w-[5.3333vw] h-[5.3333vw]" />
        </div>
        <div
          className="relative w-[5.3333vw] h-[5.3333vw] cursor-pointer"
          onClick={e => {
            e.stopPropagation()
            setShowMenu(!showMenu)
          }}
        >
          <img src="/h5/menus.png" className={`w-[5.3333vw] h-[5.3333vw] absolute`} />
        </div>
      </div>
    </div>
    <div className={`px-[5.3333vw] py-[6.6667vw] fixed w-full top-0 left-0 transition-all ${showBg ? 'bg-[#0F0C2F] bg-opacity-95' : ''} ${showMenu ? ' z-10' : ' -z-10'}`}>
      <div className="flex items-center justify-between relative z-50">
        <div>
          <img src="/h5/logo.png" className="w-[5.3333vw] h-[5.3333vw]" />
        </div>
        <div
          className="relative w-[5.3333vw] h-[5.3333vw] cursor-pointer"
          onClick={e => {
            e.stopPropagation()
            setShowMenu(!showMenu)
          }}
        >
          <img src="/h5/menus2.png" className={`w-[5.3333vw] h-[5.3333vw] absolute `} />
        </div>
      </div>
      
      <div className={`
        bg-[#0F0C2F] h-[48vw] absolute left-0 w-full rounded-b-[2.8vw] pt-[14vw] transition-all duration-300
        ${showMenu ? 'top-0 opacity-100 z-10' : '-top-[50px] -z-10'}
      `}>
        <MenuItem title="Home" showMenu={showMenu} onClick={() => {
          setShowMenu(false)
          router.push('/')
        }} />
        <MenuItem title="FAQ" showMenu={showMenu}  onClick={() => {
          setShowMenu(false)
          router.push('/faq')
        }} />
        <MenuItem title="Community" showMenu={showMenu}  onClick={() => {
          setShowMenu(false)
          router.push('/community')
        }} />
      </div>
    </div>
    </>
  )
}

export default H5Menu