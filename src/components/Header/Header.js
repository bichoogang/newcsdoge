import React from 'react';
import logo from './logo.png'
import Web3 from 'web3'
const Header = () => {
    const localprovide = 'http://localhost:3000'
    const connetwallet = async () => {
      

        {

            let web3; let ethereum = window.ethereum;
            if (typeof window.web3 !== 'undefined') {
                web3 = new Web3(window.web3.currentProvider);
            } else {
                 web3 = new Web3.providers.HttpProvider(localprovide);
            }

            // ethereum = new Web3(window.ethereum);
            ethereum.enable().then(async (accounts) => {
                // console.log('transfer called.........', accounts[0]);
                localStorage.setItem('account', accounts[0]);
            });
            if (window.web3) {
                // Subscription register
                ethereum.on('accountsChanged', async (accounts) => {

                    // Reload to avoid MetaMask bug: "MetaMask - RPC Error: Internal JSON-RPC"

                    window.location.reload();

                });
                window.ethereum.on('networkChanged', async (network) => {
                    window.location.reload();
                });
            }
        }
    }
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src={logo} alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/explore-1">Explore</a>
                        </li>

                        <li className="nav-item">
                            <a href="/create" className="nav-link">Create</a>
                        </li>
                        <li className="nav-item">
                            <a href="/mycollection" className="nav-link">My Collections</a>
                        </li>
                        <li className="nav-item">
                            <a href="/csdoge" className="nav-link">CS DOGE</a>
                        </li>
                        {/* <li className="nav-item">
                            <button className="btn btn-bordered-white btn-smaller mt-0" onClick={connetwallet}>Connect Wallet</button>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Community <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="/blog-single" className="nav-link">Blog Single</a></li>
                                <li className="nav-item"><a href="/help-center" className="nav-link">Help Center</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Pages <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/authors" className="nav-link">Authors</a></li>
                                <li className="nav-item"><a href="/author" className="nav-link">Author</a></li>
                                <li className="nav-item"><a href="/wallet-connect" className="nav-link">Wallet Connect</a></li>
                                <li className="nav-item"><a href="/create" className="nav-link">Create</a></li>
                                <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                                <li className="nav-item"><a href="/signup" className="nav-link">Signup</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li> */}
                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                <i className="fas fa-search" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    {/* <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a href="/wallet-connect" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />Wallet Connect</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;