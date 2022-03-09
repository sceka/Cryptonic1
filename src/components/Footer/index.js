import React from 'react';
import {
	FooterContanier,
	FooterWrap,
	FooterLinksContanier,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialIconLink,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons
} from './FooterElements';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaTwitter
} from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<FooterContanier>
				<FooterWrap>
					<FooterLinksContanier>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>
									About us
								</FooterLinkTitle>
								<FooterLink to='/'>
									How it works
								</FooterLink>
								<FooterLink to='/'>
									Testimonials
								</FooterLink>
								<FooterLink to='/'>
									Careers
								</FooterLink>
								<FooterLink to='/'>
									Investors
								</FooterLink>
								<FooterLink to='/'>
									Terms of Service
								</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>
									Contact us
								</FooterLinkTitle>
								<FooterLink to='/'>
									Contact
								</FooterLink>
								<FooterLink to='/'>
									Support
								</FooterLink>
								<FooterLink to='/'>
									Destinations
								</FooterLink>
								<FooterLink to='/'>
									Sponsorships
								</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>
									Videos
								</FooterLinkTitle>
								<FooterLink to='/'>
									Submit Video
								</FooterLink>
								<FooterLink to='/'>
									Ambassadors
								</FooterLink>
								<FooterLink to='/'>
									Agency
								</FooterLink>
								<FooterLink to='/'>
									Influencer
								</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>
									Social Media
								</FooterLinkTitle>
								<FooterLink to='/'>
									Instagram
								</FooterLink>
								<FooterLink to='/'>
									Facebook
								</FooterLink>
								<FooterLink to='/'>
									Youtube
								</FooterLink>
								<FooterLink to='/'>
									Twitter
								</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContanier>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to='/'>
								Cryptonic
							</SocialLogo>
							<WebsiteRights>
								Cryptonic ©{' '}
								{new Date().getFullYear()}{' '}
								All rights reserved.
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink
									href='/'
									aria-label='Facebook'>
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink
									href='/'
									aria-label='Instagram'>
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink
									href='/'
									aria-label='Youtube'>
									<FaYoutube />
								</SocialIconLink>
								<SocialIconLink
									href='/'
									aria-label='Twitter'>
									<FaTwitter />
								</SocialIconLink>
								<SocialIconLink
									href='https://www.linkedin.com/in/marko-scekic-187213213/'
									aria-label='LinkedIn'>
									<FaLinkedin />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterWrap>
			</FooterContanier>
		</>
	);
};

export default Footer;
