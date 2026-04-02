import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // useNavigateを追加

const RoomJoinPage = () => {
  // 状態管理（State）
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");

  // v6の画面遷移用ツール（インターフェース）
  const navigate = useNavigate();

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: roomCode,
      }),
    };

    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          // v6の画面遷移: pushの代わりに navigate(パス)
          // バッククォート `` を使って変数を埋め込みます
          navigate(`/room/${roomCode}`);
        } else {
          setError("Room not found.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid container spacing={1} direction="column" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!error}
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomJoinPage;
