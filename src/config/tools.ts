import { IconAbc, IconJson, IconShieldLock, TablerIconsProps } from '@tabler/icons-react';

export interface ToolGroup {
  id: string;
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}

export interface Tool {
  id: string;
  link: string;
  label: string;
  description: string;
  group: ToolGroup;
}

export const GROUPS = {
  cryptography: <ToolGroup>{
    id: 'cryptography',
    label: 'Cryptography',
    icon: IconShieldLock,
  },
  json: <ToolGroup>{
    id: 'json',
    label: 'JSON',
    icon: IconJson,
  },
  typography: <ToolGroup>{
    id: 'typography',
    label: 'Typography',
    icon: IconAbc,
  },
  values: (): ToolGroup[] => {
    return Object.values(GROUPS).filter(v => typeof v !== 'function') as ToolGroup[];
  },
} as const;

export const TOOLS = {
  base64: <Tool>{
    id: 'base64',
    link: '/tools/cryptography/base64',
    label: 'Base64',
    description: 'Encode and decode string or files using Base64',
    group: GROUPS.cryptography,
  },
  sha: <Tool>{
    id: 'sha',
    link: '/tools/cryptography/sha',
    label: 'SHA',
    description: 'Calculate SHA hash of a string or file',
    group: GROUPS.cryptography,
  },
  json_sorter: <Tool>{
    id: 'json_sorter',
    link: '/tools/json/sorter',
    label: 'JSON Sorter',
    description: 'Sort JSON object keys alphabetically',
    group: GROUPS.json,
  },
  big_text: <Tool>{
    id: 'big_text',
    link: '/tools/typography/bigtext',
    label: 'Big Text',
    description: 'Display text in large font size',
    group: GROUPS.typography,
  },
  values: (): Tool[] => {
    return Object.values(TOOLS).filter(v => typeof v !== 'function') as Tool[];
  },
  grouped: (): {
    group: ToolGroup;
    tools: Tool[];
  }[] => {
    return GROUPS.values().map(group => ({
      group,
      tools: TOOLS.values().filter(tool => tool.group.id === group.id),
    }));
  },
} as const;
