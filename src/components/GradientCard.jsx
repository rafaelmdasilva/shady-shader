import styles from './GradientCard.module.css';
import Attribution from './Attribution';

const GradientCard = (props) => {
	const copyGradient = () =>
		navigator.clipboard.writeText(`background: ${props.gradient}`);

	return (
		<div className={styles.main}>
			<p className={styles.gradient} onClick={copyGradient}>
				background:&nbsp;{props.gradient}
			</p>
			<Attribution />
		</div>
	);
};

export default GradientCard;
