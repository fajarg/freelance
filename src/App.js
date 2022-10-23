import { Routes, Route } from 'react-router-dom'
import Explore from './pages/explore/Explore'
import Fields from './pages/fields/Fields'
import LandingPage from './pages/landingPage/LandingPage'
import FieldsSubCategory from './pages/fields/FieldsSubCategory'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/fields" element={<Fields />} />
      <Route path="/fields-sub-category" element={<FieldsSubCategory />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}
export default App
