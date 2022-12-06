import React, {useContext, useState} from "react";
import {Context} from "../../context/context";
import {PropsCards} from "../../model";
import Slider from '@mui/material/Slider';
import ProductCard from "./ProductCard";
import {categories} from "../../services/utilities";

const initialRange: number[] = [1, 30]

const ProductCards = ({handleAdd}: PropsCards) => {
    const {products} = useContext(Context)
    const [selectCategory, setSelectCategory] = useState("")
    const [range, setRange] = useState(initialRange);


    const handleChange = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
    };

    function valuetext(value: number) {
        return `${value} euro`;
    }

    const results = products.filter(product => product.category.includes(selectCategory)
        && (product.price > range[0] && product.price < range[1])
    )
    return (
        <div>
            <div id="first">
                <p className="animate__animated animate__backInLeft">Welcome to No Future!</p>
            </div>
            <div className="select-options">
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
                <div className="price-slider">
                    <label>price range: {range[0]} - {range[1]} euro</label>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={range}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="secondary"
                    />
                </div>
            </div>
            <div className="products-cards">
                {results.map((product) =>
                    <ProductCard product={product} handleAdd={handleAdd}/>
                )}
            </div>
            <div id="second"></div>
        </div>

    )
}


export default ProductCards;

