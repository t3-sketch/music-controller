import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

export default function Info(props) {
  const [page, setPage] = useState(pages.JOIN);

  function joinInfo() {
    return "Join page";
  }

  function createChainedFunction() {
    return "Create page";
  }

  useEffect(() => {
    console.log("ran");
    return () => console.log("cleanup");
  });

  return (
    <Grid container spacing={1}>
      {/* align="center" ではなく sx={{ textAlign: "center" }} を使用 */}
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography component="h4" variant="h4">
          What is House Party?
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="body1">
          {page === pages.JOIN ? joinInfo() : createChainedFunction()}
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <IconButton
          onClick={() => {
            // page.CREATE を pages.CREATE に、pagesJOIN を pages.JOIN に修正
            page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {/* ここも page.CREATE から pages.CREATE に修正 */}
          {page === pages.CREATE ? (
            <NavigateBeforeIcon />
          ) : (
            <NavigateNextIcon />
          )}
        </IconButton>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
