import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.componenet";
import { Routes, Route, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Shop = () => {
  return (
    <h1>This is the shopping page.</h1>
  )
} 

// const Footer = () => {
//   return (
//     <Fragment>
//       <Outlet />
//       <h1 className="footer">This is the footer</h1>
//     </Fragment>
//   )
// }


const App = () => {
  return (
    <Fragment>
      
      <Routes> 
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} ></Route>
          <Route path = 'shop' element={<Shop />} ></Route>
          {/* <Route path='/' index element={<Footer />} ></Route> */}
        </Route>
        
        
    </Routes> 
    </Fragment>
    
  )
  
}

export default App;
