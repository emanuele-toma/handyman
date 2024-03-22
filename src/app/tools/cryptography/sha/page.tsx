'use client';

import { TOOLS } from '@/config';
import { SHA1Encoder, SHA256Encoder, SHA512Encoder, SHAFileEncoder } from '@/features/sha';
import { ToolPageLayout } from '@/features/toolLayout';
import { useToolHistory } from '@/hooks';
import { useEffect } from 'react';

export default function SHA() {
  const { addToHistory } = useToolHistory();

  useEffect(() => {
    addToHistory(TOOLS.sha);
  }, [addToHistory]);

  return (
    <ToolPageLayout
      title='SHA'
      description='Encode strings or files to SHA strings'
      tabs={['SHA256', 'SHA512', 'SHA1', 'Files']}>
      <SHA256Encoder />
      <SHA512Encoder />
      <SHA1Encoder />
      <SHAFileEncoder />
    </ToolPageLayout>
  );
}
