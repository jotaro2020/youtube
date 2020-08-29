import React, {useState} from "react";

const SearchBar =({onFormSubmit})=>{
   const [term,setTerm]=useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        onFormSubmit(term);
        // TODO: make sure we call callback from parent component
    }
    return(
        <div className={'search-bar ui segment'}>
            <form onSubmit={onSubmit} action="" className={'ui form'}>
                <div className="field">
                    <label htmlFor="">Search</label>
                    <input type="text" value={term} onChange={(event)=>setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    )
}
export default SearchBar;