import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
// import Box from '../Box/Box'
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
// import MovieDetails from './MovieDetails'



const Product = ({foods}) => {

    

  return (
    <div>
      <Heading/>

      <div className="flex flex-wrap justify-center items-center mt-2">
          {
            foods && foods.map((food) =>

              <div>
                <div className="p-4 md:p-2 w-52">
                  <Link to={food.foodname}>
                    <div className="top-3">
                      <img src={food.image} alt=""/>
                    </div>
                    <p className="rate1">{food.price}</p>
                    <p className="title">{food.foodname}</p>

                    <div className="flex justify-between mt-3">
                      <div className="flex">
                        <img src={food.image1} alt=""/>
                        <p className="rate">{food.rate}</p>
                      </div>
                      <div className="flex">
                        <img src={food.image2} alt=""/>
                        <p className="rate">{food.rate2}</p>
                      </div>
                    </div>
                    <p className="rate1">{food.type}</p>
                  </Link>
                </div>
                <div></div>

                
              </div>
               
            )
          }
      </div>
      <Footer/>
      {/* <MovieDetails/> */}
    </div>
  )
}

export default Product
