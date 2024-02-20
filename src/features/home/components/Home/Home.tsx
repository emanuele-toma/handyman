'use client';

import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Home.module.css';

export function Home() {
  return (
    <Container size='md'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> privacy focused web toolkit
          </Title>
          <Text c='dimmed' mt='md'>
            Toolbox is designed to streamline your workflow and enhance your productivity. It
            includes a variety of tools tailored to meet the diverse needs of developers.
          </Text>

          <List
            mt={30}
            spacing='sm'
            size='sm'
            icon={
              <ThemeIcon size={20} radius='xl'>
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }>
            <List.Item>
              <b>Browser based</b> – All tools are built to run directly in your browser, ensuring
              maximum privacy and convenience. Your data stays with you.
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – Toolbox is completely free and does not require
              registration. You can use it in any project. All tools are open source under the GNU
              AGPL V3 license.
            </List.Item>
            <List.Item>
              <b>Modern design</b> – With its modern and pleasing look, Toolbox is not just
              functional, but also a joy to use.
            </List.Item>
          </List>

          <Group mt={30}>
            <Link href='/tools'>
              <Button radius='xl' size='md' className={classes.control}>
                Tools
              </Button>
            </Link>
            <Link
              href='https://github.com/emanuele-toma/toolbox'
              target='_blank'
              rel='noopener noreferrer'>
              <Button variant='default' radius='xl' size='md' className={classes.control}>
                Source code
              </Button>
            </Link>
          </Group>
        </div>
        <Image src='/static/images/HomeImage.svg' alt='' className={classes.image} />
      </div>
    </Container>
  );
}
