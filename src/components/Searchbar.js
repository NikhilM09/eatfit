import {useState} from 'react'

const Searchbar = ({collection, updater}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (event) => {
    console.log("function is called", searchText)
    setSearchText(event.target.value)
  }

  const filterData = () =>{
    const filteredData = collection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
    console.log("filteredData", filteredData);
    updater(filteredData);
  }
    return (
      <div className="d-flex my-3" style={{width:"100vw", maxWidth:"400px"}}>
        <input type="text" 
        className="custom_input" 
        placeholder="Enter name of restaurant"
        value={searchText}
        onChange={handleSearchText}/>
        <button className="btn btn-light" onClick={filterData}>🔍</button> 
      </div>
    )
  };

export default Searchbar