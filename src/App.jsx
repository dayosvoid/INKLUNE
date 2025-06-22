
import './App.css'
import Nav from './component/Nav dayo'
import Home2 from './Pages/Home2'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Following from './Pages/Following'
import MainProfile from './Pages/MainProfile'
import Post from './Pages/Post'
import PreviewPage from './Pages/PreviewPage'
import PublishPage from './Pages/PublishPage'
import PostDetail from './Pages/PostDetail'

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Following' element={<Following/>}/>
          <Route path='/Home2' element={<Home2/>}/>
          <Route path='/Profile' element={<MainProfile/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path="/preview" element={<PreviewPage/>} />
          <Route path="/publish" element={<PublishPage/>} />
          <Route path="/published" element={<PostDetail/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
