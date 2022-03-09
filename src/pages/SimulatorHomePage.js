import Banner from '../components/Banner/index';
import HeroSection from '../components/SimulatorHeroSection/index';
import { InfoSection } from '../components/SimulatorInfoSection/index';
import {
	AvalancheInfo,
	BinanceCoinInfo,
	BitcoinInfo,
	CardanoInfo,
	ChainlinkInfo,
	DogeCoinInfo,
	EthereumInfo,
	HoloInfo,
	LiteCoinInfo,
	MoneroInfo,
	PolkadotInfo,
	ShibaInuInfo,
	SolanaInfo,
	StellarInfo,
	TerraCoin,
	UniswapInfo,
	VeChainInfo,
	XrpInfo
} from '../components/SimulatorInfoSection/SimulatorData';
import News from '../components/News/News';
import Navbar from '../components/SimulatorNavbar';
import { Provider } from 'react-redux';
import store from '../app/store';

function SimulatorHomePage({ topLine }) {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<Banner />
			<InfoSection {...BitcoinInfo} />
			<InfoSection {...EthereumInfo} />
			<InfoSection {...BinanceCoinInfo} />
			<InfoSection {...CardanoInfo} />
			<InfoSection {...SolanaInfo} />
			<InfoSection {...XrpInfo} />
			<InfoSection {...PolkadotInfo} />
			<InfoSection {...DogeCoinInfo} />
			<InfoSection {...TerraCoin} />
			<InfoSection {...AvalancheInfo} />
			<InfoSection {...LiteCoinInfo} />
			<InfoSection {...ChainlinkInfo} />
			<InfoSection {...UniswapInfo} />
			<InfoSection {...ShibaInuInfo} />
			<InfoSection {...VeChainInfo} />
			<InfoSection {...StellarInfo} />
			<InfoSection {...HoloInfo} />
			<InfoSection {...MoneroInfo} />
			<Provider store={store}>
				<News />
			</Provider>
		</div>
	);
}

export default SimulatorHomePage;
