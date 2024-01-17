import Image from 'next/image'
import styles from '../app/styles/page.module.css'
import Link from 'next/link'
import Navbar from './api/home/Navbar'
import SiteInfo from './api/home/SiteInfo'
import React from 'react';
export default function Home() {

  function Custom404() {
    return (
      <div>
        <h1>Oops! Page not found.</h1>
        <p>The page you are looking for might have been removed or does not exist.</p>
        <Link href="/api/posts">Go back to the homepage</Link>
        <Link href="/api/posts/1">TRY Again</Link>
      </div>
    );
  };
  function Counter(state,action){
    if(typeof state === "undefined"){
      return 0;
    }
    switch (action.type){
      case 'INCREMENT':
        return state +1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  return (
    <>
      <main className={`{styles.main}`}>
        <Navbar></Navbar>
        <SiteInfo></SiteInfo>
      </main>
    </>
  )
}
