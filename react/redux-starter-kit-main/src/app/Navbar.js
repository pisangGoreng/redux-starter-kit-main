import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {
  fetchNotifications,
  selectAllNotifications,
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  const notifications = useSelector(selectAllNotifications)
  const numReadNotifications = notifications.filter(
    (notif) => !notif.read
  ).length

  let unreadNotifcationsBadge
  if (numReadNotifications > 0) {
    unreadNotifcationsBadge = (
      <span className="badge">{numReadNotifications}</span>
    )
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">
            Notifications {unreadNotifcationsBadge}
          </Link>
        </div>
        <button className="button" onClick={fetchNewNotifications}>
          Refresh
        </button>
      </section>
    </nav>
  )
}
