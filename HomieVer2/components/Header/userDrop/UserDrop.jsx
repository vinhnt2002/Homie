import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./UserDrop.module.css"
import { signOut } from 'next-auth/react';
import { removeUser } from '@/redux/reducers/cartSlice';
import Link from 'next/link';

const UserDrop = () => {
    const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.cart);


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
