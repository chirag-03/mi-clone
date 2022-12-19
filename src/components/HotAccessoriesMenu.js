import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className='hotAccessoriesList' to='/music'>Music Store</Link>
      <Link className='hotAccessoriesList' to='/smartDevice'>Smart Devices</Link>
      <Link className='hotAccessoriesList' to='/home'>Home</Link>
      <Link className='hotAccessoriesList' to='/lifestyle'>Life Style </Link>
      <Link className='hotAccessoriesList' to='/mobileaccessories'>MobileAccessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu
