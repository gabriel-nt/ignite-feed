import styles from './Header.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';

export const Header = () => (
  <header className={styles.header}>
    <img src={igniteLogo} alt="Logotipo do ignite" />
    <strong>Ignite Feed</strong>
  </header>
);
