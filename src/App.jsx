import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './HomeScreen'

function App() {
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
