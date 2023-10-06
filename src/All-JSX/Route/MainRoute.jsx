
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Banner from "../Componentes/Banner/Banner";
import Slider from "../Componentes/Swiper/Slider";


const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>,
                children: [
                    {
                        path: "/",
                        element: <Slider></Slider>
                    }
                ]
            }
        ]
    }
])

export default MainRoute;