import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import NavBar from "../Componentes/NavBar/NavBar";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Componentes/AuthContext/AuthProvider";

const MainLayout = () => {

    const bgRef = useRef();
    const {backgroundImg} = useContext(AuthContext);

    useEffect(() => {
        bgRef.current.style.background = `linear-gradient(rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.5)), url("${backgroundImg}") no-repeat center bottom`;
        bgRef.current.style.backgroundSize = "cover";
    }, [backgroundImg]);

    return (
        <div ref={bgRef} id="main-layout"
        className={`max-h-[120vh] bg-no-repeat bg-cover bg-center`}>

            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>

            <div className="max-w-7xl mx-auto">
                <Outlet/>
            </div>         
        </div>
    );
};

export default MainLayout;