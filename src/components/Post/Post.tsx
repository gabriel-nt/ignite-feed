import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export const Post = () => (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar source="https://github.com/gabriel-nt.png" />

        <div className={styles.authorInfo}>
          <strong>Gabriel</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <time title="07 de julho de 2022" dateTime="2022-07-04 08:12:50">
        Publicado há 1h
      </time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋 </p>
      <p>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>
      <p>
        👉 <a href="#">jane.design/doctorcare</a>
      </p>
      <p>
        <a href="#">#novoprojeto</a> <a href="#">#nlw </a>{' '}
        <a href="#">#rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea placeholder="Deixe um comentário" />
      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  </article>
);
