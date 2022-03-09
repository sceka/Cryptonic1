import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
	HeroBg,
	HeroContainer,
	VideoBg,
	HeroBtnWrapper,
	HeroContent,
	HeroP,
	HeroH1,
	ArrowForward,
	ArrowRight
} from './HeroElements';
import Button from '../reusable/ButtonElements';

export const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<div>
			<HeroContainer>
				<HeroBg>
					<VideoBg
						autoPlay
						loop
						muted
						src={Video}
						type='video/mp4'
					/>
				</HeroBg>
				<HeroContent>
					<HeroH1></HeroH1>
					<HeroP></HeroP>
					<HeroBtnWrapper>
						<Button
							style={{
								textDecoration: 'none'
							}}
							to='signup'
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary='true'
							dark='true'
							smooth={true}
							spy={true}
							duration={500}
							exact='true'>
							Get started{' '}
							{hover ? (
								<ArrowForward />
							) : (
								<ArrowRight />
							)}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</div>
	);
};
