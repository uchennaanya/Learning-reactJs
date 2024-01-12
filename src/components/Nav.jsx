import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header>
                <Link to="/">Logo</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Nav
