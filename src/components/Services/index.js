import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';

import {
	ServicesCard,
	ServicesContanier,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
	ServicesP,
	ServicesWrapper
} from './ServicesElements';

const Services = () => {
	return (
		<>
			<ServicesContanier id='services'>
				<ServicesH1>Our Services</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>
							Reduce expenses
						</ServicesH2>
						<ServicesP>
							We increase your revenaue and
							help you when you are in
							trouble.
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>
							Reduce fee gas
						</ServicesH2>
						<ServicesP>
							We increase your revenaue and
							help you when you are in trouble
							with gas fee because its much
							expensive
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>Help</ServicesH2>
						<ServicesP>
							We will give you cashback for
							first three transactions and It
							will give you boost
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContanier>
		</>
	);
};

export default Services;
