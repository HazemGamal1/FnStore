import Image from 'next/image'
'use client'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import { useEffect, useRef, useState} from 'react'
import Message from './components/Message'
export default function Home() {
  const [timer, setTimer] = useState(0);
  const firstName = useRef(null);
  return (
    <div>
      {/* <Message /> */}
      <div className='mx-18 lg:mx-28'>
        <Header/>
        <Hero/>
        <Collection />
      </div>
    </div>
  )
}