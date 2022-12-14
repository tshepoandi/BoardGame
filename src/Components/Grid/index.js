import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Tiles from '../TilesForBoard'
import Photo from '../PhotoAndPrompt'
import DiceRoll from './DiceRollButton'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>
            <Tiles />
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <Photo />
          </Item>
          <DiceRoll />
          <h1 id="number"> 6</h1>
        </Grid>
      </Grid>
    </Box>
  )
}
