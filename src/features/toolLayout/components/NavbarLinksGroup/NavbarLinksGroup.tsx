'use client';

import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronRight, TablerIconsProps } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export function NavbarLinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const theme = useMantineTheme();
  const pathname = usePathname();

  const isActive = !!link && pathname.startsWith(link);
  const isAnyChildActive = links?.some(link => pathname.startsWith(link.link));

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || isActive || isAnyChildActive || false);

  const items = (hasLinks ? links : []).map(link => {
    const isChildActive = pathname === link.link;

    return (
      <Link href={link.link} key={link.label} style={{ textDecoration: 'unset' }}>
        <Text
          className={classes.link}
          fw={isChildActive ? 600 : undefined}
          bg={isChildActive ? `${theme.colors.primary[6]}1F` : undefined}>
          {link.label}
        </Text>
      </Link>
    );
  });

  const LinkWrapper = ({ children }: { children: React.ReactNode }) =>
    link ? (
      <Link href={link} style={{ textDecoration: 'unset' }}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <LinkWrapper>
      <UnstyledButton onClick={() => setOpened(o => !o)} className={classes.control}>
        <Group justify='space-between' gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </LinkWrapper>
  );
}
