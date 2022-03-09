import React, { useState } from 'react';
import { axiosApp } from '../../utils/axiosApp';
import {
	makeStyles,
	Container,
	Typography
} from '@material-ui/core';
import bannerImage from '../../images/banner2.jpg';
import Carousel from './Carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
	Box,
	BoxImage,
	BoxPrice,
	BoxPercentage
} from './BoxElements';

const useStyles = makeStyles({
	banner: {
		backgroundImage: `url(${bannerImage})`
	},
	bannerContent: {
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 25,
		justifyContent: 'space-around'
	},
	tagline: {
		display: 'flex',
		height: '40%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const Banner = () => {
	const classes = useStyles();

	return (
		<div className={classes.banner} id='portfolio'>
			<Container className={classes.bannerContent}>
				<div className={classes.tagline}>
					<Typography
						variant='h2'
						style={{
							fontWeight: 'bold',
							marginTop: '45px',
							fontFamily:
								'Encode Sans Expanded',
							color: '#01bf71'
						}}>
						Portfolio
					</Typography>
				</div>

				<Box>
					<BoxImage
						src={
							require('../../images/wallet1.png')
								.default
						}
					/>
					<BoxPrice>10000</BoxPrice>
					<BoxPercentage>+10.82%</BoxPercentage>
				</Box>
				<Typography
					variant='subtitle1'
					style={{
						color: 'darkgrey',
						textTransform: 'capitalize',
						fontFamily: 'Encode Sans Expanded',
						justifyContent: 'center',
						marginRight: 'auto',
						marginLeft: 'auto'
					}}>
					These are top 10 cryptocurrencies by
					market cap, maybe you should check them
					out.
				</Typography>
				<Carousel />
			</Container>
		</div>
	);
};

export default Banner;
