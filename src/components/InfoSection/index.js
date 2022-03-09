import React from 'react';
import { Navigate, useHref } from 'react-router';
import { useNavigate } from 'react-router-dom';
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
} from './InfoElements';

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
	const navigate = useNavigate();
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
										style={{
											textDecoration:
												'none'
										}}
										to='home'
										smooth={true}
										duration={500}
										spy={true}
										exact={true}
										offset={-80}
										primary={
											primary ? 1 : 0
										}
										dark={dark ? 1 : 0}
										dark2={
											dark2 ? 1 : 0
										}>
										{buttonLabel}
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
