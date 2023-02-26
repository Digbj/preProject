import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Navi = () => {
    const [input, setInput] = useState('');
    const [category,setCategort]=useState();
    console.log()
    return (
        <div className="Navi">
            <div className='container' >
                <h1 id='heading'>Snap Shot</h1>
                <input id='inp' placeholder='Search...' onChange={(e) => { setInput(e.target.value) }} />
                <button id='btn' ><FaSearch /></button>
                <div className='options'>
                    <button id='btn1' onClick={setCategort('Mountain')}>Mountains</button>
                    <button id='btn1' onClick={setCategort('Beaches')} >Beaches</button>
                    <button id='btn1' onClick={setCategort('Birds')} >Birds</button>
                    <button id='btn1' onClick={setCategort('Food')}>Food</button>
                </div>
            </div>
        </div>
    )
}
export default Navi;