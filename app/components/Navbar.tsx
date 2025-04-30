import { Button, Group, Paper, Container, rem, Center, Stack } from '@mantine/core';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <Paper
      shadow="sm"
      p="md"
      withBorder
      style={{
        backgroundColor: '#f0f8ff',
        borderBottom: '2px solid #e0e0e0',
        marginBottom: rem(24),
      }}
    >
      <Container size="md">
        <Center>
          <Group gap="xl">
            <Button
              component={Link}
              to="/"
              variant="light"
              size="lg" // بزرگ‌تر از md
              radius="md"
              style={{
                fontSize: rem(50), // حدود ۲۰٪ بزرگ‌تر از 16
                fontWeight: 600,
                padding: `${rem(20)} ${rem(24)}`, // فضای داخلی بیشتر
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/signin"
              variant="light"
              size="lg"
              radius="md"
              style={{
                fontSize: rem(20),
                fontWeight: 600,
                padding: `${rem(10)} ${rem(24)}`,
              }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="light"
              size="lg"
              radius="md"
              style={{
                fontSize: rem(60),
                fontWeight: 600,
                padding: `${rem(10)} ${rem(24)}`,
              }}
            >
              Sign Up
            </Button>
          </Group>
        </Center>
      </Container>
    </Paper>
  );
}
