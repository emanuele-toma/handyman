'use client';

import { Box, Button, Center, Group, Overlay, Stack, Text, TextInput, rem } from '@mantine/core';
import { useElementSize, useFullscreen, useWindowScroll } from '@mantine/hooks';
import { IconArrowsMaximize } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { IBigTextOptions } from '../../types';

interface BigTextVisualizerProps {
  options?: IBigTextOptions;
}

export function BigTextVisualizer({ options }: BigTextVisualizerProps) {
  const { ref: containerRef, width: containerWidth } = useElementSize();
  const { ref: textRef, width: textWidth } = useElementSize();
  const { toggle: toggleFullscreen, fullscreen } = useFullscreen();
  const [, scrollTo] = useWindowScroll();

  const [fontSize, setFontSize] = useState<number>(14);
  const [value, setValue] = useState<string>('PREVIEW');

  useEffect(() => {
    if (options?.fontSize && options?.fontSize !== 'auto') {
      setFontSize(options?.fontSize);
      return;
    }

    const currentFontSize = parseInt(getComputedStyle(textRef.current).fontSize);
    const computedFontSize = Math.round((currentFontSize * containerWidth) / textWidth);

    if (computedFontSize) setFontSize(computedFontSize);
  }, [containerWidth, options?.fontSize, textRef, textWidth, value, fullscreen]);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = 'hidden';
      scrollTo({ y: 0 });
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [fullscreen, scrollTo]);

  return (
    <Stack>
      {fullscreen && (
        <Overlay
          opacity={1}
          bg={options?.backgroundColor === 'transparent' ? 'dark' : options?.backgroundColor}>
          <Box
            ref={containerRef}
            w={'100%'}
            h={'100%'}
            bg={options?.backgroundColor}
            onClick={() => toggleFullscreen()}>
            <Center h={'100dvh'}>
              <Text
                ref={textRef}
                ta={'center'}
                fz={fontSize}
                fw={options?.fontWeight}
                c={options?.fontColor}
                style={{
                  letterSpacing: rem(options?.letterSpacing),
                  whiteSpace: 'nowrap',
                }}
                spellCheck='false'>
                {value}
              </Text>
            </Center>
          </Box>
        </Overlay>
      )}
      <TextInput
        label='Text'
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder='Type here'
      />
      <Group>
        <Button leftSection={<IconArrowsMaximize size={20} />} onClick={() => toggleFullscreen()}>
          Go fullscreen
        </Button>
      </Group>
      <Box
        ref={fullscreen ? undefined : containerRef}
        w={'100%'}
        h={'100%'}
        bg={options?.backgroundColor}>
        <Center h={'100%'}>
          <Text
            ref={fullscreen ? undefined : textRef}
            ta={'center'}
            fz={fontSize}
            fw={options?.fontWeight}
            c={options?.fontColor}
            style={{
              letterSpacing: rem(options?.letterSpacing),
              whiteSpace: 'nowrap',
            }}
            spellCheck='false'>
            {value}
          </Text>
        </Center>
      </Box>
    </Stack>
  );
}
