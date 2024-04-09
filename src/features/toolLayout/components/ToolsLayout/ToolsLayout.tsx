'use client';

import { AppShell, Box, BoxProps, ElementProps } from '@mantine/core';
import { Navbar } from '..';

interface MainLayoutProps extends BoxProps, ElementProps<'div', keyof BoxProps> {
  children: React.ReactNode;
}

export function MainLayout({ children, ...props }: MainLayoutProps) {
  return (
    <AppShell navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true } }}>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Box {...props}>{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
}
