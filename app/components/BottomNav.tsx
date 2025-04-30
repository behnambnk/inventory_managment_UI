import { Paper, Group, Button, rem } from '@mantine/core';
import { Link } from 'react-router';

export default function BottomNav() {
  return (
    <Paper
      shadow="lg"
      p="sm"
      withBorder
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #ddd',
        zIndex: 100,
      }}
    >
      <Group justify="center" gap="xl">
        <Button
          component={Link}
          to="/"
          variant="subtle"
          size="sm"
          style={{ fontSize: rem(14) }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/signin"
          variant="subtle"
          size="sm"
          style={{ fontSize: rem(14) }}
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="subtle"
          size="sm"
          style={{ fontSize: rem(14) }}
        >
          Sign Up
        </Button>
      </Group>
    </Paper>
  );
}
