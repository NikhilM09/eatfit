import {useState, useRef} from 'react'

const Searchbar = ({collection, updater}) => {
  const inputRef = useRef("");
  console.log("inputName", inputRef);
  const [searchText, setSearchText] = useState("");
  console.log("Searchbar Component is rendered");
  const handleSearchText = (event) => {
    // console.log("function is called", searchText)
    // setSearchText(event.target.value)
    inputRef.current.value=event.target.value
  }

  const filterData = (text) =>{
    const filteredData = collection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
    })
    console.log("input value",inputRef.current.value)
    console.log("filteredData", filteredData);
    updater(filteredData);
  }
    return (
      <div className="d-flex my-3" style={{width:"100vw", maxWidth:"400px"}}>
        <input type="text" 
        ref={inputRef}
        className="custom_input" 
        placeholder="Enter name of restaurant"
        value={inputRef.current.value}
        onChange={handleSearchText}/>
        <button className="btn btn-light" onClick={()=>filterData(inputRef.current.value)}>🔍</button> 
      </div>
    )
  };

export default Searchbar