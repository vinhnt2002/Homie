import React from 'react'

const SortBySelected = ({handleSortOptionChange, selectedSortOption}) => {
    return (
        <div className="d-flex justify-content-end product_header">
            <div className="me-2 text-start">Sắp xếp theo</div>
            <div className="custom_select text-end">
                <select
                    className="form-control form-control-sm"
                    onChange={handleSortOptionChange}
                    value={selectedSortOption}
                >
                    <option value="">Mặc định</option>
                    <option value="popularity">Nổi bật</option>
                    <option value="date">Mới nhất</option>
                    <option value="price">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                </select>
            </div>
        </div>
    )
}

export default SortBySelected
