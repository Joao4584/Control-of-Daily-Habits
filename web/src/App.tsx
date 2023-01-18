import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
 
  return (
   <div>
     <Habit completed={4} />
     <Habit completed={2} />
     <Habit />
     <Habit completed={6} />
     <Habit completed={10} />
     <Habit completed={23} />
   </div>
  )
}

export default App
