
import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [backgroundImg, setBackgroundImg] = useState('');
    const [bannerTitle, setBannerTitle] = useState(null);

    const authInfo = {
        backgroundImg, 
        setBackgroundImg,
        bannerTitle,
        setBannerTitle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}