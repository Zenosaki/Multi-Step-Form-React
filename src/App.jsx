import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/Main' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}
