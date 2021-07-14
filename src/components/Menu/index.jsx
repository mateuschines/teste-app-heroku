import { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from './../../images/logo.png';
import { Link } from "react-router-dom";
import axios from 'axios';

export const Menu = () => {

    const [dataMenu, setDataMenu] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/mateuschines')
            .then((value) => {
                value.json().then((data) => {
                    console.log(data.location)
                })
            })

        setDataMenu([
            {
                "id": "1",
                "categoria": "Telefonia"
            },
            {
                "id": "2",
                "categoria": "Eletrônicos"
            },
            {
                "id": "3",
                "categoria": "Games"
            },
            {
                "id": "4",
                "categoria": "Móveis"
            }
        ])

        fetch('http://react.professorburnes.com.br/categoria')
        .then((value) => {
            value.json().then((data) => {
                console.log(data)
            })
        })

        axios.get('http://react.professorburnes.com.br/categoria').then((value) => {
                console.log(value.data)
            })
    }, []);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="nav-link" to={'/'}>
                        <img src={Logo} alt="SubMarino"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                        aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Home
                                </Link>
                                {/* <a className="nav-link" href="index.php">
                                    Home
                                </a> */}
                            </li>
                            {
                                dataMenu.map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <Link key={index} className="nav-link" to={'/categoria/'+item.id}>
                                            {item.categoria}
                                        </Link>
                                        {/* <a key={'link' + index} className="nav-link" href="index.php?pagina=sobre">
                                            {item.categoria}
                                        </a> */}
                                    </li>
                                ))
                            }
                            <li className="nav-item">
                                <a className="nav-link" href="index.php?pagina=sobre">
                                    Sobre a Empresa
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="index.php?pagina=login" className="nav-link">
                                    {/* <i className="fas fa-user"></i> */}
                                    <FaUser />
                                </a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={'/carrinho'}>
                                    <FaShoppingCart />
                                    {/* <i className="fas fa-shopping-cart"></i> */}
                            </Link>
                                
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0" name="formBusca" action="index.php">
                            <input className="form-control mr-sm-2" type="search" placeholder="Palavra-chave" aria-label="Search" name="busca">
                            </input>
                            <button className="btn btn-warning my-2 my-sm-0" type="submit">
                                {/* <i className="fas fa-search"></i> */}
                                <FaSearch size={20} />
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    );
}
