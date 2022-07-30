import React from 'react';
import {FilterItemWrapper} from './../style'

const FilterItem = ({filter}) => {
    return (
        <FilterItemWrapper>
            <div className="content-filter">
                <div className="content-image">
                    <span>{filter.image}</span>
                </div>
                <p>{filter.title}</p>
            </div>
        </FilterItemWrapper>
    )
}

export default FilterItem