import {useState} from 'react'

const User = ({name, country, email}) =>{
    const [count, setCount] = useState(1);
    return(
        <div style={{border:"1px solid darkblue"}}>
            <div>Name : {name}</div>
            <div>Country : {country}</div>
            <div>Email id : {email}</div>
            <div>Count : {count}</div>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
        </div>
    )
}

export default User