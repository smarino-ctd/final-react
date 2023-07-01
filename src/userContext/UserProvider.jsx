import { useState } from 'react';
import { UserContext } from "./userContext"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer";

const UserProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const changeTheme = () => {

        setTheme(theme == "light" ? "dark" : "light")

    }

    return(

        <UserContext.Provider value={{theme, changeTheme}}>

            <Header></Header>

            {children}

            <Footer></Footer>
            
        </UserContext.Provider>

    )

}

export default UserProvider;