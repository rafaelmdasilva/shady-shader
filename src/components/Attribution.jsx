import styles from './Attribution.module.css';
import gitLogo from '../../public/github-mark.png';

const Attribution = () => {
	return (
		<span className={styles.attribution}>
			Coded by&nbsp;
			<a href='https://github.com/rafaelmdasilva' target='_blank'>
				Rafael M. da Silva
			</a>
			<img src={gitLogo} alt='GitHub Logo' />
		</span>
	);
};

export default Attribution;
