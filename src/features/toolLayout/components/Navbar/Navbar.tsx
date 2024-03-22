'use client';

import classes from './Navbar.module.css';

import { SPOTLIGHT_ITEMS, TOOLS_LINKS } from '@/config';
import {
  ActionIcon,
  Box,
  Code,
  Group,
  Kbd,
  ScrollArea,
  TextInput,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { Spotlight, openSpotlight } from '@mantine/spotlight';
import { IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavbarLinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { Logo } from './Logo';

export function Navbar() {
  const router = useRouter();
  const links = TOOLS_LINKS.map(item => <NavbarLinksGroup {...item} key={item.label} />);
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.header}>
          <Group justify='space-between'>
            <Link href={'/tools'}>
              <Logo style={{ width: rem(172) }} />
            </Link>
            <Code fw={700}>v1.0.0</Code>
          </Group>
        </div>

        <Group pt={'sm'} wrap='nowrap'>
          <Box
            onMouseDown={e => e.preventDefault()}
            onClick={e => {
              e.preventDefault();
              openSpotlight();
            }}>
            <TextInput
              placeholder='Search'
              leftSection={<IconSearch size={16} />}
              rightSection={<Kbd size='xs'>Ctrl+K</Kbd>}
              radius={8}
              styles={{
                section: {
                  width: 'auto',
                  paddingLeft: rem(8),
                  paddingRight: rem(8),
                },
              }}
            />
          </Box>
          <ActionIcon
            className={classes.darkColorSchemeIcon}
            variant='subtle'
            color='gray'
            p={4}
            radius={'sm'}
            onClick={() => toggleColorScheme()}>
            <IconSun />
          </ActionIcon>
          <ActionIcon
            className={classes.lightColorSchemeIcon}
            variant='subtle'
            color='gray'
            p={4}
            radius={'sm'}
            onClick={() => toggleColorScheme()}>
            <IconMoon />
          </ActionIcon>
        </Group>

        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
      </nav>
      <Spotlight
        actions={SPOTLIGHT_ITEMS.map(item => ({ ...item, onClick: () => router.push(item.link) }))}
        shortcut={['mod + K', 'mod + P', '/']}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search tools...',
        }}
        nothingFound='No tools found...'
        radius={8}
      />
    </>
  );
}
