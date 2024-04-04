import React, {useEffect, useState} from "react";
import './AddForm.css';
import Button from "../Button/Button";

const AddForm = props => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [entry, setEntry] = useState({});

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
        setEntry({'value1':value1, 'value2':value2, 'value3':value3});
        console.log("setEntry Changed");
    }, [value1, value2, value3]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setValue1(''); setValue2(""); setValue3("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _add } title="Add Entry" />
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
export default AddForm;