'use client'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ProductSlider from './ProductSlider'

const PopularProducts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <section className='bg-white py-8 '>
      <div className="container">
        <div className=" flex items-center justify-between ">
            <div className="col w-[30%]">
                <h2 className="text-[20px] text-gray-800 font-[600]">Popular Products</h2>
                <p className="text-[16px] text-gray-800">Do not miss the current offers</p>
            </div>

            <div className="col w-[70%] flex items-center justify-end">
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                    
                    <Tab label="Fruits & Vegetables" />
                    <Tab label="Meats & Seafood" />
                    <Tab label="Breaksfast & Dairy" />
                    <Tab label="Breads & Bakery" />
                    <Tab label="Beverages" />
                    <Tab label="Frozen Foods" />
                    <Tab label="Biscuits & Snacks" />
                    <Tab label="Grocery & Staples" />
                    <Tab label="Baby & Pregnancy" />
                    <Tab label="Healthcare" />
                </Tabs>
            </div>
        </div>

        <ProductSlider />

      </div>
    </section>
  )
}

export default PopularProducts
