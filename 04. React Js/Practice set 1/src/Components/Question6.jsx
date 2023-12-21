const ProductListSort = ({products}) => {
  return <>
    <h2>Sorted Products</h2>
    {
      products.filter(({quantity, sales}) => sales > quantity).map((product, index) => <div key={index}>
        Name: {product.name}, Quantity: {product.quantity}, Sales: {product.sales}
      </div>)
    }
  </>
}

export default ProductListSort;