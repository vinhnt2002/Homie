import React from 'react'
import PriceFilter from '../price/priceFilter'
import Tags from '../Tags/Tags'
const SmallSideBar = ({collections, productCount, products, setData, setSelectedSortOption}) => {
  return (
      <div className="sidebar">
                        <div className="widget">
                            <Tags collections={collections} productCount={productCount} />
                        </div>
                        <div className="widget">
                            <PriceFilter
                                products={products}
                                setData={setData}
                                setSelectedSortOption={setSelectedSortOption}
                            />
                        </div>
                    </div>
  )
}

export default SmallSideBar
