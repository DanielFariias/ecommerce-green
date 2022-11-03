import Header from '../components/Header'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div className="max-w-screen-xls bg-gray-50">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Header />
      <ProductList />
    </div>
  )
}
