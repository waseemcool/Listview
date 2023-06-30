import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchItems = ({search, setSearch}) => {
  return (
    <div>
        <Box component="form" sx={{'& > :not(style)': { width: '40ch' }, }} noValidate autoComplete="off">
            <TextField type='text' role='searchbox' id="outlined-basic" label="Search Employee..." variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
        </Box>
    </div>
  )
}

export default SearchItems