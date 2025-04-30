import {
  Button,
  Paper,
  Title,
  Text,
  Stack,
  Container,
  Center,
  Box,
} from '@mantine/core';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/navbar';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <Box
        style={{
          minHeight: 'calc(100vh - 100px)',
          background: 'linear-gradient(to right, #ffffff 50%, #e0f7fa 50%)',
          paddingBottom: 80,
        }}
      >
        <Container size="xs" px="xs">
          <Center
            style={{
              height: 'calc(100vh - 160px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateY(-20%)',
            }}
          >
            <Paper shadow="xl" p="xl" radius="lg" withBorder>
              <Stack gap={40}>
                <Title order={2}>
                  {user ? 'Welcome Back!' : 'Welcome to Our App'}
                </Title>

                <Text size="lg" color="dimmed">
                  {user ? `Hello, ${user.email}!` : 'Please sign in to continue'}
                </Text>

                {user ? (
                  <Button
                    component={Link}
                    to="/signup"
                    fullWidth
                    variant="light"
                    color="blue"
                    radius="md"
                  >
                    Go to Sign Up
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="/signin"
                    fullWidth
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    radius="md"
                  >
                    Go to Sign In
                  </Button>
                )}
              </Stack>
            </Paper>
          </Center>
        </Container>
      </Box>

      <BottomNav />
    </>
  );
}
