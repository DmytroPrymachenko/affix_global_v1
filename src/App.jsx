import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Loading from './components/loading/Loading'

const Home = lazy(() => import('./pages/home/Home'))
const Advantages = lazy(() => import('./pages/Advantages'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/affix_global/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/advantages"
          element={
            <Suspense fallback={<Loading />}>
              <Advantages />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
