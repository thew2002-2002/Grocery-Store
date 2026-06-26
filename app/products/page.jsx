'use client'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Button, Menu, MenuItem } from '@mui/material'
import ProductItem from '../../components/ProductItem'
import Pagination from '@mui/material/Pagination';

const ProductPage = () => {
  const [sortBy, setSortBy] = useState("Name, A to Z")
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSort = (value) => {
    setSortBy(value)
    handleClose()
  }

  return (
    <section className="py-5 bg-white">
      <div className="container flex gap-4">
        <div className="sidebarWrapper w-[18%]">
          <Sidebar />
        </div>

        <div className="rightContent w-[82%] pl-5">
          <div className="top-strip w-full bg-[#f1f1f1] p-2 rounded-md h-12 flex items-center justify-between px-4 sticky top-[140px] z-[49]">
            <span className="text-[15px] text-gray-700 font-[600]">
              There are 25 products.
            </span>

            <div className="flex items-center gap-3">
              <span className="text-[15px] text-gray-700 font-[600]">
                Sort By
              </span>

              <div className="relative">
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  className="!bg-white !capitalize !text-gray-900 !py-[4px] !px-3"
                  onClick={handleClick}
                >
                  {sortBy}
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => handleSort("Name, A to Z")}>
                    Name, A to Z
                  </MenuItem>

                  <MenuItem onClick={() => handleSort("Name, Z to A")}>
                    Name, Z to A
                  </MenuItem>

                  <MenuItem onClick={() => handleSort("Price, Low to High")}>
                    Price, Low to High
                  </MenuItem>

                  <MenuItem onClick={() => handleSort("Price, High to Low")}>
                    Price, High to Low
                  </MenuItem>

                  <MenuItem onClick={() => handleSort("Newest")}>
                    Newest
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-5 gap-5 py-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>

          <div className=" flex items-center justify-center mt-5">
            <Pagination count={10} showFirstButton showLastButton color="primary" />
          </div>

        </div>
      </div>
    </section>
  )
}


    

export default ProductPage