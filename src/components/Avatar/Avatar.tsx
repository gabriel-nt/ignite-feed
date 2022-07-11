import styles from './Avatar.module.css';

interface AvatarProps {
  source: string;
  hasBorder?: boolean;
}

export const Avatar = ({ source, hasBorder = true }: AvatarProps) => {
  return (
    <img
      src={source}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
};
