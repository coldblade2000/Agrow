import {Link} from "react-router-dom";

const LandingPage = ({}) => {
    return(
        <div className="landingDiv d-flex flex-column align-items-center h-100">
            <h2 className="text-center">About Agrow</h2>
            <Link to={"/stages"}><button type="button" className="btn btn-success">Try Agrow</button></Link>
        </div>
    )
}
export default LandingPage
