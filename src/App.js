import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';

const App = props => {
  const [entries , setEntries] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});

  //useEffect that fires when the component renders
  useEffect( ( )=>{ 
    let url = "http://127.0.0.1:3001/entries";  
    axios.get(url) //npm install axios --save
         .then( res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });
  }, [ ]);//empty array like ready

  //add entry function to pass into AddForm
  const _addEntry = entry => {
    //send entry to server via axios
    //update entries with response
    console.log("App _addEntry triggered");

    let url = "http://127.0.0.1:3001/entries";  
    axios.post(url, {
            entry: entry
         })
         .then( res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });
  }

  //edit entry function to pass into EditForm
  const _editEntry = entry => {
    //set selectedEntry to entry that we will be editing
    setSelectedEntry(entry);
    setEditing(true);
    //setEditing to true
    console.log("App _editEntry triggered");
  }

  const _updateEntry = entry => {
    //send entry to server via axios
    let url = `http://127.0.0.1:3001/entries/${entry.id}`;  
    axios.patch(url, {
            entry: entry
         })
         .then( res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

    //update entries with response
    setEditing(false);
    console.log("App _updateEntry triggered");
  }

  const _deleteEntry = entry => {
    //send entry to server via axios to delete
    let url = `http://127.0.0.1:3001/entries/${entry.id}`;  
    axios.delete(url, {
            entry: entry
         })
         .then( res => {
            console.log(res.data.entries);
            setEntries(res.data.entries);
         })
         .catch(error => {
            console.log(error);
         });

    //update entries with response
    console.log("App _deleteEntry triggered");
  }

  return (
    <div className="App">
      { editing ? (
        <EditForm onEditEntry={ _updateEntry } entry={ selectedEntry } />
      ) : (
        <AddForm onAddEntry={ _addEntry } />
      )}
      <Table entries={ entries } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />
    </div>
  );
}

export default App;
