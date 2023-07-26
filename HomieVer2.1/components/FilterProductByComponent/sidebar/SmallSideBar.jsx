import React from 'react'
import PriceFilter from '../price/priceFilter'
import Tags from '../Tags/Tags'
const SmallSideBar = ({ collections, productCount, value, handleSliderChange }) => {
    return (
        <div className="sidebar">
            <div className="widget">
                <Tags collections={collections} productCount={productCount} />
            </div>
            <div className="widget">
                <PriceFilter
                    value={value}
                    handleSliderChange={handleSliderChange}
                />
            </div>
        </div>
    )
}

export default SmallSideBar
