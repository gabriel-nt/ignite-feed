import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} source="https://github.com/gabriel-nt.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel</strong>
              <time title="07 de julho de 2022" dateTime="2022-07-04 08:12:50">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deleter comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
