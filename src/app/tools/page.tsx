import { StyledLink } from '@/components/StyledLink/StyledLink';
import { RecentlyUsed } from '@/features/misc';
import { Stack, Text, Title } from '@mantine/core';
import classes from './page.module.css';

export default function Home() {
  return (
    <Stack className={classes.container} py={32}>
      <Title order={1}>About Handyman</Title>
      <Text>
        Handyman is a modern toolkit for the web, designed with your privacy in mind. It&apos;s all
        about making your work easier and faster. With Handyman, you get a bunch of tools that are
        made just for developers like you.
      </Text>
      <Text>
        Every tool in Handyman is made to fit your needs. Whether you&apos;re a beginner just
        starting out or a seasoned pro, there&apos;s something here for you. And because it&apos;s
        made to be simple and easy to use, you&apos;ll be up and running in no time.
      </Text>
      <Title order={2} mt={16}>
        Contribution
      </Title>
      <Text>
        We actively encourage community contributions. Whether it involves bug fixes, documentation
        enhancements, or feature additions, your input is invaluable. Please refer to our{' '}
        <StyledLink
          href='https://github.com/emanuele-toma/handyman'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub repository
        </StyledLink>{' '}
        for detailed contribution guidelines.
      </Text>

      <Title order={2} mt={16}>
        License
      </Title>
      <Text>
        Handyman is an open-source project licensed under the{' '}
        <StyledLink
          href='https://www.gnu.org/licenses/agpl-3.0.html'
          target='_blank'
          rel='noopener noreferrer'>
          GNU AGPL V3
        </StyledLink>{' '}
        license. This means that you can use it for free, and you can even modify it to suit your
        needs. However, you must share your changes with others. Please refer to the license for
        more details.
      </Text>
      <RecentlyUsed />
    </Stack>
  );
}
