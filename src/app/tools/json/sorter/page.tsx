'use client';

import { TOOLS } from '@/config';
import { JSONSorter } from '@/features/json';
import { ToolPageLayout } from '@/features/toolLayout';
import { useToolHistory } from '@/hooks';
import { useEffect } from 'react';

export default function Sorter() {
  const { addToHistory } = useToolHistory();

  useEffect(() => {
    addToHistory(TOOLS.json_sorter);
  }, [addToHistory]);

  return (
    <ToolPageLayout
      title='JSON Sorter'
      description='Sort JSON object keys alphabetically'
      tabs={['Sorter']}>
      <JSONSorter />
    </ToolPageLayout>
  );
}
