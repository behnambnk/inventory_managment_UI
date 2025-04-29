import { Button, Paper, Title, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <Paper shadow="md" p="xl" radius="md" withBorder style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <Title style={{ textAlign: 'center' }} mb="lg">Home</Title>
      {user ? (
        <>
          <Text mb="md">Welcome, {user.email}!</Text>
          <Button fullWidth variant="outline" component={Link} to="/signup">
            Go to Sign Up
          </Button>
        </>
      ) : (
        <>
          <Text mb="md">You are not logged in.</Text>
          <Button fullWidth component={Link} to="/signin">
            Go to Sign In
          </Button>
        </>
      )}
    </Paper>
  );
}
