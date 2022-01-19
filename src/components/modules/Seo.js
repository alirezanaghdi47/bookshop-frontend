import {Helmet} from "react-helmet";


const Seo = ({children}) => {
    return (
        <Helmet>
            {children}
        </Helmet>
    )
}

export default Seo