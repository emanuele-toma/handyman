'use client';

import { TOOLS } from '@/config';
import { ToolPageLayout } from '@/features/toolLayout';
import { BigTextOptions, BigTextVisualizer, IBigTextOptions } from '@/features/typography';
import { useToolHistory } from '@/hooks';
import { useCallback, useEffect, useState } from 'react';

export default function Sorter() {
  const { addToHistory } = useToolHistory();

  useEffect(() => {
    addToHistory(TOOLS.big_text);
  }, [addToHistory]);

  const [options, setOptions] = useState<IBigTextOptions>();

  const onChange = useCallback((opt: IBigTextOptions) => {
    setOptions(opt);
  }, []);

  return (
    <ToolPageLayout
      title='Big Text'
      description='Display text in large font size'
      tabs={['Options', 'Display']}>
      <BigTextOptions onChange={onChange} />
      <BigTextVisualizer options={options} />
    </ToolPageLayout>
  );
}
