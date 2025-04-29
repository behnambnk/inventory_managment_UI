import { useState } from 'react';
import { TextInput, PasswordInput, Button, Paper, Title } from '@mantine/core';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email) return;
    login({ email });
    navigate("/");
  };

  return (
    <Paper shadow="md" p="xl" radius="md" withBorder style={{ maxWidth: 400, margin: '50px auto' }}>
      <Title style={{ textAlign: 'center', marginBottom: 'lg' }}>Sign In</Title>
      <TextInput label="Email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required mb="md" />
      <PasswordInput label="Password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} required mb="lg" />
      <Button fullWidth onClick={handleSubmit}>Sign In</Button>
    </Paper>
  );
}
