import React, {useContext, useState} from "react";
import {Context} from "../../context/context";
import {PropsCards, Range} from "../../model";

import ProductCard from "./ProductCard";
import {categories} from "../../services/utilities";

const ProductCards = ({handleAdd}: PropsCards) => {
    const {products} = useContext(Context)
    const [selectCategory, setSelectCategory] = useState("")

    const initialRange: Range = {
        min: 0,
        max: 25
    }
    const [range, setRange] = useState(initialRange);

    const results = products.filter(product => product.category.includes(selectCategory)
        && product.price > range.min && product.price < range.max
    )


    return (
        <div>
            <div className="select-option">
                <div>
                    <label>category</label>
                    <select
                        className="form-home"
                        onChange={((event: any) => setSelectCategory(event.target.value))}
                    >
                        <option value="" selected>all</option>
                        {categories.map((category) =>
                            <option value={category}>{category}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>min price:</label>
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
                    <label>max price:</label>
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

