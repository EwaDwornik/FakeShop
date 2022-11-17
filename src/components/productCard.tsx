import React, {useContext, useState} from "react";
import {Context} from "../context/context";
import {Range} from "../model";


function ProductCards() {
    const {products} = useContext(Context)

    const allCategoriesSet = new Set<string>();
    products.forEach(product => allCategoriesSet.add(product.category));
    const allCategories = Array.from(allCategoriesSet)

    const [selectCategory, setSelectCategory] = useState("")

    function sortCategory(event: any) {
        event.preventDefault();
        setSelectCategory(event.target.value)
    }

    const initialRange: Range = {
        min: 0,
        max: 5
    }
    const [range, setRange] = useState(initialRange);


    const results = products.filter(product => product.category.includes(selectCategory) &&
         product.rating.rate > range.min && product.rating.rate < range.max
    )

    function handleAddProduct(event: any){
        event.preventDefault();
    }


    return (
        <div>
            <div className="select-option">
                <div>
                    <label>category</label>
                    <select
                        className="select"
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
                        className="form-control shake"
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
                        className="form-control shake"
                        value={range.max}
                        onChange={e => {
                            setRange({...range, max: e.target.valueAsNumber});
                        }}/>
                </div>
            </div>
            <div className="products-cards">
                {results.map((product) =>
                    <div className="product-card">
                        <div><h3>{product.category}</h3></div>
                        <div>
                            <img src={product.image}/>
                        </div>
                        <div>{product.title}</div>
                        <div>
                            <div><h3>{product.price} $</h3></div>
                            <div><h3>Rating: {product.rating.rate}</h3></div>
                            <button onClick={handleAddProduct} >add to cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default ProductCards;

