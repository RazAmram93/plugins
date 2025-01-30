import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsService";

//Arrow function to fetch the data from the feed url
const Products = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        const loadRecordes = async () => {
            try {
                const data = await fetchProducts();
                setRecords(data)
            } catch (error) {
                console.error('Error loading products:', error);
            }
        }
        loadRecordes();
    }, [])


    return (
        <div>
            <div className="itemsWrapper" >
                {records.map((list, index) => (
                    <div className="item" key={index}>
                        <div className="itemWrapper">
                            <div>
                                <div>
                                    <div className="itemImg">
                                        <img src={list.images[0].url} alt={list.title} className="item-image" />
                                    </div>
                                    <p className="item_title" >{list.title}</p>
                                    <a href={'https://secure.konimbo.co.il/admin/user_files/new?duplicate=' + list.model_title} className="installBtn">התקן עכשיו !</a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;
