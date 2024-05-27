import './App.css';
import { useState, useEffect } from 'react';
import ColorCard from './components/ColorCard.jsx';
import GradientCard from './components/GradientCard.jsx';

function App() {
	const url =
		'https://unpkg.com/color-name-list@10.21.0/dist/colornames.bestof';

	const [name, setName] = useState('Grey Area');
	const [name2, setName2] = useState('Doctor');
	const [hex, setHex] = useState('#8F9394');
	const [hex2, setHex2] = useState('#F9F9F9');
	const [parsed, setParsed] = useState('');

	const defaultTitle = 'Shady Shader';
	const gradient = `linear-gradient(to bottom, ${hex}, ${hex2})`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setParsed(data));
	}, []);

	const ColorShuffle = (index) => {
		const parsedLength = Object.keys(parsed).length;
		const random = Math.round(Math.random() * parsedLength);
		if (index == 1) {
			setName(parsed[random].name);
			setHex(parsed[random].hex.toUpperCase());
		} else {
			setName2(parsed[random].name);
			setHex2(parsed[random].hex.toUpperCase());
		}
	};

	return (
		<div className='main-wrapper' style={{ background: gradient }}>
			<h1 className='title'>{defaultTitle}</h1>

			<div className='card-wrapper'>
				<ColorCard
					onColorShuffle={() => {
						ColorShuffle(1);
					}}
					name={name}
					hex={hex}
				/>
				<ColorCard
					onColorShuffle={() => {
						ColorShuffle(2);
					}}
					name={name2}
					hex={hex2}
				/>
			</div>
			<div className='gradient-wrapper'>
				<GradientCard gradient={gradient} />
			</div>
		</div>
	);
}

export default App;
