import styles from './ColorCard.module.css';

const ColorCard = (props) => {
	const copyName = () => navigator.clipboard.writeText(props.name);
	const copyHex = () => navigator.clipboard.writeText(props.hex.toUpperCase());
	const buttonName = 'Fetch!';

	return (
		<div className={styles.card}>
			<button
				className={styles.button}
				style={{ background: props.hex }}
				onClick={props.onColorShuffle}
			>
				{buttonName}
			</button>
			<p className={styles.name} onClick={copyName}>
				{props.name}
			</p>
			<p className={styles.hex} onClick={copyHex}>
				{props.hex}
			</p>
		</div>
	);
};

export default ColorCard;
