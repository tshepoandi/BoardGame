import * as React from 'react'
import Box from '@mui/material/Box'
import Tiles from '../TilesForBoard'

export default function BoxSx() {
  return (
    <Box
      sx={{
        marginTop: '10rem',
        borderRadius: '10px',
        width: '41rem',
        padding: '20px',
      }}
    >
      <Tiles />
    </Box>
  )
}
