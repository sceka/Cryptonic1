import React, { useEffect, useState } from 'react';
import { axiosApp } from '../../utils/axiosApp';
import {
	Container,
	FormContent,
	FormH1,
	FormWrap,
	Icon,
	Form,
	FormLabel,
	FormInput,
	FormButton,
	Text
} from './BuyPageElements';
import { Navigate } from 'react-router-dom';
import { Img } from '../SimulatorInfoSection/SimulatorInfoElements';
import axios from 'axios';
import { CoinList, SingleCoin } from '../config/api';
import { useParams } from 'react-router';
import { LinearProgress } from '@material-ui/core';

const BuyPage = () => {
	const [investorObj, setInvestorObj] = useState({
		email: '',
		password: '',
		budget: ''
	});

	const handleSubmit = async e => {
		try {
			e.preventDefault();
			await axiosApp.post(
				'/investor/auth/signup',
				investorObj
			);
		} catch (err) {
			console.log(err);
		}
	};
	const { id } = useParams();
	const [coin, setCoin] = useState();

	const fetchCoin = async () => {
		const { data } = await axios.get(SingleCoin(id));
		setCoin(data);
	};

	useEffect(() => {
		fetchCoin();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!coin)
		return (
			<LinearProgress
				style={{ backgroundColor: '#265e57' }}
			/>
		);

	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/simulator'>Cryptonic</Icon>
					<FormContent
						typeof='submit'
						onSubmit={handleSubmit}>
						<Form onSubmit={handleSubmit}>
							<FormH1>
								Buy Your Crypto Right Now!
							</FormH1>
							<FormH1>
								<img
									src={coin?.image.small}
									alt={coin?.name}
								/>
							</FormH1>
							<FormLabel htmlFor='for'>
								Amount
							</FormLabel>
							<FormInput
								name='number'
								type='number'
								onChange={e =>
									setInvestorObj(
										previousVal => ({
											...previousVal,
											email: e.target
												.value
										})
									)
								}
								required
							/>
							<FormButton type='submit'>
								Buy
							</FormButton>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default BuyPage;
