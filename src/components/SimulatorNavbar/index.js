import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavBtn,
	NavBtnLink
} from './SimulatorNavbarElements';
import { Nav as NavB, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';

const Navbar = ({ toggle, isOpen }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo
						to='/simulator'
						onClick={toggleHome}>
						Cryptonic
					</NavLogo>
					<MobileIcon
						onClick={toggle}
						isOpen={isOpen}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavB>
							<NavDropdown title='Coins'>
								<NavLinks
									to='bitcoin'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/btc.svg')
													.default
											}
											alt='Bitcoin'
										/>{' '}
										Bitcoin
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='ethereum'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='ethereum'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/eth.png')
													.default
											}
											alt='Ethereum'
										/>{' '}
										Ethereum
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='binancecoin'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='binance'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/bin.png')
													.default
											}
											alt='Binance'
										/>{' '}
										Binance
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='cardano'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='cardano'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/ada.png')
													.default
											}
											alt='Cardano'
										/>{' '}
										Cardano
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='solana'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='solana'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/sol.png')
													.default
											}
											alt='Solana'
										/>{' '}
										Solana
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='ripple'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='xrp'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/xrplogo.png')
													.default
											}
											alt='XRP'
										/>{' '}
										XRP
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='polkadot'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='polkadot'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/polkadotlogo.png')
													.default
											}
											alt='Polkadot'
										/>{' '}
										Polkadot
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='dogecoin'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='doge'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/dogelogo.png')
													.default
											}
											alt='DogeCoin'
										/>{' '}
										DogeCoin
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='terra-luna'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='terra'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/terralogo.png')
													.default
											}
											alt='Terra'
										/>{' '}
										Terra
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='avalanche-2'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='avalanche'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/avax.png')
													.default
											}
											alt='Avalanche'
										/>{' '}
										Avalanche
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='litecoin'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='litecoin'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/lite.png')
													.default
											}
											alt='Litecoin'
										/>{' '}
										Litecoin
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='chainlink'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='chainlink'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/link.png')
													.default
											}
											alt='Chainlink'
										/>{' '}
										Chainlink
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='uniswap'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='uniswap'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/uni.png')
													.default
											}
											alt='Uniswap'
										/>{' '}
										Uniswap
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='shiba-inu'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='shibaInu'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/shibainu.svg')
													.default
											}
											alt='ShibaInu'
										/>{' '}
										ShibaInu
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='vechain'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='vechain'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/vet.png')
													.default
											}
											alt='VeChain'
										/>{' '}
										VeChain
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='stellar'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='stellar'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/xlm.png')
													.default
											}
											alt='Stellar'
										/>{' '}
										Stellar
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='holotoken'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='holo'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/hot.png')
													.default
											}
											alt='Holo'
										/>{' '}
										Holo
									</NavDropdown.Item>
								</NavLinks>
								<NavLinks
									to='monero'
									smooth={true}
									spy={true}
									duration={500}
									exact='true'>
									<NavDropdown.Item to='monero'>
										<img
											style={{
												width: 20
											}}
											src={
												require('../../images/monerologo.png')
													.default
											}
											alt='Monero'
										/>{' '}
										Monero
									</NavDropdown.Item>
								</NavLinks>
							</NavDropdown>
						</NavB>
						<NavItem>
							<NavLinks
								activeClass='active'
								style={{
									color: '#fff',
									display: 'flex',
									alignItems: 'center',
									textDecoration: 'none',
									padding: '0 1rem',
									height: '100%',
									cursor: 'pointer'
								}}
								to='portfolio'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								Portfolio
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								activeClass='active'
								style={{
									color: '#fff',
									display: 'flex',
									alignItems: 'center',
									textDecoration: 'none',
									padding: '0 1rem',
									height: '100%',
									cursor: 'pointer'
								}}
								to='news'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								News
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								activeClass='active'
								style={{
									color: '#fff',
									display: 'flex',
									alignItems: 'center',
									textDecoration: 'none',
									padding: '0 1rem',
									height: '100%',
									cursor: 'pointer'
								}}
								to='tradingHistory'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								Trading History
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/signin'>
							Log Out
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
