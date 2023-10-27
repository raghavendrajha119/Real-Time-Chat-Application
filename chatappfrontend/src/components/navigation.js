import React, { useState, useEffect } from 'react';
export default function Navigation(props) {
    const [isAuth, setIsAuth] = useState(false);
    // useEffect is a react hook allows to perform side effects in function in components
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Chat-me</a>
                <div className="navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-4 d-flex flex-row">
                        <li className="nav-item active mr-2">
                            {isAuth ? <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> : <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>}
                        </li>
                        <li className="nav-item">
                            {isAuth?<a className='nav-link' href='/logout'>Logout</a>:null}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
