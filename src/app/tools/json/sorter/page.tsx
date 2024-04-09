'use client';

import { TOOLS } from '@/config';
import { JSONSorter } from '@/features/json';
import { ToolPageLayout } from '@/features/toolLayout';

export default function Sorter() {
  return (
    <ToolPageLayout
      title='JSON Sorter'
      description='Sort JSON object keys alphabetically'
      tabs={['Sorter']}
      tool={TOOLS.json_sorter}>
      <JSONSorter />
    </ToolPageLayout>
  );
}
