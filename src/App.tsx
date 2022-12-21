import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import Navbar from "./components/navbar";
import Report from "./pages/report";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const Cancel = lazy(() => import("./pages/cancel"));
const Declined = lazy(() => import("./pages/decline"));
const Example = lazy(() => import("./pages/example"));
const Main = lazy(() => import("./pages/main"))
const Contact = lazy(() => import("./pages/contact"))
const FAQ = lazy(() => import("./pages/faq"))

const queryClient = new QueryClient()


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Suspense fallback={<div className="w-screen h-[calc(100vh-80px)] flex justify-center items-center"><ClipLoader /></div>}>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/decline" element={<Declined />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/report" element={<Report />} />
            <Route path="/example/:type" element={<Example />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
