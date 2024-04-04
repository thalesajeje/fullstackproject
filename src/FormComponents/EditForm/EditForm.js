import React, {useEffect, useState} from "react";
import './EditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(()=>{
        setID(props.entry.id);
        setValue1(props.entry.value1);
        setValue2(props.entry.value2);
        setValue3(props.entry.value3);        
    }, [props]);

    const _detectValue1TextChanged = (key, value) => {
        setValue1(value);
        console.log("_detectValue1TextChanged event fired");
    }
    const _detectValue2TextChanged = (key, value) => {
        setValue2(value);
        console.log("_detectValue2TextChanged event fired");
    }
    const _detectValue3TextChanged = (key, value) => {
        setValue3(value);
        console.log("_detectValue3TextChanged event fired");
    }

    useEffect( () => {
        setEntry({'id':id, 'value1':value1, 'value2':value2, 'value3':value3});
        console.log("setEntry Changed");
    }, [id, value1, value2, value3]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setValue1(''); setValue2(""); setValue3("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Entry" />
            <br />
            <label>Value 1:</label>
            <input type="text" placeholder="Value 1" value={ value1 } 
              onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
            <br />
            <label>Value 2:</label>
            <input type="text" placeholder="Value 2" value={ value2 } 
              onChange={ e => _detectValue2TextChanged('value2', e.target.value) } />
            <br />
            <label>Value 3:</label>
            <input type="text" placeholder="Value 3" value={ value3 } 
              onChange={ e => _detectValue3TextChanged('value3', e.target.value) } />
            </div>
    );
}
export default EditForm;