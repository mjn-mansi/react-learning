import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Bgchanger from './Bgchanger.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'
import CurrencyConvertor from './CurrencyConvertor.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import BlogPage from './BlogPage.jsx'
import User from './User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Counter />
//       }, {
//         path: "bgChanger",
//         element: <Bgchanger />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Counter />}></Route>
      <Route path='bgChanger' element={<Bgchanger />}></Route>
      <Route path='currency-convertor' element={<CurrencyConvertor />}></Route>
      <Route path='password-generator' element={<PasswordGenerator />}></Route>
      <Route path='blogs/:username' element={<BlogPage />}></Route>
      <Route path='login' element={<User />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
