import { useRouteError } from "react-router-dom";

const Errorpage = () =>{
    const errorDetails = useRouteError();
    console.log("errorDetails", errorDetails);
    return (
        <div className="text-danger d-flex flex-column justify-content-center align-items-center"
         style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%, -50%)"}}>
            <h1>Oops Something went wrong </h1>
            <h2>Error {errorDetails?.status} ({errorDetails?.statusText})</h2>
            <h3>{errorDetails?.data}</h3> 
        </div>
    )
}

export default Errorpage;