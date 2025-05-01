import {
  TextInput,
  PasswordInput,
  Title,
  Box,
  Stack,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router';
import '../app.css'; // ✅ ایمپورت استایل

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
      <Box className="login-container" style={{ background: '#fff' }}>
        <Stack align="center" gap={24}>
          <Title order={2}>Welcome</Title>
          <p>You are logged in as {user?.email || 'Unknown'}</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
            You will be automatically logged out in 10 minutes.
          </p>
        </Stack>
      </Box>
    );
  }

  return (
    <Box className="login-container">
      <div className="login-card">
        <div className="login-title">Sign In</div>

        <Stack gap="md">
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            label=""
            withAsterisk={false}
            styles={{ input: { fontWeight: 'bold' } }}
          />

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            label=""
            withAsterisk={false}
            styles={{ input: { fontWeight: 'bold' } }}
          />

          <button className="gradient-button" onClick={handleLogin}>
            Continue
          </button>

          <div className="link-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </Stack>
      </div>
    </Box>
  );
}
