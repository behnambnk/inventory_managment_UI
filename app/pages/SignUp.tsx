import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Stack,
  Box,
  Group,
} from '@mantine/core';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) return;
    login({ email });
    navigate('/');
  };

  return (
    <Box
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
    >
      {/* سمت چپ سفید */}
      <Box
        style={{
          width: '50%',
          backgroundColor: '#fff',
        }}
      />

      {/* سمت راست رنگی با فرم در مرکز */}
      <Box
        style={{
          width: '50%',
          backgroundColor: '#e0f7fa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper shadow="xl" p="xl" radius="lg" withBorder style={{ width: 400 }}>
          <Stack gap="lg">
            <Group justify="center">
              <Title order={2} style={{ fontWeight: 'bold', fontSize: '28px' }}>
                Sign Up
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

            <Button fullWidth onClick={handleSubmit} color="blue">
              Continue
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
