import { CartWidget } from "../CartWidget/CartWidget"

function NavBar () {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-warning ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Under Armour</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Indumentaria
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Jacket</a></li>
                        <li><a className="dropdown-item" href="#">Hoodies</a></li>
                        <li><hr className="dropdown-divider"/></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                <CartWidget/>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar