import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../pages/Form/css/style.css'


export default function InputSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="John Davison"
          onChange={handleChange}
          className='inputForm subHeading animate__animated animate__backInRight' 
        >
          <MenuItem value={10}>John Davison</MenuItem>
          <MenuItem value={20}>John Davison</MenuItem>
          <MenuItem value={30}>John Davison</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}