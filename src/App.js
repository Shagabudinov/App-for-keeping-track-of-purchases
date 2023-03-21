import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    label: "C1",
    date: new Date(2022, 2, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {
    label: "C2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    label: "C3",
    date: new Date(2020, 4, 1),
    description: "Джинсы",
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

