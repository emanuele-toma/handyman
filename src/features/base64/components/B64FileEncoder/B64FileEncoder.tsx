import { CopyTextarea } from '@/components';
import { downloadFile } from '@/utils';
import { Autocomplete, Button, Code, Group, Stack, Text, ThemeIcon, rem } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { arrayBufferToBase64, base64ToArrayBuffer } from '../../utils';

export function B64FileEncoder() {
  const [processing, setProcessing] = useState(false);
  const [encoded, setEncoded] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [extension, setExtension] = useState<string>('txt');

  useEffect(() => {
    setError(null);
  }, [encoded]);

  return (
    <Stack>
      <Text>
        To encode a file, drag it into the dropzone or click. The file will be encoded to base64 and
        you will be able to download it. To decode a file, paste the base64 string into the field
        below and click <Code>Decode and download file</Code>. Note that the encoded value is{' '}
        <b>not encrypted</b>, to encrypt data use a proper encryption algorithm.
      </Text>
      <Dropzone
        loading={processing}
        maxFiles={1}
        maxSize={10 * 1024 * 1024}
        onDrop={async (files: FileWithPath[]) => {
          setProcessing(true);
          setEncoded(arrayBufferToBase64(await files[0].arrayBuffer()));
          setExtension(files[0].name.split('.').pop() || 'txt');
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
            message: 'Maximum file size is 10mb',
            color: 'red',
          });
        }}
        radius={8}>
        <Group justify='center' mih={160} gap={32}>
          <ThemeIcon variant='transparent' color='dimmed' size={48}>
            <IconUpload style={{ width: rem(48), height: rem(48) }} />
          </ThemeIcon>
          <Stack gap={0}>
            <Text size='xl'>Drag any file here or click to select and encode it to base64</Text>
            <Text size='sm' c='dimmed'>
              You can convert one file at a time (up to 10mb in size)
            </Text>
          </Stack>
        </Group>
      </Dropzone>
      <CopyTextarea
        copyValue={encoded || ''}
        rows={8}
        label='Value to decode'
        error={error}
        value={encoded || ''}
        onChange={e => setEncoded(e.target.value)}
        spellCheck={false}
      />
      <Group justify='end'>
        <Button
          variant='light'
          leftSection={<IconDownload />}
          disabled={!encoded}
          onClick={() => {
            if (!encoded) return;

            const buffer = base64ToArrayBuffer(encoded);

            if (!buffer) return setError('Invalid base64 string');

            downloadFile(buffer, `file.${extension}`, 'application/octet-stream');
          }}>
          Decode and download file
        </Button>
        <Autocomplete
          w={80}
          disabled={!encoded}
          placeholder={'txt'}
          value={extension}
          onChange={setExtension}
          data={[
            'txt',
            'pdf',
            'doc',
            'docx',
            'xls',
            'xlsx',
            'ppt',
            'pptx',
            'jpg',
            'jpeg',
            'png',
            'gif',
          ]}
        />
      </Group>
    </Stack>
  );
}
