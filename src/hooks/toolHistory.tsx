import { Tool } from '@/config';
import { useLocalStorage } from '@mantine/hooks';

type ToolHistoryEntry = Omit<Tool, 'icon'>;

const LIMIT = 10;

export function useToolHistory() {
  const [history, setHistory] = useLocalStorage<ToolHistoryEntry[]>({
    key: 'handyman-tool-history',
    defaultValue: [],
  });

  const addToHistory = (tool: Tool) => {
    const newHistory = history.filter(item => item.id !== tool.id);
    newHistory.unshift({ ...tool });

    const hasUpdated = JSON.stringify(newHistory) !== JSON.stringify(history);

    if (hasUpdated) setHistory(newHistory.slice(0, LIMIT));
  };

  return { history, addToHistory };
}
