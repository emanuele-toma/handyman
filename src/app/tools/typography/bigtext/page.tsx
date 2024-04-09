'use client';

import { TOOLS } from '@/config';
import { ToolPageLayout } from '@/features/toolLayout';
import { BigTextOptions, BigTextVisualizer, IBigTextOptions } from '@/features/typography';
import { useCallback, useState } from 'react';

export default function BigText() {
  const [options, setOptions] = useState<IBigTextOptions>();

  const onChange = useCallback((opt: IBigTextOptions) => {
    setOptions(opt);
  }, []);

  return (
    <ToolPageLayout
      title='Big Text'
      description='Display text in large font size'
      tabs={['Options', 'Display']}
      tool={TOOLS.big_text}>
      <BigTextOptions onChange={onChange} />
      <BigTextVisualizer options={options} />
    </ToolPageLayout>
  );
}
