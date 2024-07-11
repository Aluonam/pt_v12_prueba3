
import './App.css'
import ConsonantCounter from './components/consonantCounter/ConsonantCounter'
import ProductTable from './components/productsTable/ProductsTable'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">

        <ProductTable></ProductTable>
        <ConsonantCounter></ConsonantCounter>
      </div>

  
    </>
  )
}

export default App
