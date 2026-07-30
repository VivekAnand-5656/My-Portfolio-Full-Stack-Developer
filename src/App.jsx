import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './public/Layout'
import Home from './public/Home'
import Projects from './public/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App 