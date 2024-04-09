'use client';

import { TOOLS } from '@/config';
import { B64FileEncoder, B64StringEncoder } from '@/features/base64';
import { ToolPageLayout } from '@/features/toolLayout';

export default function Base64Page() {
  return (
    <ToolPageLayout
      title='Base64'
      description='Encode or decode Base64 strings or files'
      tabs={['Encode and Decode', 'Files']}
      tool={TOOLS.base64}>
      <B64StringEncoder />
      <B64FileEncoder />
    </ToolPageLayout>
  );
}
