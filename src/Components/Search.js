import React from 'react'
import './Search.css';
import { CiSearch } from "react-icons/ci";
export default function() {

  return (
    <div>
        <input type="text" className="search" placeholder='search a  album of your choice'/>
        <CiSearch className='icon' />
    </div>
  )
}
