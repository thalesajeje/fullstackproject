import React from "react";
import TableRow from "../TableRow/ItemsTableRow";
import './ItemsTable.scss';

const ItemsTable = props => {
    const editItem = item => {
        console.log("ItemsTable editItem triggered");
        props.onEditItem(item);
    }

    const deleteItem = item => {
        console.log("ItemsTable deleteItem triggered");
        props.onDeleteItem(item);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(
                            (item, index) => (
                                <TableRow index={ index } item={ item } key={ item.item_id } onEditItem={ editItem } onDeleteItem={ deleteItem } />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ItemsTable;
