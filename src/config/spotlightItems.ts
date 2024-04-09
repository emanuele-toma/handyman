import { SpotlightActionData } from '@mantine/spotlight';
import { TOOLS } from './tools';

interface SpotlightItem extends Pick<SpotlightActionData, 'id' | 'label' | 'description'> {
  link: string;
}

export const SPOTLIGHT_ITEMS: SpotlightItem[] = TOOLS.values().map(tool => ({
  id: tool.id,
  label: tool.label,
  description: tool.description,
  link: tool.link,
}));
