import styled from 'styled-components';
import {
	MdKeyboardArrowRight,
	MdArrowForward
} from 'react-icons/md';

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	height: 100%;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH1 = styled.h1`
	color: #01bf71;
	font-size: 40px;
	text-align: center;
	text-shadow: 2px 2px 8px #ff0000;

	@media screen and (max-width: 768px) {
		font-size: 48px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	} ;
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #f7931a;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	text-shadow: 2px 4px 15px #f7931a;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	} ;
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 470px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
