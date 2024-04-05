import React, { useState, useEffect } from "react";
import './AddItemForm.scss';
import Button from "../Button/Button";
import { fetchCategories } from "../../../utils";

const AddItemForm = props => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    useEffect(() => {
        setItem({ 
            category_id: selectedCategoryId, 
            title, 
            description, 
            price, 
            quantity, 
            sku 
        });
    }, [selectedCategoryId, title, description, price, quantity, sku]);

    const _addItem = () => {
        console.log("AddItemForm _addItem triggered");
        props.onAddItem(item);
        _clear();
    }

    const _clear = () => {
        setSelectedCategoryId('');
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setSku('');
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onClick={ _addItem } title="Add Item" />
            <br />
            <label>Category:</label>
            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.category_id} value={category.category_id}>
                        {category.category_name}
                    </option>
                ))}
            </select>
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <br />
            <label>SKU:</label>
            <input type="text" placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        </div>
    );
}

export default AddItemForm;
