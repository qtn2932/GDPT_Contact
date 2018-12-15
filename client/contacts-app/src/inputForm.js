import React, {Component} from "react";

const InputForm= ()=>{
    return(
        <div>
            <form type='submit' className='inputForm'>
                <input type='text' placeholder='Enter something to search'/>
                <button>Search</button>
            </form>
        </div>
    )
}
export default InputForm;