import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

const ListItem = ({item}) => {
  return (
    <li style={{listStyle: "none"}}>
        
      <Badge badgeContent={item.id} color="primary" style={{marginTop: '25px'}} >
          <Box component="span" sx={{ p: 1, border: '2px solid', borderRadius: '12px' }}>
            <Card sx={{ minWidth: 300 }} style={{borderRadius:"12px"}}>
                <CardMedia sx={{ height: 200 }} image={item.avatar}  title="avatar" />
            </Card>
          </Box>
      </Badge>
        
      <h2 style={{marginTop: "7px"}}>{item.first_name}</h2>

    </li>
  )
}

export default ListItem
