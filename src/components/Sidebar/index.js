import React from 'react';
import {
	SidebarContanier,
	Icon,
	CloseIcon,
	SideBtnWrap,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContanier onClick={toggle} isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						onClick={toggle}
						to='about'>
						About
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to='discover'>
						Discover
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to='services'>
						Services
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to='signup'>
						Sign up
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/signin'>
						Sign In
					</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContanier>
	);
};

export default Sidebar;
