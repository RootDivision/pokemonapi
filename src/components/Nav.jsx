import { Link } from "react-router-dom"

const Nav = () => {
   return (
        <nav>
            <Link to="/">home</Link> |
            <Link to="/detail">detail</Link>
        </nav>
    )
}

export default Nav
