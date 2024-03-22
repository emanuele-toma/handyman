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
    setHistory(history => {
      const newHistory = history.filter(item => item.id !== tool.id);
      newHistory.unshift({ ...tool });

      const hasUpdated = JSON.stringify(newHistory) !== JSON.stringify(history);

      return hasUpdated ? newHistory.slice(0, LIMIT) : history;
    });
  };

  return { history, addToHistory };
}
