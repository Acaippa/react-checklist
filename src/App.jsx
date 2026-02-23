import Checklist from '../components/Checklist/checklist'
import ChecklistAdd from '../components/Checklist-add/checklistAdd'

import './App.css'

function App() {
  return (
    <div className="flex flex-col gap-4">

      <p className="
      self-start text-left font-bold 
      text-[32px] leading-none"
      >Todays tasks
      </p>

      <p className="
      text-left leading-none text-[12px] text-[#D9D9D9] 
      opacity-60 mb-2"
      >24. August 2025
      </p>

      <Checklist />
      <ChecklistAdd />
    </div>
  )
}

export default App
