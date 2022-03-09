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
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

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
					<NavLogo to='/' onClick={toggleHome}>
						Cryptonic
					</NavLogo>
					<MobileIcon
						onClick={toggle}
						isOpen={isOpen}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to='about'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='discover'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								Discover
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='services'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								Services
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='signup'
								smooth={true}
								spy={true}
								duration={500}
								exact='true'>
								Sign Up
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/signin'>
							Sign in
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
