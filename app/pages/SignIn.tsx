import { Box, Container, Center, Paper, Stack, Title, Text } from '@mantine/core';

export default function Log() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ffffff 50%, #e0f7fa 50%)',
        padding: '80px 0',
      }}
    >
      <Container size="xs">
        <Center style={{ minHeight: '80vh' }}>
          <Paper shadow="xl" p="xl" radius="lg" withBorder>
            <Stack gap={40}>
              <Title order={2}>Log Page</Title>
              <Text size="lg" color="dimmed">
                This is the Log page.
              </Text>
            </Stack>
          </Paper>
        </Center>
      </Container>
    </Box>
  );
}
