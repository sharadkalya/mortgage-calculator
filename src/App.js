import React, { useState, useEffect } from 'react';
import './App.css';
import DisplayResults from './DisplayResults';
import DisplayProgress from './DisplayProgress';
import DisplaySliders from './DisplaySliders';

const TAX = 1000;
const COMMON = 1200;

function App() {
	const [interestRate, setInterestRate] = useState('3');
	const [salePrice, setSalePrice] = useState(100000);
	const [downPayment, setDownPayment] = useState('10000');
	const [term, setTerm] = useState(1);

	const [emi, setEmi] = useState(0);
	const [emiWithTaxes, setEmiWithTaxes] = useState(0);
	const [taxValue, setTaxValue] = useState('2212');
	const [commonValue, setCommonValue] = useState('2000');
	const [mortgageValue, setMortgageValue] = useState('0');

	const calculateEmi = () => {
		const months = term * 12;
		const monthlyInterest = interestRate / months;
		const factor = Math.pow((1 + monthlyInterest / 100), months);
		const amount = salePrice - downPayment;

		const newEmi = Math.round((amount * (monthlyInterest / 100) * factor) / (factor - 1));
		const newEmiWithTaxes = newEmi + TAX + COMMON;
		setEmi(newEmi);
		setEmiWithTaxes(newEmiWithTaxes);
		setTaxValue(TAX * 100 / newEmiWithTaxes);
		setCommonValue(COMMON * 100 / newEmiWithTaxes);
		setMortgageValue(newEmi * 100 / newEmiWithTaxes);
	};

	useEffect(calculateEmi, [interestRate, salePrice, downPayment, term]);

	const sliderChange = (event, newValue, type) => {
		switch (type) {
			case 'interest':
				setInterestRate(newValue);
				break;
			case 'salePrice':
				setSalePrice(newValue);
				setDownPayment(10000);
				break;
			case 'downPayment':
				setDownPayment(newValue);
				break;
			case 'term':
				setTerm(newValue);
				break;
			default: break;
		};
	};

	return (
		<div className="App">
			<div>
				<div className="mortgage-container">
					<DisplayResults
						common={COMMON}
						emi={emi}
						tax={TAX}
					/>
					<DisplayProgress
						commonValue={commonValue}
						emiWithTaxes={emiWithTaxes}
						mortgageValue={mortgageValue}
						taxValue={taxValue}
					/>
					<DisplaySliders
						downPayment={downPayment}
						interestRate={interestRate}
						salePrice={salePrice}
						sliderChange={sliderChange}
						term={term}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
