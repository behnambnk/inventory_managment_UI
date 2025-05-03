import {
  TextInput,
  PasswordInput,
  Textarea,
  Title,
  Stack,
  Group,
  Button,
  Anchor,
  Image,
  FileInput,
  Box,
} from '@mantine/core';
import salyImg from '../asset/Saly1.png'; // مسیر دقیق به عکس

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
      <Box className="container">
        {/* تصویر سمت چپ */}
        <div className="left">
        <img src={salyImg} alt="Saly" style={{ maxWidth: '100%' }} />
        </div>

        {/* فرم محصول سمت راست */}
        <div className="right">
          <div className="nav">
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">About us</Anchor>
            <Anchor href="#">Contact us</Anchor>
          </div>

          <Title order={2} className="login-title">
            Submit a New Product
          </Title>

          <Stack gap="md">
            <TextInput
              placeholder="e.g. 1. Cut the panel"
              label="Item Name"
              classNames={{ input: 'input' }}
            />

            <Textarea
              placeholder="Enter a description about your step 1"
              label="Description - Optional"
              autosize
              minRows={2}
              classNames={{ input: 'input' }}
            />

            <TextInput
              placeholder="e.g. $49.99"
              label="Price"
              classNames={{ input: 'input' }}
            />

            <TextInput
              placeholder="e.g. 2"
              label="QTY"
              classNames={{ input: 'input' }}
            />

            <FileInput
              label="Image"
              placeholder="Click to browse or drag and drop your files"
              classNames={{ input: 'input' }}
            />

            <Button className="gradient-button">Submit</Button>
          </Stack>
        </div>
      </Box>
    );
  }

  // 🔐 فرم ورود وقتی وارد نشده
  return (
    <div className="container">
      {/* تصویر سمت چپ */}
      <div className="left">
      <img src={salyImg} alt="Saly" style={{ maxWidth: '100%' }} />
      </div>

      {/* فرم ورود سمت راست */}
      <div className="right">
        <div className="nav">
          <Anchor href="#">Home</Anchor>
          <Anchor href="#">About us</Anchor>
          <Anchor href="#">Contact us</Anchor>
        </div>

        <Title order={2} className="login-title">
          Login to your account
        </Title>

        <Stack gap="md">
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="md"
            classNames={{ input: 'input' }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="md"
            classNames={{ input: 'input' }}
          />

          <Anchor href="#" size="sm" className="forgot-link">
            Forgot password?
          </Anchor>

          <Button className="gradient-button" onClick={handleLogin}>
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
