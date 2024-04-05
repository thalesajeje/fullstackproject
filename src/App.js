import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

import AddItemForm from './components/FormComponents/AddForm/AddItemForm';
import EditItemForm from './components/FormComponents/EditForm/EditItemForm';
import ItemsTable from './components/TableComponents/Table/ItemsTable';

import AddCategoryForm from './components/FormComponents/AddForm/AddCategoryForm';
import EditCategoryForm from './components/FormComponents/EditForm/EditCategoryForm';
import CategoriesTable from './components/TableComponents/Table/CategoriesTable';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Categories() {
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:3001/categories')
        .then(response => {
          setCategories(response.data.categories);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, []);
  
    const _addCategory = (category) => {
      axios.post('http://localhost:3001/categories', { category })
        .then(response => {
          setCategories(response.data.categories);
        })
        .catch(error => {
          console.error('Error adding category:', error);
        });
    };
  
    const _editCategory = (category) => {
      setSelectedCategory(category);
      setEditingCategory(true);
    };

    const _updateCategory = (updatedCategory) => {
      axios.patch(`http://localhost:3001/categories/${updatedCategory.category_id}`, { category: updatedCategory })
        .then(response => {
          setCategories(response.data.categories);
          setEditingCategory(false);
        })
        .catch(error => {
          console.error('Error updating category:', error);
        });
    };
    
    const _deleteCategory = (category) => {
      axios.delete(`http://localhost:3001/categories/${category.category_id}`)
          .then(response => {
              setCategories(response.data.categories);
          })
          .catch(error => {
              console.error('Error deleting category:', error);
          });
    };
  
    return (
      <div>
        <h2>Categories</h2>
        {editingCategory ? (
          <EditCategoryForm category={selectedCategory} onUpdateCategory={_updateCategory}/>
        ) : (
          <AddCategoryForm onAddCategory={_addCategory} />
        )}
        <CategoriesTable categories={categories} onEditCategory={_editCategory} onDeleteCategory={_deleteCategory} />
      </div>
    );
}

function Items() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/items')
      .then(response => {
        setItems(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const _addItem = (item) => {
    axios.post('http://localhost:3001/items', { item })
      .then(response => {
        setItems(response.data.items);
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const _editItem = (item) => {
    setSelectedItem(item);
    setEditingItem(true);
  };

  const _deleteItem = (item) => {
    axios.delete(`http://localhost:3001/items/${item.item_id}`)
      .then(response => {
        setItems(response.data.items);
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const _updateItem = (updatedItem) => {
    axios.patch(`http://localhost:3001/items/${updatedItem.item_id}`, { item: updatedItem })
        .then(response => {
            setItems(response.data.items);
            setEditingItem(false);
        })
        .catch(error => {
            console.error('Error updating item:', error);
        });
};

  return (
    <div>
        <h2>Items</h2>
        {editingItem ? (
            <EditItemForm item={selectedItem} onEditItem={_updateItem} />
        ) : (
            <AddItemForm onAddItem={_addItem} />
        )}
        <ItemsTable items={items} onEditItem={_editItem} onDeleteItem={_deleteItem} />
    </div>
  );
   
}

function Error() {
  return (
    <h2>Error</h2>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>Home</Link>
        <Link to="/items" style={{ padding: 5 }}>Items</Link>
        <Link to="/categories" style={{ padding: 5 }}>Categories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
