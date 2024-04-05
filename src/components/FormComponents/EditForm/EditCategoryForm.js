import React, { useState, useEffect } from "react";
import './EditCategoryForm.scss';
import Button from "../Button/Button";

const EditCategoryForm = props => {
    const [category, setCategory] = useState(props.category || {});

    useEffect(() => {
        setCategory(props.category);
    }, [props.category]);

    const handleChange = (value) => {
        setCategory({ ...category, category_name: value });
    };

    const saveCategory = () => {
        console.log("EditCategoryForm saveCategory triggered");
        props.onUpdateCategory(category);
    };

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onClick={saveCategory} title="Save Category" />
            <br />
            <label>Category Name:</label>
            <input type="text" placeholder="Category Name" value={category.category_name || ''} 
              onChange={e => handleChange(e.target.value)} />
        </div>
    );
};

export default EditCategoryForm;
