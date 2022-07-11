import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src="https://images.unsplash.com/photo-1582025361996-f2d201af8043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
    />
    <div className={styles.profile}>
      <Avatar source="https://github.com/gabriel-nt.png" />
      <strong>Gabriel</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
);
