import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import './news.css';

import { useGetCryptoNewsQuery } from '../config/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory: 'Cryptocurrency',
		count: simplified ? 6 : 12
	});

	if (!cryptoNews) return 'Loading...';

	const demoImage =
		'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

	return (
		<div style={{ backgroundColor: 'black' }} id='news'>
			<h1
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '600px',
					color: '#01bf71',
					textDecoration: 'underline',
					cursor: 'pointer'
				}}>
				News
			</h1>
			<Row gutter={[24, 24]} className='news'>
				{cryptoNews.value.map((news, i) => (
					<Col xs={24} sm={12} lg={8} key={i}>
						<Card
							hoverable
							className='news-card'>
							<a
								href={news.url}
								target='_blank'
								rel='noreferrer'>
								<div className='news-image-container'>
									<Title
										className='news-title'
										level={4}>
										{news.name}
									</Title>
									<img
										src={
											news?.image
												?.thumbnail
												?.contentUrl ||
											demoImage
										}
										alt='Crypto'
										className='news-image-container'
									/>
									<p className='news-card p'>
										{news.description >
										100
											? news.description.substring(
													0,
													100
											  )
											: news.description}
									</p>
									<div className='provider-container'>
										<Avatar
											src={
												news
													.provider[0]
													?.image
													?.thumbnail
													?.contentUrl ||
												demoImage
											}
											alt='provider'
											className='provider-name'
										/>
									</div>
									<Text
										style={{
											color: 'black'
										}}>
										{
											moment(
												news.datePublished
											).startOf('ss')
												.fromNow
										}
									</Text>
								</div>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default News;
