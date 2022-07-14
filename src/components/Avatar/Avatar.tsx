import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  source: string;
  hasBorder?: boolean;
}

export const Avatar = ({ source, hasBorder = true, ...rest }: AvatarProps) => {
  return (
    <img
      {...rest}
      src={source}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
};
