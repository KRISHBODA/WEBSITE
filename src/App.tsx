import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CollectionsPage from './pages/CollectionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { paths } from './routes/paths'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.products} element={<ProductsPage />} />
        <Route path={paths.collections} element={<CollectionsPage />} />
        <Route path={paths.about} element={<AboutPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
