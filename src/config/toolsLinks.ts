import { NavbarLinksGroup } from '@/features/toolLayout';
import { ComponentProps } from 'react';
import { TOOLS } from './tools';

type ToolsLinksType = (Partial<ComponentProps<typeof NavbarLinksGroup>> &
  Pick<ComponentProps<typeof NavbarLinksGroup>, 'icon' | 'label'>)[];

export const TOOLS_LINKS: ToolsLinksType = sortLinks(
  TOOLS.grouped().map(group => ({
    label: group.group.label,
    icon: group.group.icon,
    links: group.tools.map(tool => ({
      label: tool.label,
      link: tool.link,
    })),
  }))
);

function sortLinks(links: ToolsLinksType) {
  const sortedLinks = [...links];

  sortedLinks.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  sortedLinks.forEach(link => {
    if (Array.isArray(link.links)) {
      link.links.sort((a, b) => {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    }
  });

  return sortedLinks;
}
