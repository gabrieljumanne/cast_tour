import {Home, Account, Checkout, Login, Signup, TourDetails, Tours, Destinations} from "./page"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/tourdetails" element={<TourDetails />}/>
            <Route path="/tours" element={<Tours />}/>
            <Route path="/destinations" element={<Destinations />}/>


          </Routes>
      </BrowserRouter>
  )
}

export default App
