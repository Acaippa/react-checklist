function ChecklistItemCheckbox() {
  return(
    <input type="checkbox"/>
  )
}

function CheckListDescription(){
  return(
    <p className="
      text-[16px]
    ">
      This is really vital information
    </p>
  )
}

function ChecklistTitle(){
  return(
    <p
    className="
    text-[16px]
    font-bold
    ">Check me!</p>
  )
}

function ChecklistItem(){
  return(
    <div className="
    checklist-item 
    py-[15px]
    px-[25px] 
    outline 
    outline-solid 
    outline-[#39383D] 
    rounded-[10px]
    w-125
    bg-[#242328]
    flex
    flex-row
    justify-between
    items-center
    ">
      <div className="
      flex
      flex-col
      items-start
      ">
        <ChecklistTitle/>
        <CheckListDescription/>
      </div>
      <ChecklistItemCheckbox/>
    </div>
  )
}

export default function Checklist(){
  return(
    <div className="
    checklist-wrapper
    h-screen
    ">
      <div className="
      checklist
      flex 
      flex-col
      gap-6
      ">
        <ChecklistItem />
        <ChecklistItem />
      </div>
    </div>
  )
}