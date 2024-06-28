import './App.css';
import { useState, useEffect } from 'react';
import ColorCard from './components/ColorCard.jsx';
import GradientCard from './components/GradientCard.jsx';

function App() {
	const url =
		'https://unpkg.com/color-name-list@10.21.0/dist/colornames.bestof';

	const [colorData, setColorData] = useState({
		first: 'Grey Area',
		first_hex: '#8F9394',
		second: 'Doctor',
		second_hex: '#F9F9F9',
	});
	const [parsed, setParsed] = useState(null);

	const defaultTitle = 'Shady Shader';
	const gradient = `linear-gradient(to bottom, ${colorData.first_hex}, ${colorData.second_hex})`;

	const fetchColors = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setParsed(data);
		} catch (error) {
			console.warn('Failed to fetch data from API.', error);
		}
	};

	useEffect(() => {
		fetchColors();
	}, []);

	const handleColorShuffle = (index) => {
		const parsedLength = Object.keys(parsed).length;
		const random = Math.round(Math.random() * parsedLength);
		if (index == 1) {
			const handleColorData = () => {
				setColorData((prevColorData) => ({
					...prevColorData,
					first: parsed[random].name,
					first_hex: parsed[random].hex.toUpperCase(),
				}));
			};
			handleColorData();
		} else {
			const handleColorData = () => {
				setColorData((prevColorData) => ({
					...prevColorData,
					second: parsed[random].name,
					second_hex: parsed[random].hex.toUpperCase(),
				}));
			};
			handleColorData();
		}
	};

	if (parsed !== null) {
		return (
			<div className='main-wrapper' style={{ background: gradient }}>
				<h1 className='title'>{defaultTitle}</h1>

				<div className='card-wrapper'>
					<ColorCard
						onColorShuffle={() => {
							handleColorShuffle(1);
						}}
						name={colorData.first}
						hex={colorData.first_hex}
					/>
					<ColorCard
						onColorShuffle={() => {
							handleColorShuffle(2);
						}}
						name={colorData.second}
						hex={colorData.second_hex}
					/>
				</div>
				<div className='gradient-wrapper'>
					<GradientCard gradient={gradient} />
				</div>
			</div>
		);
	} else {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}
}

export default App;
