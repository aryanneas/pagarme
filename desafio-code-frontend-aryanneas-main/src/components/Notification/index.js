import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
  return (
    <ToastContainer
      transition={Slide}
      position="top-center"
      closeButton={false}
      bodyClassName="ToastBody"
    />
  )
}

Notification.error = toast.error
Notification.success = toast.success

export default Notification
