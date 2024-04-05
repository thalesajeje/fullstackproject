import React from "react";
import './CategoriesTableRow.scss';

const CategoriesTableRow = ({ category, index, onEditCategory, onDeleteCategory }) => {
    return(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{category.category_name}</td>
            <td>
                <button onClick={() => onEditCategory(category)}>Edit</button>
                <button onClick={() => {
                    if (window.confirm('Are you sure you want to delete this category?'))
                        onDeleteCategory(category);
                    }
                }>Delete</button>
            </td>
        </tr>
    );
};

export default CategoriesTableRow;
