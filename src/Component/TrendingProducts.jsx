import React from 'react'
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';


function TrendingProducts() {
  const products = [
    {
      id: 1,
      productName: 'Sports Shoe',
      color: 'Black',
      sizes: '7,8,9,10',
      oldprice: 4999,
      newprice: 3999,
      productImage: shoe1,
    },

    {
      id: 2,
      productName: 'Fashion Shoe Sneakers',
      color: 'Gray',
      sizes: '7,8,9',
      oldprice: 2499,
      newprice: 1999,
      productImage: shoe2,
    },
    {
      id: 3,
      productName: 'Sports Running Shoe',
      color: 'Pink',
      sizes: '6,7,8,9',
      oldprice: 2999,
      newprice: 2499,
      productImage: shoe3,
    },
    {
      id: 4,
      productName: 'Brown  Shoe',
      color: 'Brown',
      sizes: '8,9,10,11',
      oldprice: 4499,
      newprice: 3999,
      productImage: shoe4,
    },
    {
      id: 5,
      productName: 'Men shoe',
      color: 'Blue',
      sizes: '7,8,9,10',
      oldprice: 4499,
      newprice: 3999,
      productImage: shoe5,
    },
    {
      id: 6,
      productName: 'Brown Leather shoe',
      color: 'Brown',
      sizes: '7,8,9,10,11',
      oldprice: 4499,
      newprice: 3499,
      productImage: shoe6,
    },
  ]
  return (
    <div className='container my-3'>
      <h2 className='text-dark text-center pb-3 '><i className="bi bi-bag-plus-fill"></i> Products </h2>
      <div className='row row-gap-5'>
        {
          products.map((products, index) => {
            return (
              <div className='col-12 col-md-6 col-lg-4 ' key={index} >
                <div class="card" style={{ width: '18rem' }}>
                  <img src={products.productImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{products.productName}</h5>
                    <p class="card-text">Color: {products.color} </p>
                    <p class="card-text">Sizes: {products.sizes} </p>
                    <p class="card-text text-decoration-line-through text-danger">oldprice:: ₹ {products.oldprice} </p>
                    <p class="card-text">New Price: ₹ {products.newprice} </p>
                    <a href="#" class="btn btn-warning">Buy Now</a>
                  </div>
                </div>

              </div>
            )


          })
        }
      </div>
    </div >
  )
}

export default TrendingProducts