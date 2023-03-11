import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  const user = null

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
