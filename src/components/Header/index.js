import React, { Component } from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header id="main-header">
                <div className="header-content">
                    <Link to='/'>
                        <img src={logo} alt="InstaRocket" />
                    </Link>
                    <Link to='/new'>
                        <img src={camera} alt="Enviar publicação" />
                    </Link>
                </div>
            </header>
        );
    }
}