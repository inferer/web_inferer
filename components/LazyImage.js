import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const isDev = process.env.NODE_ENV === 'development'

const LazyImage = ({ src, className, ...others}) => {
  const [imgSrc, setImgSrc] = useState('')
  const { ref: inViewRef, inView, entry } = useInView({});
  useEffect(() => {
    if (inView && !imgSrc) {
      setImgSrc(isDev ? src : `https://website-1315068501.cos.ap-nanjing.myqcloud.com/web_inferer${src}`)
    }
    
  }, [inView])

  return (
    <img ref={inViewRef} src={imgSrc} className={ `transition-all ${!imgSrc ? 'opacity-0 ' : 'opacity-100 '} ${className}` } { ...others } alt="" />
  )
}

export default LazyImage