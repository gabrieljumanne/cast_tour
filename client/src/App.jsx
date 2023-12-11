import {Home, Account, Checkout, Login, Signup, TourDetails, Tours, Destinations, CustomizableTourPackages, Hotel} from "./page"
import { Destination } from "./components"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"


function App() {
  // const [count, setCount] = useState(0)

  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/tourdetails" element={<TourDetails />}/>
            <Route path="/tours" element={<Tours />}/>
            <Route path="/destinations" element={<Destination />}/>
            <Route path="/customizable" element={<CustomizableTourPackages />}/>
            <Route path="/hotel" element={<Hotel />}/>
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
    
  )
}

export default App
