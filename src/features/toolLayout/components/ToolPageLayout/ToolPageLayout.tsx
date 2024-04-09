'use client';

import { Tool } from '@/config';
import { useToolHistory } from '@/hooks';
import { Box, Stack, Tabs, Text, Title } from '@mantine/core';
import { Children as ReactChildren, useEffect } from 'react';
import classes from './ToolPageLayout.module.css';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  tabs: string[];
  defaultTab?: string;
  children: React.ReactNode | React.ReactNode[];
  tool: Tool;
}

export function ToolPageLayout({
  title,
  description,
  tabs,
  defaultTab,
  children,
  tool,
}: ToolPageLayoutProps) {
  const Children = ReactChildren.toArray(children);

  const { addToHistory } = useToolHistory();

  useEffect(() => {
    addToHistory(tool);
  }, [tool, addToHistory]);

  return (
    <>
      <Box py={32} className={`${classes.container} ${classes.colorSchemeBackground}`}>
        <Stack gap={8}>
          <Title>{title}</Title>
          <Text fw={500} c={'dimmed'}>
            {description}
          </Text>
        </Stack>
      </Box>
      <Tabs
        variant='outline'
        defaultValue={defaultTab || tabs[0]}
        classNames={{
          list: `${classes.container} ${classes.colorSchemeBackground}`,
          tab: classes.activeTab,
        }}
        styles={{
          tabLabel: {
            fontWeight: 500,
          },
        }}>
        <Tabs.List>
          {tabs.map(tab => (
            <Tabs.Tab key={tab} value={tab}>
              {tab}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {Children.map((child, index) => (
          <Tabs.Panel
            key={tabs[index] + index}
            value={tabs[index]}
            className={classes.container}
            py={32}>
            {child}
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}
