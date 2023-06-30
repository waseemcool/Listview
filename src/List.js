import React, { useEffect } from 'react'
import ListItem from './ListItem'

const List = ({items}) => {

useEffect(() => {
  console.log(items)
}, [])

  return (
    <ul>
        {
          items.map((item) => (
              <ListItem item={item} key={item.id}/>
          ))
        }
        {
          items.length < 1 && <div style={{marginTop: "200px"}}><h2 style={{color: "red"}}>Employee Not Found...</h2></div>
        }
    </ul>
  )
}

export default List