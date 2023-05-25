import React from 'react'
import LayoutDash from './../../components/Layout/Layout-Dash';

const Dashboard = () => {
  return (
    <LayoutDash title={'Dashboard'}>
      <div style={{display:'flex'}}>
        <div style={{flex:1, border:"1px solid black",padding:"10px", marginLeft:"5vw", marginRight:"5vw", margintop:"45vh"}}>Dashboard</div>
      </div>
    </LayoutDash>
  )
}
export default Dashboard