import {
  TextInput,
  PasswordInput,
  Title,
  Stack,
  Group,
  Button,
  Anchor,
  Image,
  Box,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router';
import '../app.css';

export default function Home() {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);

    let timeoutId: NodeJS.Timeout | undefined;
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
          <p style={{ fontSize: '1.1rem' }}>
            You are logged in as <strong>{user?.email || 'Unknown'}</strong>
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.6 }}>
            You will be automatically logged out in 10 minutes.
          </p>
        </Stack>
      </Box>
    );
  }

  return (
    <div className="container">
   
      <div className="left">

      </div>

    
      <div className="right">
  
        <div className="nav">
          <Anchor href="#">Home</Anchor>
          <Anchor href="#">About us</Anchor>
          <Anchor href="#">Contact us</Anchor>
          <Anchor href="#">Post a project</Anchor>
        </div>

        
        <Title order={2} className="login-title">
  Login to your account
</Title>


        

        <Stack gap={0}>
  <TextInput
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    size="md"
    classNames={{ input: 'input' }}
    styles={{
      input: {
        height: '48px',
        borderRadius: 8,
      },
    }}
  />

  <TextInput
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    size="md"
    mt={100} 
    classNames={{ input: 'input' }}
    styles={{
      input: {
        height: '48px',
        borderRadius: 8,
      },
    }}
  />
<Group justify="space-between" style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>
<Anchor href="#" size="sm" className="forgot-link">
  Forgot password?

  </Anchor>
</Group>


          <Button
            fullWidth
            size="md"
            mt="sm"
            className="gradient-button"
            onClick={handleLogin}
          >
            Log in with Email
          </Button>

          <Box className="link-text">
            Don’t have an account?{' '}
            <Anchor component={Link} to="/signup">
              Join free today
            </Anchor>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
