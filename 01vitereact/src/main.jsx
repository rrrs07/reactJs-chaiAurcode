import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://www.google.com" target="_blank"> Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement('a', {href:'https://google.com', target:'_blank'}, 'Visit Google'  ,
anotherUser  
)/*first tag then object*/ 



ReactDom.createRoot(document.getElementById('root')).
render(

    reactElement
)