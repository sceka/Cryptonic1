import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { axiosApp } from '../../utils/axiosApp';
import { use } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
} from './SignUpElements';

const SignUp = () => {
	const navigate = useNavigate();

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
				investorObj,
				await navigate('/simulator')
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>Cryptonic</Icon>
					<FormContent
						typeof='submit'
						onSubmit={handleSubmit}>
						<Form onSubmit={handleSubmit}>
							<FormH1>Sign up here!</FormH1>
							<FormLabel htmlFor='for'>
								Email
							</FormLabel>
							<FormInput
								value={investorObj.email}
								name='email'
								type='email'
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
							<FormLabel htmlFor='for'>
								Password
							</FormLabel>
							<FormInput
								onChange={e =>
									setInvestorObj(
										previousVal => ({
											...previousVal,
											password:
												e.target
													.value
										})
									)
								}
								value={investorObj.password}
								name='password'
								type='password'
								required
							/>
							<FormLabel htmlFor='for'>
								Your starting amount
							</FormLabel>
							<FormInput
								onChange={e =>
									setInvestorObj(
										previousVal => ({
											...previousVal,
											budget: e.target
												.value
										})
									)
								}
								value={investorObj.budget}
								name='budget'
								type='number'
								required
							/>
							<FormButton type='submit'>
								Sign Up
							</FormButton>
							<Text>
								Having Difficulties?
							</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default SignUp;
