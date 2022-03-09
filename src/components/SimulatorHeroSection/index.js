import Video from '../../videos/simulatorVideo.mp4';
import {
	HeroBg,
	HeroContainer,
	VideoBg,
	HeroContent,
	HeroP,
	HeroH1
} from './SimulatorHeroElements';

const HeroSection = () => {
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
				</HeroContent>
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
