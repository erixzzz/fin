import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { TelaLogin } from "../components/TelaLogin";
import { TelaCadastro } from "../components/TelaCadastro";
import { Transactions } from "../pages/Transactions";

export function Layout() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaLogin />} />
          <Route path='/SignUp' element={<TelaCadastro />} />
          <Route path='/home' element={<Transactions />}/>
        </Routes>
      </BrowserRouter>
    )
}