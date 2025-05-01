import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Title,
  Box,
  Stack,
} from '@mantine/core';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import '../app.css'; // استایل فانتزی

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
    <Box className="login-container">
      <div className="login-card">
        <div className="login-title">Sign Up</div>

        <Stack gap="md">
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            label=""
            withAsterisk={false}
          />

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            label=""
            withAsterisk={false}
          />

          <button className="gradient-button" onClick={handleSubmit}>
            Continue
          </button>
        </Stack>
      </div>
    </Box>
  );
}
