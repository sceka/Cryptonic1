import {
	CircularProgress,
	makeStyles
} from '@material-ui/core';

import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { HistoricalChart } from '../config/api';
import { Line } from 'react-chartjs-2';
import { chartDays } from '../config/data';
import SelectButton from '../reusable/SelectButton';

const CoinInfo = ({ coin }) => {
	const [historicData, setHistoricData] = useState();
	const [days, setDays] = useState(1);

	const useStyles = makeStyles(theme => ({
		container: {
			width: '70%',
			display: 'inline-block',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-end',
			float: 'right',
			marginTop: 25,
			padding: 40,
			[theme.breakpoints.down('md')]: {
				width: '100%',
				marginTop: 0,
				padding: 20,
				paddingTop: 0
			}
		}
	}));

	const classes = useStyles();

	const fetchHistoricData = async () => {
		const { data } = await axios.get(
			HistoricalChart(coin.id, days)
		);

		setHistoricData(data.prices);
	};

	useEffect(() => {
		fetchHistoricData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [days]);

	return (
		<div className={classes.container}>
			{!historicData ? (
				<CircularProgress
					style={{ color: 'gold' }}
					size={250}
					thickness={1}
				/>
			) : (
				<>
					<Line
						data={{
							labels: historicData.map(
								coin => {
									let date = new Date(
										coin[0]
									);
									let time =
										date.getHours() > 12
											? `${
													date.getHours() -
													12
											  }:${date.getMinutes()} PM`
											: `${date.getHours()}:${date.getMinutes()} AM`;
									return days === 1
										? time
										: date.toLocaleDateString();
								}
							),

							datasets: [
								{
									data: historicData.map(
										coin => coin[1]
									),
									label: `Price ( Past ${days} ${
										days === 1
											? 'Day'
											: 'Days'
									} ) in $`,
									borderColor: '#EEBC1D'
								}
							]
						}}
						options={{
							elements: {
								point: {
									radius: 1
								}
							}
						}}
					/>
					<div
						style={{
							display: 'flex',
							marginTop: 20,
							justifyContent: 'space-around',
							width: '100%'
						}}>
						{chartDays.map(day => (
							<SelectButton
								key={day.value}
								onClick={() =>
									setDays(day.value)
								}
								selected={
									day.value === days
								}>
								{day.label}
							</SelectButton>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default CoinInfo;
