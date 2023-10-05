import Image from 'next/image'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'

export default function Home() {
  return (
    <div className='px-[6%] bg-[#F9F9F9]'>
      <NavBar />
      <Footer />
    </div>
  )
}
