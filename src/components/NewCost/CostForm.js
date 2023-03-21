import React, { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    //const [userInput, setUserInput] = useState({
    //    name: '',
    //    amount: '',
    //    date: ''
    //});

    const nameChangeHadler = (event) => {
        setName(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    name: event.target.value
        //})
    };

    const amountChangeHadler = (event) => {
        setAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    amount: event.target.value
        //})
    };

    const dateChangeHadler = (event) => {
        setDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    date: event.target.value
        //})
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: name,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveCostData(costData);

        setName('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type = "text" value = {name} onChange={nameChangeHadler} />
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type = "number" value = {amount} min = '0.01' step = '0.01' onChange={amountChangeHadler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type = "date" value = {date} min = '2019-01-01' max = '2022-12-31' onChange={dateChangeHadler}/> 
            </div>
            <div className="new-cost__actions">
                <button type = 'submit'>Добавить расход</button>
                <button type = "button" onClick={props.onCancel}>Отмена</button>
            </div> 
        </div>
    </form>
}

export default CostForm;