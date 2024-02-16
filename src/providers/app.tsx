import { MantineProvider } from '@mantine/core';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};
