import React from 'react'
import { useDispatch } from 'react-redux';
import style from "./UserDrop.module.css"
import { signOut } from 'next-auth/react';
import { removeUser } from '@/redux/reducers/cartSlice';
import Link from 'next/link';

const UserDrop = () => {
    const dispatch = useDispatch();
  const handleSignOut=() => {
    signOut();
    dispatch(removeUser());
  };
  return (
    <>
      <div className= {style.dropdown} >
        <div className= {style.btn}>
          <Link href={`/profile`}>Thông tin</Link>
        </div>
        <div className= {style.btn}>
        <div onClick={handleSignOut}>Đăng xuất</div>
        </div>
      </div>
    </>
  )
}

export default UserDrop
