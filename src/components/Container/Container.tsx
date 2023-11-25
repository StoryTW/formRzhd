import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.scss'
import clsx from 'clsx';

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
