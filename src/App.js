import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    label: "C1",
    date: new Date(2022, 2, 12),
    description: "Ноутбук",
    amount: 1024.99
  },
  {
    label: "C2",
    date: new Date(2023, 1, 22),
    description: "Клавиатура",
    amount: 102.99
  },
  {
    label: "C3",
    date: new Date(2021, 1, 4),
    description: "Кресло",
    amount: 305.99
  },
  {
    label: "C4",
    date: new Date(2023, 0, 9),
    description: "Мышь",
    amount: 62.99
  },
  {
    label: "C5",
    date: new Date(2023, 0, 14),
    description: "Планшет",
    amount: 49.99
  }
]


function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  


  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;

