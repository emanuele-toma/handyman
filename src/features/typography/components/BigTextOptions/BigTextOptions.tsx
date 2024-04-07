'use client';

import {
  Code,
  ColorPicker,
  Flex,
  Group,
  NumberInput,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import { IBigTextOptions } from '../../types';
import { BigTextVisualizer } from '../BigTextVisualizer';

interface BigTextOptionsProps {
  onChange?: (options: IBigTextOptions) => void;
}

export function BigTextOptions({ onChange }: BigTextOptionsProps) {
  const defaultOptions: IBigTextOptions = useMemo(
    () => ({
      fontSize: 'auto',
      fontWeight: 800,
      fontColor: 'unset',
      letterSpacing: 0,
      backgroundColor: 'transparent',
    }),
    []
  );

  const [options, setOptions] = useState<IBigTextOptions>(defaultOptions);
  const [fontSize, setFontSize] = useState<string | number>(defaultOptions.fontSize);

  useEffect(() => {
    onChange?.(options);
  }, [options, onChange]);

  useEffect(() => {
    onChange?.(defaultOptions);
  }, [defaultOptions, onChange]);

  return (
    <Stack>
      <Text>
        Using this tool you can generate big text with custom font size, weight, and color. You can
        view the result in the <Code>Display</Code> tab.
      </Text>
      <Group grow>
        <TextInput
          min={1}
          label='Font size (px)'
          value={fontSize}
          onChange={e => {
            setFontSize(e.target.value);

            if (parseFloat(e.target.value) || e.target.value === 'auto')
              setOptions(current => ({
                ...current,
                fontSize: parseFloat(e.target.value) || 'auto',
              }));
          }}
          onBlur={e => {
            setOptions(current => ({
              ...current,
              fontSize: parseFloat(e.target.value) || 'auto',
            }));
            setFontSize(parseFloat(e.target.value) || 'auto');
          }}
        />
        <NumberInput
          min={100}
          max={900}
          label='Font weight'
          value={options.fontWeight}
          onChange={value =>
            setOptions(current => ({ ...current, fontWeight: parseFloat(value.toString()) }))
          }
        />
        <NumberInput
          label='Letter spacing (px)'
          value={options.letterSpacing}
          onChange={value =>
            setOptions(current => ({ ...current, letterSpacing: parseFloat(value.toString()) }))
          }
        />
      </Group>
      <Flex gap={16} direction={{ base: 'column', md: 'row' }}>
        <Stack gap={2} style={{ flex: 1 }}>
          <Text fz={14} fw={500}>
            Font color
          </Text>
          <ColorPicker
            size='xl'
            fullWidth
            format='hexa'
            value={options.fontColor}
            onChange={value => setOptions(current => ({ ...current, fontColor: value }))}
          />
        </Stack>
        <Stack gap={2} style={{ flex: 1 }}>
          <Text fz={14} fw={500}>
            Background color
          </Text>
          <ColorPicker
            size='xl'
            fullWidth
            format='hexa'
            value={options.backgroundColor}
            onChange={value => setOptions(current => ({ ...current, backgroundColor: value }))}
          />
        </Stack>
      </Flex>
      <Stack gap={2}>
        <Text fz={14} fw={500}>
          Preview
        </Text>
        <Paper withBorder bg={'transparent'} p={16}>
          <BigTextVisualizer options={options} />
        </Paper>
      </Stack>
    </Stack>
  );
}
