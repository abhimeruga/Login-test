import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function ProtectedRoute({component:Component, ...rest } ) {
    return (
        <Route component={Component} {...rest} render={(props)=>{
                if(rest.loginData.isLoggedIn){
                    <Component {...props} />
                } else {
                    <Redirect to= {{
                        pathname : "/"
                    }}/>
                }
        }}   />
    )
}

const mapStateToProps = (state) => {
    return ({
        loginData: state.loginData,
    })
}

export default connect(mapStateToProps)(ProtectedRoute)
