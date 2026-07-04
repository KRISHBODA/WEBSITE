import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import CataloguePage from './pages/CataloguePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { paths } from './routes/paths'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.collections} element={<CollectionsPage />} />
        <Route path={paths.catalogue} element={<CataloguePage />} />
        <Route path={paths.about} element={<AboutPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
