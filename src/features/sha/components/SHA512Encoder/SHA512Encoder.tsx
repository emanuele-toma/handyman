'use client';

import { CopyTextarea } from '@/components';
import { Checkbox, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { shaEncode } from '../../utils';

export function SHA512Encoder() {
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
          .map(v => shaEncode('sha512', v))
          .join('\n')
      );
    setEncoded(shaEncode('sha512', decoded));
  }, [decoded, lineByLine]);

  return (
    <Stack>
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
                .map(v => shaEncode('sha512', v))
                .join('\n')
            );

          setEncoded(shaEncode('sha512', e.currentTarget.value));
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
