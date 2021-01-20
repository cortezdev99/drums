import React from 'react'
import Bank from './Bank'
import InterfaceDisplay from './InterfaceDisplay'
import Power from './Power'
import Volume from './Volume'

export default () => {
  return (
    <div id="display" style={{
      height: "265px",
      padding: "40px",
      width: "265px",
      borderRadius: "20px",
      background: "#191919",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    }}>
      <Power />
      <InterfaceDisplay />
      <Volume />
      <Bank />
    </div>
  )
}