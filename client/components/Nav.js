import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = (props) => {
    const renderItems = () => {
        const res = props.items.map((item) => {
            return (
                <Link href={item.link} key={item.link}>
                    <a className={styles.link}>{item.text}</a>
                </Link>
            );
        });
        return res;
    };
    return <ul className={styles.nav}>{renderItems()}</ul>;
};

export default Nav;
