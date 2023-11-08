import 'bootswatch/dist/slate/bootstrap.min.css';
import {useSelector} from "react-redux"
import './App.css';
import {BrowserRouter,Routes,Route,Navigate,useLocation} from "react-router-dom"
import Home from './components/pages/Home';
import Profile from "./components/pages/Profile";
import Auth from "./components/pages/Auth";
import User from "./components/pages/User";
import { useLoadingWithRefresh } from "./components/hooks/useLoadingWithRefresh";
import Avatar from "./components/pages/Avatar";
import Landing from "./components/pages/comment/Landing";
// import socketInit from './socket';
// import { useWebSocket } from './components/hooks/useWebSocket';
function App() {
  const {loading}=useLoadingWithRefresh()
  // const socket=socketInit()
  console.log('Loading:',loading)
  // socket.connect()
  
  return loading ? (<h3>Loading please wait...</h3>) :(
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<User/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path="/profile" element={<ProtectProfile/>}/>
        <Route path="/avatar" element={<ProtectAvatar/>}/>
        <Route path="/comment" element={<CommentRoute/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
const ProtectProfile=()=>{
  const location=useLocation()
  const {isAuth}=useSelector((state)=>state.authSlice)
  console.log(isAuth)
  return isAuth ? <Profile/>:<Navigate to="/login" state={{from:location}} />
}
const ProtectAvatar=()=>{
  const location=useLocation()
  const {user,isAuth}=useSelector((state)=>state.authSlice)
  return user && isAuth ? <Avatar/>:<Navigate to="/login" state={{from:location}}/>
}
const CommentRoute=()=>{
  const location=useLocation()
  const {isAuth,user}=useSelector((state)=>state.authSlice)
  return isAuth && user ? <Landing/>:<Navigate to="/" state={{from:location}}/>
}
export default App;
