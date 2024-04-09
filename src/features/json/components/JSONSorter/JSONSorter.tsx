'use client';

import { Group, Kbd, Loader, Select, Stack, Text } from '@mantine/core';
import { Editor } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { sortObject } from '../..';

export function JSONSorter() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<'key' | 'value'>('key');
  const [original, setOriginal] = useState<string | undefined>();
  const [sorted, setSorted] = useState<string>('Sorted JSON will be displayed here');

  useEffect(() => {
    if (!original) return setSorted('Sorted JSON will be displayed here');

    let parsed;

    try {
      parsed = JSON.parse(original);
    } catch (error) {
      if (error instanceof SyntaxError) setSorted('Invalid JSON: \n' + error.message);
      return;
    }

    const sorted = sortObject(parsed, sortOrder, sortBy);
    const sortedString = JSON.stringify(sorted, null, 2);
    setSorted(sortedString);
  }, [original, sortOrder, sortBy]);

  return (
    <Stack>
      <Text>
        Sort JSON object keys alphabetically. Use the first editor to input JSON object and the
        second editor to see the sorted result.
        <br />
        To change preferences press <Kbd>F1</Kbd> inside the editor.
      </Text>
      <Group grow>
        <Select
          label='Sort'
          data={[
            {
              label: 'Alphabetically Ascending (A-Z)',
              value: 'asc',
            },
            {
              label: 'Alphabetically Descending (Z-A)',
              value: 'desc',
            },
          ]}
          defaultValue={'asc'}
          checkIconPosition='right'
          value={sortOrder}
          onChange={value => {
            if (!value) return;
            setSortOrder(value as 'asc' | 'desc');
          }}
        />
        <Select
          label='By'
          data={[
            { label: 'Key', value: 'key' },
            { label: 'Value', value: 'value' },
          ]}
          defaultValue={'key'}
          checkIconPosition='right'
          value={sortBy}
          onChange={value => {
            if (!value) return;
            setSortBy(value as 'key' | 'value');
          }}
        />
      </Group>
      <Group grow>
        <Editor
          defaultLanguage='json'
          height={'55dvh'}
          theme='vs-dark'
          loading={<Loader />}
          options={{ tabSize: 2 }}
          onChange={value => {
            setOriginal(value);
          }}
        />
        <Editor
          defaultLanguage='json'
          height={'55dvh'}
          theme='vs-dark'
          options={{ readOnly: true, tabSize: 2 }}
          loading={<Loader />}
          value={sorted}
        />
      </Group>
    </Stack>
  );
}
