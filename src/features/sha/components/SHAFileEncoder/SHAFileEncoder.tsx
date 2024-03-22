import { CopyTextarea } from '@/components';
import { Group, Select, Stack, Text, ThemeIcon, rem } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconUpload } from '@tabler/icons-react';
import { useState } from 'react';
import { arrayBufferToSha } from '../../utils';

export function SHAFileEncoder() {
  const [algorithm, setAlgorithm] = useState<'sha1' | 'sha256' | 'sha512'>('sha256');
  const [encoded, setEncoded] = useState<string | undefined>();
  const [processing, setProcessing] = useState(false);

  return (
    <Stack>
      <Select
        data={[
          { value: 'sha1', label: 'SHA1' },
          { value: 'sha256', label: 'SHA256' },
          { value: 'sha512', label: 'SHA512' },
        ]}
        value={algorithm}
        onChange={value => setAlgorithm(value as 'sha1' | 'sha256' | 'sha512')}
        label='Algorithm'
      />
      <Dropzone
        loading={processing}
        maxFiles={1}
        maxSize={100 * 1024 * 1024}
        onDrop={async (files: FileWithPath[]) => {
          setProcessing(true);
          setEncoded(arrayBufferToSha(await files[0].arrayBuffer(), algorithm));
          setProcessing(false);
        }}
        onReject={r => {
          if (r.length > 1) {
            notifications.show({
              title: 'Too many files',
              message: 'You can convert one file at a time',
              color: 'red',
            });
            return;
          }

          notifications.show({
            title: 'File is too large',
            message: 'Maximum file size is 100mb',
            color: 'red',
          });
        }}
        radius={8}>
        <Group justify='center' mih={160} gap={32}>
          <ThemeIcon variant='transparent' color='dimmed' size={48}>
            <IconUpload style={{ width: rem(48), height: rem(48) }} />
          </ThemeIcon>
          <Stack gap={0}>
            <Text size='xl'>
              Drag any file here or click to select and encode it to {algorithm}
            </Text>
            <Text size='sm' c='dimmed'>
              You can convert one file at a time (up to 100mb in size)
            </Text>
          </Stack>
        </Group>
      </Dropzone>
      <CopyTextarea
        label='Encoded value'
        rows={8}
        copyValue={encoded || ''}
        value={encoded}
        readOnly
      />
    </Stack>
  );
}
