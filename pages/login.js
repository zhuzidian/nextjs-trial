import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [passowrd, setPassword] = useState("");

  function loginHandler(event) {
    console.log(loginId, passowrd);
  }
  return (
    <Container maxWidth="xs">
      <Box sx={{ my: 4 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom align="center">
              ログイン
            </Typography>
            <TextField
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              margin="normal"
              fullWidth
              label="ログインID"
              name="loginId"
              autoFocus
            />
            <TextField
              value={passowrd}
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
              fullWidth
              label="パスワード"
              name="password"
              type="password"
              autoComplete="current-passowrd"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ my: 2 }}
              onClick={loginHandler}
            >
              ログイン
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
