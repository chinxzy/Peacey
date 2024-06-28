import JwtService from '@/core/services/JwtService'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'

import type { SweetAlertOptions } from 'sweetalert2'

type DateFormatOptions = {
  date: string | Date
  abbreviateMonth?: boolean
  includeTime?: boolean
}

export const userInSession = (): boolean => {
  const accessToken = JwtService.getToken()
  return !!accessToken
}

export const formatDate = ({
  date,
  abbreviateMonth = true,
  includeTime = false
}: DateFormatOptions) => {
  if (!date) return ''
  const options: any = {
    year: 'numeric',
    month: abbreviateMonth ? 'short' : 'long',
    day: 'numeric'
  }
  const formatedDate = new Date(date).toLocaleDateString('en-US', options)
  const time = new Date(date).toLocaleTimeString()

  return includeTime ? `${formatedDate}. ${time}` : `${formatedDate}`
}

export const toLocaleDate = (date: string | Date) => {
  if (!date) return
  return new Date(date).toLocaleString()
}

export const isValidEmail = (email: string) => {
  if (email.trim().length !== 0) {
    return !!email.trim().match(/\S+@\S+\.\S+/)
  } else {
    return !email.trim().match(/\S+@\S+\.\S+/)
  }
}

export const showNotification = (options: SweetAlertOptions) => {
  if (options.icon == 'success') {
    options.customClass = {
      confirmButton: 'btn fw-semobold btn-light-primary'
    }
  }

  return Swal.fire(options)
}

export const showSuccessNotification = (text: string) => {
  const options: SweetAlertOptions = {
    text,
    icon: 'success',
    toast: true,
    position: 'top-end',
    timer: 1000,
    timerProgressBar: true,
    showConfirmButton: false
  }

  return showNotification(options)
}

export const showErrorNotification = (text: string, canRetry = false, callBack?: Function) => {
  const options: SweetAlertOptions = {
    text,
    icon: 'error',
    confirmButtonText: canRetry ? 'Try again' : 'OK',
    showCancelButton: canRetry,
    confirmButtonColor: '#007B86'
  }

  return showNotification(options).then((response) => {
    if (!response.isConfirmed) return
    if (!callBack) return
    callBack()
  })
}
