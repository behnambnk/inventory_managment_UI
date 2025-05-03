import {
  TextInput,
  PasswordInput,
  Title,
  Stack,
  Group,
  Button,
  Anchor,
  Box,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import '../app.css';

export default function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || !password) return;
    await login({ email }); 
    setPassword('');
    navigate('/');
  };

  return (
    <div className="container">
   
      <div className="left">
        <img src="/rocket.png" alt="Rocket" />
      </div>


      <div className="right">
        <div className="nav">
          <Anchor href="#">Home</Anchor>
          <Anchor href="#">About us</Anchor>
          <Anchor href="#">Contact us</Anchor>
          <Anchor href="#">Post a project</Anchor>
        </div>

        <Title order={2} className="login-title">
          Create your account
        </Title>
   

        <Stack gap="md">
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="md"
            classNames={{ input: 'input' }}
            styles={{ input: { height: '48px', borderRadius: 8} }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="md"
            classNames={{ input: 'input' }}
            styles={{ input: { height: '48px', borderRadius: 8 } }}
          />

          <Button
            fullWidth
            size="md"
            className="gradient-button"
            onClick={handleSubmit}
          >
            Continue
          </Button>

          <Box className="link-text">
  Already have an account?{' '}
  <Anchor component={Link} to="/">Log in</Anchor>
</Box>
        </Stack>
      </div>
    </div>
  );
}
