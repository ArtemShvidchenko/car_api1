import React from 'react';
import style from './Banner.module.css';

export default function Banner() {
  return (
    <div className={style.banner}>
        <img className={style.image} src="https://static.vecteezy.com/system/resources/thumbnails/008/461/390/small/car-rental-logo-on-white-background-luxury-car-illustration-modern-business-concept-car-rental-company-transportation-service-business-vector.jpg" alt="banner" />
    </div>
  )
}
