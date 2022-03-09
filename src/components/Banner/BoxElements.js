import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	width: 20%;
	height: 80px;
	align-items: center;
	color: #000;
	margin-bottom: 20px;
	background: #082032;
	border-radius: 10px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	${'' /* grid-auto-columns: minmax(auto, 1fr); */}
	max-width: 20%;
`;

export const BoxImage = styled.img`
	display: block;
	witdh: 40px;
	max-height: 40px;
	max-width: 70px;
	align-items: center;
	justify-content: flex-start;
	margin-right: 90px;
`;

export const BoxPrice = styled.div`
	display: block;
	position: relative;
	right: 70px;
	text-align: center;
	font-size: 25px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

export const BoxPercentage = styled.div`
	display: block;
	position: relative;
	right: 90px;
	flex-direction: center;
	justify-content: center;
	margin-right: 20px;
	padding: 0 0 0 24px;
	margin: 0 auto;
	font-size: 14px;
`;
