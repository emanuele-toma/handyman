import Link from 'next/link';
import { ComponentProps } from 'react';
import classes from './StyledLink.module.css';

type StyledLinkProps = ComponentProps<typeof Link>;

export function StyledLink({ ...props }: StyledLinkProps) {
  return <Link {...props} className={`${props.className} ${classes.link}`} />;
}
