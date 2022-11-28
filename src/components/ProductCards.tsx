import React, {useContext, useState} from "react";
import {Context} from "../context/context";
import { PropsCards, Range} from "../model";

import ProductCard from "./ProductCard";

function ProductCards({handleAdd}: PropsCards) {
    const {products} = useContext(Context)
    const [selectCategory, setSelectCategory] = useState("")


    const allCategoriesSet = new Set<string>();
    products.forEach(product => allCategoriesSet.add(product.category));
    const allCategories = Array.from(allCategoriesSet)

    function sortCategory(event: any) {
        event.preventDefault();
        setSelectCategory(event.target.value)
    }

    const initialRange: Range = {
        min: 0,
        max: 5
    }
    const [range, setRange] = useState(initialRange);

    const results = products.filter(product => product.category.includes(selectCategory)
        && product.rating.rate > range.min && product.rating.rate < range.max
    )

    return (
        <div>
            <div className="select-option">
                <div>
                    <label>category</label>
                    <select
                        className="form-home"
                        onChange={sortCategory}
                    >
                        <option value="" selected>all</option>
                        {allCategories.map((cat) =>
                            <option value={cat}>{cat}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>min rate:</label>
                    <input
                        type='number'
                        min="0" max="5"
                        step="0.1"
                        className="form-home"
                        required
                        value={range.min}
                        onChange={e => {
                            setRange({...range, min: e.target.valueAsNumber});
                        }}/>
                </div>
                <div>
                    <label>max rate:</label>
                    <input
                        type="number"
                        min="0" max="5"
                        step="0.1"
                        className="form-home"
                        value={range.max}
                        onChange={e => {
                            setRange({...range, max: e.target.valueAsNumber});
                        }}/>
                </div>
            </div>
            <div className="products-cards">
                {results.map((product) =>
                    <ProductCard product={product} handleAdd={handleAdd}/>
                )}
            </div>
        </div>

    )
}


export default ProductCards;

