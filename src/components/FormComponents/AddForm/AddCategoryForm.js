import React, { useState, useEffect } from "react";
import './AddCategoryForm.scss';
import Button from "../Button/Button";

const AddCategoryForm = props => {
    const [categoryName, setCategoryName] = useState('');
    const [category, setCategory] = useState({});

    useEffect(() => {
        setCategory({ category_name: categoryName });
    }, [categoryName]);

    const _addCategory = () => {
        console.log("AddCategoryForm _addCategory triggered");
        props.onAddCategory(category);
        _clear();
    };

    const _clear = () => {
        setCategoryName('');
        console.log("_clear event fired");
    };

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onClick={ _addCategory } title="Add Category" />
            <br />
            <label>Category Name:</label>
            <input type="text" placeholder="Category Name" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
        </div>
    );
};

export default AddCategoryForm;
