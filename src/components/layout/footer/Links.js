import {Link} from "react-router-dom";


const Links = () => {

    return (
        <ul className="list-group list-group-horizontal">

            <li className="list-group-item p-0">
                <a
                    href="https://alirezanaghdi.ir"
                    className="btn btn-sm btn-link link-gray"
                >
                    درباره ما
                </a>
            </li>

            <li className="list-group-item p-0">
                <Link
                    to="/coming-soon"
                    className="btn btn-sm btn-link link-gray"
                >
                    تماس با ما
                </Link>
            </li>

        </ul>
    );
};

export default Links;
