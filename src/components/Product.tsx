import Image from 'next/image'
import productOne from '../assets/productOne.png'

export default function Product() {
  return (
    <div className="w-300 h-400">
      <Image src={productOne} width={300} height={300} alt="" />
      <p className="mt-4 text-2xl ">Produto 1</p>
      <p className="mt-2 text-lg font-bold text-green-600">R$ 56,00</p>
    </div>
  )
}
