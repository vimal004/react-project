import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const Header=()=>{
    return (
        <div className='hr'>
            <img src='https://www.vhv.rs/dpng/d/433-4338596_swiggy-logo-png-image-free-download-searchpng-swiggy.png' id='img'></img>
            <nav>About</nav>
            <nav>Cuisines</nav>
            <nav>Restaurants</nav>
            <nav>Contact</nav>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <Header></Header>
    )
}
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout></AppLayout>);