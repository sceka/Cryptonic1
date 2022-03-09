import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

export const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
			<Footer />
		</div>
	);
};
