import Image from 'next/image'

import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import search from '../assets/search.svg'
import banner from '../assets/banner.png'

export default function Header() {
  return (
    <header>
      <nav className="h-24 flex justify-between items-center p-10">
        <p className="text-xl">★ Selfcare</p>
        <div className="flex gap-8">
          <a href="#">
            <Image src={search} width={24} height={24} alt="" />
          </a>
          <a href="#">
            <Image src={user} width={24} height={24} alt="" />
          </a>
          <a href="#">
            <Image src={cart} width={24} height={24} alt="" />
          </a>
        </div>
      </nav>
      <div>
        <Image src={banner} width={1440} height={375} alt="" />
      </div>
    </header>
  )
}
