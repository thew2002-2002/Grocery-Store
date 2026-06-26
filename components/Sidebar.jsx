'use client'
import React from 'react'
import { useState } from 'react'
import {Button} from '@mui/material'
import { LiaAngleDownSolid } from "react-icons/lia";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Collapse} from 'react-collapse';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import { IoIosStar } from "react-icons/io";
const label = {inputProps: { 'aria-label': 'Checkbox demo' }};



const Sidebar = () => {
    const [isOpenCatFilter, setIsOpenCatFilter] = useState(true);
    const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(true);
    const [price, setPrice] = useState([0, 30000]);

  return (
    <aside className="sticky top-[150px] flex flex-col gap-5">
        <div className="box">
            <div className="flex items-center justify-between mb-2 ">
                <h3 className="text-[16px] font-[600] text-gray-700 ">Shop by Category</h3>
                <Button className='!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200 'onClick={() => setIsOpenCatFilter(!isOpenCatFilter)}><LiaAngleDownSolid size={20} className="text-gray-800" /></Button>
            </div>

            <Collapse isOpened={isOpenCatFilter}>
            <div className='scroll overflow-scroll max-h-[250px]'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Fruits & Vegetables" />
                    <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
                    <FormControlLabel control={<Checkbox />} label="Breakfast & Dairy" />
                    <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
                    <FormControlLabel control={<Checkbox />} label="Beverages" />
                    <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
                    <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
                    <FormControlLabel control={<Checkbox />} label="Grocery & Staples" />
                </FormGroup>
            </div>
            </Collapse>
        </div>

        <div className="box">
            <div className="flex items-center justify-between mb-4 ">
                <h3 className="text-[16px] font-[600] text-gray-700 ">Filter by Price</h3>
            </div>

            <RangeSlider  value={price} onInput={setPrice} min={0} max={30000} step={5} />

            <div className='flex items-center justify-between mt-2'>
                <span className="text-gray-700 text-[14px]">${price[0]}</span>
                <span className="text-gray-700 text-[14px]">${price[1]}</span>
            </div>
        </div>

        <div className="box">
            <div className="flex items-center justify-between mb-2 ">
                <h3 className="text-[16px] font-[600] text-gray-700 ">Filter by Rating</h3>
                <Button className='!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200 'onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)}><LiaAngleDownSolid size={20} className="text-gray-800" /></Button>
            </div>

            <Collapse isOpened={isOpenRatingFilter}>
            <div className=' ratingFilter'>
                <div className='flex flex-col items-center'>
                    <div className='item flex items-center w-full'>
                        <Checkbox {...label} /> 
                        <div className='flex items-center gap-1'>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                        </div>
                    </div>
                    <div className='item flex items-center w-full'>
                        <Checkbox {...label} /> 
                        <div className='flex items-center gap-1'>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                           
                        </div>
                    </div>
                    <div className='item flex items-center w-full'>
                        <Checkbox {...label} /> 
                        <div className='flex items-center gap-1'>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                           
                        </div>
                    </div>
                    <div className='item flex items-center w-full'>
                        <Checkbox {...label} /> 
                        <div className='flex items-center gap-1'>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            
                        </div>
                    </div>
                    <div className='item flex items-center w-full'>
                        <Checkbox {...label} /> 
                        <div className='flex items-center gap-1'>
                            <IoIosStar size={20} className='text-yellow-500'/>
                            
                        </div>
                    </div>
                </div>
            </div>
            </Collapse>
        </div>
      
    </aside>
  )
}
    

export default Sidebar
