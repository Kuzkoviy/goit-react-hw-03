import {useId} from 'react'


function SearchBox({filter, onFilter }) {

  const id = useId();


  return (
    <div>
      <label htmlFor={`result-${id}`}>Find contacts by name</label>
      <input type="text" id={`result-${id}`} 
      value={filter} onChange={event => onFilter(event.target.value)}/>
    </div>
  )
}

export default SearchBox