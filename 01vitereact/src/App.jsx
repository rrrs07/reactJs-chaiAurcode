import Chai from "./chai"

function App(){
    return (

        // here we ca export any one element only
        // so to overcome it we can use <></>(fragment) to wrap all the elements and inside it we can export multiple elements
        <>
        <Chai />
        <h1>chai aur react{username}</h1>
        <p>testing</p>
        </>
    )
}

export default App