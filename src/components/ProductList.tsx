import Product from './Product'

export default function ProductList() {
  return (
    <main>
      <header className="mt-8 ml-10 mr-10 flex items-end justify-between mb-8">
        <p className="uppercase font-bold">Promoções</p>
        <p>10 Produtos</p>
      </header>
      <hr />
      <div className="p-10 grid grid-cols-product-base justify-around items-center gap-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </main>
  )
}
