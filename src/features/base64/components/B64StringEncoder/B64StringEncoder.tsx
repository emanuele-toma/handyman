import { CopyTextarea } from '@/components';
import { Checkbox, Code, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { b64decode, b64encode } from '../../utils';

export function B64StringEncoder() {
  const [encoded, setEncoded] = useState<string | undefined>('');
  const [decoded, setDecoded] = useState<string | undefined>('');
  const [lineByLine, setLineByLine] = useState(false);

  useEffect(() => {
    if (decoded === undefined) return;
    if (lineByLine) return setEncoded(decoded?.split('\n').map(b64encode).join('\n'));
    setEncoded(b64encode(decoded));
  }, [decoded, lineByLine]);

  useEffect(() => {
    if (encoded === undefined) return;
    if (lineByLine) return setDecoded(encoded?.split('\n').map(b64decode).join('\n'));
    setDecoded(b64decode(encoded));
  }, [encoded, lineByLine]);

  return (
    <Stack>
      <Text>
        To encode or decode a string, paste it into the appropriate field and the other field will
        update automatically. Note that the encoded value is <b>not encrypted</b>, it is just a way
        to represent binary data in an ASCII string format. This means that anyone can decode it, so{' '}
        <b>don&apos;t use it for sensitive data</b>. If you need to encrypt data, use a proper
        encryption algorithm. If you need to encode or decode a file, use the <Code>Files</Code>{' '}
        tab.
      </Text>
      <CopyTextarea
        rows={8}
        label='Value to encode'
        error={encoded === undefined ? 'Value cannot be encoded' : undefined}
        value={decoded}
        copyValue={decoded || ''}
        onChange={e => {
          setDecoded(e.currentTarget.value);

          if (lineByLine)
            return setEncoded(e.currentTarget.value.split('\n').map(b64encode).join('\n'));

          setEncoded(b64encode(e.currentTarget.value));
        }}
      />
      <Checkbox
        checked={lineByLine}
        label='Encode line by line'
        onChange={() => setLineByLine(p => !p)}
      />
      <CopyTextarea
        rows={8}
        label='Value to decode'
        error={decoded === undefined ? 'Value cannot be decoded' : undefined}
        value={encoded}
        copyValue={encoded || ''}
        onChange={e => {
          setEncoded(e.currentTarget.value);

          if (lineByLine)
            return setDecoded(e.currentTarget.value.split('\n').map(b64decode).join('\n'));

          setDecoded(b64decode(e.currentTarget.value));
        }}
        spellCheck={false}
      />
      <Checkbox
        checked={lineByLine}
        label='Decode line by line'
        onChange={() => setLineByLine(p => !p)}
      />
    </Stack>
  );
}
