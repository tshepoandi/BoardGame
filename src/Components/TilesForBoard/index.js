import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import './style.css'
export default function Tiles() {
  const [spacing] = React.useState(2)

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 50,
                    width: 50,
                    fontSize: '10px',
                    marginBottom: '10px',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                >
                  <div className={`tile_${value}`}>{value}</div>
                </Paper>
              </Grid>
            ))
            .reverse()}
        </Grid>
        <Grid container justifyContent="center" spacing={spacing}>
          {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 50,
                  width: 50,
                  fontSize: '10px',
                  marginBottom: '10px',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <div className={`tile_${value}`}>{value}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" spacing={spacing}>
          {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            .map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 50,
                    width: 50,
                    fontSize: '10px',
                    marginBottom: '10px',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                >
                  <div className={`tile_${value}`}>{value}</div>
                </Paper>
              </Grid>
            ))
            .reverse()}
        </Grid>
        <Grid container justifyContent="center" spacing={spacing}>
          {[31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 50,
                  width: 50,
                  fontSize: '10px',
                  marginBottom: '10px',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <div className={`tile_${value}`}>{value}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" spacing={spacing}>
          {[41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
            .map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 50,
                    width: 50,
                    fontSize: '10px',
                    marginBottom: '10px',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                >
                  <div className={`tile_${value}`}>{value}</div>
                </Paper>
              </Grid>
            ))
            .reverse()}
        </Grid>
      </Grid>
    </Grid>
  )
}
