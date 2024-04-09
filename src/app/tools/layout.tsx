import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';

import { MainLayout } from '@/features/toolLayout';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
