import React from 'react'
import  {connect, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

function ProtectedRout({ children, authUsers }) {
  if (!authUsers)return  <Navigate  to="/login" replace={true}/>
  return children 

	
}
const mapStateToProps =(state)=>{
  return {
		authUsers: state.authReducer.loginedInUsers,
	}}

export default connect( mapStateToProps)( ProtectedRout)