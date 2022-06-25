import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
const Home = ({ products, banners }) => {
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      {/* {console.log(banners)} */}

      <div className='products-heading'>

        <h2>
          Best Selling Products
        </h2>
        <p>
          Speakers of many variations
        </p>
      </div>

      <div className='products-container'>

        {products?.map((product) =>
          <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={banners && banners[0]} />


    </>
  )
}

export const getServerSideProps = async () => {

  const queryProducts = '*[_type=="product"]';
  const products = await client.fetch(queryProducts);


  const queryBanner = '*[_type=="banner"]';
  const banners = await client.fetch(queryBanner);
  return {
    props: {
      products, banners
    }
  }
}

export default Home;