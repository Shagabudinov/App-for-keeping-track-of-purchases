import CostForm from './CostForm'
import './NewCost.css'
import React, {useState} from 'react'

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = 
    useState(false);

    const saveCostDataHandler = (inputCostData) => {
        props.onAddCost(inputCostData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHadler = () => {
        setIsFormVisible(false);
    }

    return <div className="new-cost">
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm onSaveCostData = {saveCostDataHandler} onCancel={cancelCostHadler}/>}
    </div>

}

export default NewCost;