/**
 *
 * ProtectedRoute
 *
 */
import AdminLayout from 'app/pages/LayoutPage'
import { useGlobalSlice } from 'app/slice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { selectGlobal } from '../../slice/selectors'

const ProtectedRoute = props => {
  const { component: Component, ...rest } = props
  const { actions } = useGlobalSlice()
  const dispatch = useDispatch()
  const { user, loading } = useSelector(selectGlobal)

  const handleLogout = () => {
    dispatch(actions.logoutCurrentUser())
  }
  console.log('user');
  // console.log(user.username);
  return (
    <Route
       {...rest}
       render={routeProps =>
         loading
           ? (
           <p>Loading...</p>
             )
           : user
             ? (
           <AdminLayout
             onLogout={handleLogout}
             username={user.username}
             {...routeProps}
           >
             <Component {...routeProps} />
           </AdminLayout>
               )
             : (
           <Redirect
             to={{ pathname: '/login', state: { from: props.location } }}
           />
               )
       }
     />
  )
}

export default ProtectedRoute
