import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header'
import Dashboard from './pages/Dashboard'
import PostsListPage from './pages/PostsListPage'
import PagesListPage from './pages/PagesListPage'

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/postlistpage' element={<PostsListPage/>}/>
        <Route path='pagelistpage' element={<PagesListPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;



