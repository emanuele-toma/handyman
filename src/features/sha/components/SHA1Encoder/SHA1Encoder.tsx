'use client';

import { CopyTextarea } from '@/components';
import { Blockquote, Checkbox, Stack } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { sha1encode } from '../../utils';

export function SHA1Encoder() {
  const [decoded, setDecoded] = useState<string | undefined>('');
  const [encoded, setEncoded] = useState<string | undefined>('');
  const [lineByLine, setLineByLine] = useState(false);

  useEffect(() => {
    if (decoded === undefined || decoded === '') return;
    if (lineByLine)
      return setEncoded(
        decoded
          ?.split('\n')
          .filter(v => v !== '')
          .map(sha1encode)
          .join('\n')
      );
    setEncoded(sha1encode(decoded));
  }, [decoded, lineByLine]);

  return (
    <Stack>
      <Blockquote p={16} color='orange' icon={<IconAlertTriangle />} iconSize={32} my={8}>
        SHA1 is considered to be <b>insecure</b> and should not be used for security purposes. Use
        SHA256 or SHA512 instead.
      </Blockquote>
      <CopyTextarea
        rows={8}
        label='Value to encode'
        error={encoded === undefined ? 'Value cannot be encoded' : undefined}
        copyValue={decoded || ''}
        value={decoded}
        onChange={e => {
          setDecoded(e.currentTarget.value);

          if (e.currentTarget.value === '') return setEncoded('');

          if (lineByLine)
            return setEncoded(
              e.currentTarget.value
                .split('\n')
                .filter(v => v !== '')
                .map(sha1encode)
                .join('\n')
            );

          setEncoded(sha1encode(e.currentTarget.value));
        }}
      />
      <Checkbox
        checked={lineByLine}
        label='Encode line by line'
        onChange={() => setLineByLine(p => !p)}
      />
      <CopyTextarea
        rows={8}
        label='Encoded value'
        copyValue={encoded || ''}
        value={encoded}
        readOnly
      />
    </Stack>
  );
}
