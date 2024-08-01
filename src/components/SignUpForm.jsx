import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../store/loginStore'

export default function SignUpForm() {
    const{setToggle}= useLoginStore()
  return (
    <div>
        <Typography variant='h4'align='center'sx={{ marginY:5}}>New ? Signup</Typography>
      <Box height={500}
      width={500}
      my={5}
      mx={65}
     
      sx={{ border: '2px solid orange' }}>

<Stack spacing={5}>
 
<TextField  label="Email" variant="outlined" />

<TextField  label="New Password" variant="outlined" />
<TextField  label="Conform Password" variant="outlined" />
<Button variant="contained">Signup</Button>
</Stack>

<Typography variant='h6'align='center'sx={{ marginY:1}}>Alerady Existing ?
    <Link sx={{ cursor:"pointer"}}onClick={setToggle}>  Login Here</Link></Typography>

</Box>
    </div>
  )
}
