import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function DiceRoll() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        className="diceButton"
        onClick={() => {
          document.getElementById('number').innerHTML = getDiceNumber()
        }}
      >
        Roll
      </Button>
    </Stack>
  )
}

function getDiceNumber() {
  return Math.floor(Math.random() * 6 + 1)
}
