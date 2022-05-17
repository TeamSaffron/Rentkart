import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Footer from '../component/Footer'
import Rentkart from '../component/Rentkart'
import SideBar from '../component/Sidebar'
import Login from "../component/Login";

export default function Layout({children}) {
  // const {isLoginModalOpen} = useSelector((state) => ({
  //   isLoginModalOpen: state.userStore.isLoginModalOpen,
  // }), shallowEqual);
  return (
    <div>
      <Rentkart />
      {/* <SideBar isOpen={isLoginModalOpen}>
        <Login />
       </SideBar>   */}
      <div className='main-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
