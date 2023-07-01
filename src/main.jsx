
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserProvider from "./userContext/UserProvider.jsx";

import Inicio from "./routes/Inicio.jsx";
import Dentista from "./routes/Dentista.jsx";
import Contacto from "./routes/Contacto.jsx";
import Favoritos from "./routes/Favoritos.jsx";
import Error from "./routes/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>

        <UserProvider>

            <Routes>

                <Route path="/" element={<Inicio />}></Route>

                <Route path="/detalles/:userId" element={<Dentista />}></Route>

                <Route path="/contacto" element={<Contacto />}></Route>

                <Route path="/favoritos" element={<Favoritos />}></Route>
                
                <Route path="*" element={<Error />}></Route>

            </Routes>

        </UserProvider>
    
    </BrowserRouter>

);
