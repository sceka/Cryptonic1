import React from 'react';
import Button from '../reusable/ButtonElements';
import {
	InfoContanier,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TopLine,
	TextWrapper,
	Heading,
	Subtitle,
	BtnWrap,
	Img,
	ImgWrap
} from './SimulatorInfoElements';

export const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	darkText,
	headLine,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2
}) => {
	return (
		<>
			<InfoContanier lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading
									lightText={lightText}>
									{headLine}
								</Heading>
								<Subtitle
									darkText={darkText}>
									{description}
								</Subtitle>
								<BtnWrap>
									<Button
										primary={
											primary ? 1 : 0
										}
										dark={dark ? 1 : 0}
										dark2={
											dark2 ? 1 : 0
										}
										onClick={
											window.location
												.href
										}
										href={`/simulator/chart/${id}`}
										style={{
											textDecoration:
												'none'
										}}>
										View Chart
									</Button>
									<Button
										onClick={
											window.location
												.href
										}
										href={`/buy/${id}`}
										primary={
											primary ? 1 : 0
										}
										dark={dark ? 1 : 0}
										dark2={
											dark2 ? 1 : 0
										}
										style={{
											marginLeft:
												'20px',
											textDecoration:
												'none'
										}}>
										Buy
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContanier>
		</>
	);
};
