'use client';

import { GROUPS } from '@/config';
import { useToolHistory } from '@/hooks';
import { Group, Paper, Text, ThemeIcon, Title } from '@mantine/core';
import Link from 'next/link';
import { Fragment } from 'react';

export function RecentlyUsed() {
  const { history } = useToolHistory();

  if (history.length === 0) {
    return null;
  }

  return (
    <>
      <Title order={2} mt={16}>
        Recently used tools
      </Title>
      <Group>
        {history.map(tool => {
          const Icon = GROUPS.values().find(group => group.id === tool.group.id)?.icon || Fragment;

          return (
            <Link
              key={tool.id}
              href={tool.link}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <Paper withBorder>
                <Group w={160} h={80} justify='center' align='center' gap={6}>
                  <ThemeIcon variant='transparent' mb={2}>
                    <Icon />
                  </ThemeIcon>
                  <Text fw={500}>{tool.label}</Text>
                </Group>
              </Paper>
            </Link>
          );
        })}
      </Group>
    </>
  );
}
