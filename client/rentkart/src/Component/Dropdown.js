import React from 'react'

function Dropdown((selected,setSelected)) {
    
const [isActive,setActive]=React.useState(true);
const options =['a','b','c']
    return (
        <div className='Dropdown-wrapper'>
            <div className='Dropdown-button' onClick={e=>setActive(!isActive)}>
                Choose   
                    
                            
                  {isActive  && ( <div className='Dropdown-content'>
                 {options.map((option)=>(
                 <div onClick={(e)=>{
                     setActive(false),
                     setSelected(option)
                 }} className='Dropdown-item'>
                     {option}
                    </div>))}
                    </div>) }
                
                </div>
         
        </div>
       


     )

}
export default Dropdown