import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App