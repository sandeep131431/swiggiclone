import React from "react";
import ReactDOM from "react-dom/client"
import NewPage from "./components/NewPage";
import Home from "./components/Home";
import Restmenu from "./components/Restmenu";
import { BrowserRouter, Routes ,Route } from "react-router";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";

function App(){
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restorent" element={<NewPage></NewPage>}></Route>
        <Route path="/delhi/city/:id" element={<Restmenu></Restmenu>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
     
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)