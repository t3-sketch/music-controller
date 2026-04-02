import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Button, Typography } from "@mui/material";

// ラッパー関数（Hooks → クラスコンポーネント橋渡し）
function withRouter(WrappedComponent) {
  return function (props) {
    const params = useParams();
    const navigate = useNavigate();
    return <WrappedComponent {...props} params={params} navigate={navigate} />;
  };
}

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
    };

    // URL params から取得
    this.roomCode = this.props.params.roomCode;
    this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
    this.getRoomDetails = this.getRoomDetails.bind(this);
  }

  componentDidMount() {
    this.getRoomDetails();
  }

  getRoomDetails() {
    fetch("/api/get-room?code=" + this.roomCode)
      .then((response) => {
        if (!response.ok) {
          if (this.props.leaveRoomCallback) this.props.leaveRoomCallback(); // 親(HomePage)のStateをリセット
          this.props.navigate("/"); // ホームへ強制退避
          return;
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  }

  leaveButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room/", requestOptions).then((_response) => {
      if (this.props.leaveRoomCallback) this.props.leaveRoomCallback();
      this.props.navigate("/");
    });
  }

  render() {
    return (
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid item xs={12} align="center">
          <Typography variant="h6">Code: {this.roomCode}</Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h6">Votes: {this.state.votesToSkip}</Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h6">
            Guest Can Pause: {this.state.guestCanPause.toString()}
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h6">
            Is Host: {this.state.isHost.toString()}
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={this.leaveButtonPressed}
          >
            Leave Room
          </Button>
        </Grid>
      </Grid>
    );
  }
}

// ラップして export
export default withRouter(Room);
