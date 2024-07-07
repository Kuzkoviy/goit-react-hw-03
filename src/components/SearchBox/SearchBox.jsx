import {useId} from 'react'


function SearchBox() {

  const id = useId();


  return (
    <div>
      <label htmlFor={`result-${id}`}>Find contacts by name</label>
      <input type="text" id={`result-${id}`}/>
    </div>
  )
}

export default SearchBox