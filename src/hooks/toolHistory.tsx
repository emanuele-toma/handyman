import { Tool } from '@/config';
import { useEffect, useState } from 'react';

type ToolHistoryEntry = Omit<Tool, 'icon'>;

const LIMIT = 10;

export function useToolHistory() {
  const [history, setHistory] = useState<ToolHistoryEntry[]>([]);

  useEffect(() => {
    const history = localStorage.getItem('handyman-tool-history');
    if (history) {
      setHistory(JSON.parse(history));
    }
  }, []);

  const addToHistory = (tool: Tool) => {
    setHistory(history => {
      const newHistory = history.filter(item => item.id !== tool.id);
      newHistory.unshift({ ...tool });

      const hasUpdated = JSON.stringify(newHistory) !== JSON.stringify(history);

      if (!hasUpdated) return history;

      localStorage.setItem('handyman-tool-history', JSON.stringify(newHistory.slice(0, LIMIT)));

      return newHistory.slice(0, LIMIT);
    });
  };

  return { history, addToHistory };
}
