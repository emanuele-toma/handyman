'use client';

import { TOOLS } from '@/config';
import { B64FileEncoder, B64StringEncoder } from '@/features/base64';
import { ToolPageLayout } from '@/features/toolLayout';
import { useToolHistory } from '@/hooks';
import { useEffect } from 'react';

export default function Base64Page() {
  const { addToHistory } = useToolHistory();

  useEffect(() => {
    addToHistory(TOOLS.base64);
  }, [addToHistory]);

  return (
    <ToolPageLayout
      title='Base64'
      description='Encode or decode Base64 strings or files'
      tabs={['Encode and Decode', 'Files']}>
      <B64StringEncoder />
      <B64FileEncoder />
    </ToolPageLayout>
  );
}
