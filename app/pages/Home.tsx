import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Text,
  Stack,
  Box,
  Group,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router'; // ✅ اصلاح شد

export default function Home() {
  const { user, login, logout } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);

    let timeoutId: ReturnType<typeof setTimeout>;
    if (user) {
      timeoutId = setTimeout(() => {
        logout();
      }, 10 * 60 * 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [user]);

  const handleLogin = () => {
    if (!email || !password) return;
    login({ email });
  };


  if (isLoggedIn) {
    return (
      <Box
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack align="center" gap={24}>
          <Title order={2}>Welcome</Title>
          <Text size="lg">You are logged in as {user?.email || 'Unknown'}</Text>
          <Text size="sm" color="dimmed">
            You will be automatically logged out in 10 minutes.
          </Text>
        </Stack>
      </Box>
    );
  }

  // فرم ورود
  return (
    <Box
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to right, #ffffff 50%, #e0f7fa 50%)',
      }}
    >
      <Paper
        shadow="xl"
        p="xl"
        radius="lg"
        withBorder
        style={{
          width: 400,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '10%',
        }}
      >
        <Stack gap="lg">
          <Group justify="center">
            <Title order={2} style={{ fontWeight: 'bold' }}>
              Sign In
            </Title>
          </Group>

          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button fullWidth onClick={handleLogin} color="blue">
            Continue
          </Button>

          <Group justify="center">
            <Text size="sm" color="dimmed">
              Don't have an account?{' '}
              <Text
                component={Link}
                to="/signup"
                span
                style={{ textDecoration: 'underline', color: '#1c7ed6', fontWeight: 500 }}
              >
                Sign up
              </Text>
            </Text>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
}
