import {
  ActionIcon,
  CopyButton,
  ElementProps,
  Group,
  Textarea,
  TextareaProps,
} from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

interface CopyTextareaProps extends TextareaProps, ElementProps<'input', keyof TextareaProps> {
  copyValue: string;
}

export function CopyTextarea({ copyValue, ...props }: CopyTextareaProps) {
  return (
    <Textarea
      {...props}
      rightSection={
        <Group h={'100%'} align='start'>
          <CopyButton value={copyValue}>
            {({ copied, copy }) => (
              <ActionIcon onClick={copy} variant='transparent' color='dimmed' size={24} m={8}>
                {copied ? <IconCheck /> : <IconCopy />}
              </ActionIcon>
            )}
          </CopyButton>
        </Group>
      }
      spellCheck={false}
    />
  );
}
