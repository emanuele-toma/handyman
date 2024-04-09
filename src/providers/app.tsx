import { handymanTheme } from '@/styles';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider theme={handymanTheme} defaultColorScheme='auto'>
      <Notifications />
      {children}
    </MantineProvider>
  );
};
