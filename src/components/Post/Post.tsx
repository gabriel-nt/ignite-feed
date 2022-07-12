import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';
import { FormEvent, useState } from 'react';

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: Array<{
    content: string;
    type: 'link' | 'paragraph' | string;
  }>;
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState(['Post muito legal']);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL à's' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar source={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => (
          <>
            {line.type === 'link' ? (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            ) : (
              <p key={line.content}>{line.content}</p>
            )}
          </>
        ))}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={e => setNewCommentText(e.target.value)}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment comment={comment} key={comment} />
        ))}
      </div>
    </article>
  );
};
