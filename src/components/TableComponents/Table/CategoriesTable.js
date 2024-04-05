import React from "react";
import TableRow from "../TableRow/CategoriesTableRow";
import './CategoriesTable.scss';

const CategoriesTable = props => {
    const editCategory = category => {
        console.log("CategoriesTable editCategory triggered");
        props.onEditCategory(category);
    }

    const deleteCategory = category => {
        console.log("CategoriesTable deleteCategory triggered");
        props.onDeleteCategory(category);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map(
                            (category, index) => (
                                <TableRow index={ index } category={ category } key={ category.category_id } onEditCategory={ editCategory } onDeleteCategory={ deleteCategory } />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesTable;
