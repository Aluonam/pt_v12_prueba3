
import './App.css'
import ChangeInputColor from './components/changeInputColor/ChangeInputColor'
import ConsonantCounter from './components/consonantCounter/ConsonantCounter'
import ProductTable from './components/productsTable/ProductsTable'
import TransformWordConsonant from './components/trasnformWordConsonant/TransformLetters'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">

        <ProductTable></ProductTable>
        <ConsonantCounter></ConsonantCounter>
        <ChangeInputColor></ChangeInputColor>
        <TransformWordConsonant></TransformWordConsonant>
      </div>

  
    </>
  )
}

export default App
