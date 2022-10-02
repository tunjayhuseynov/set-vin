import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import Navbar from "./components/navbar";

const Main = lazy(() => import("./pages/main"))
const Contact = lazy(() => import("./pages/contact"))
const FAQ = lazy(() => import("./pages/faq"))

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className="w-screen h-[calc(100vh-80px)] flex justify-center items-center"><ClipLoader /></div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
