'use client';

import { TOOLS } from '@/config';
import { SHA1Encoder, SHA256Encoder, SHA512Encoder, SHAFileEncoder } from '@/features/sha';
import { ToolPageLayout } from '@/features/toolLayout';

export default function SHA() {
  return (
    <ToolPageLayout
      title='SHA'
      description='Encode strings or files to SHA strings'
      tabs={['SHA256', 'SHA512', 'SHA1', 'Files']}
      tool={TOOLS.sha}>
      <SHA256Encoder />
      <SHA512Encoder />
      <SHA1Encoder />
      <SHAFileEncoder />
    </ToolPageLayout>
  );
}
