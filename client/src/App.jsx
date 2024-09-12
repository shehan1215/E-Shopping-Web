
import './App.css'
import AuthLayout from './components/auth/layout'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}></Route>
      </Routes>
    </div>
  )
}

export default App
