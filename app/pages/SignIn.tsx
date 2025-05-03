import { Box, Stack, Title, Text } from '@mantine/core';
import '../app.css'; 

export default function Log() {
  return (
    <Box className="login-container">
      <div className="login-card">
        <div className="login-title">Log Page</div>

        <Stack gap="md">
          <Text size="lg" color="white">a
            This is the Log page.
          </Text>
        </Stack>
      </div>
    </Box>
  );
}
