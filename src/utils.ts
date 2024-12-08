import { useTheme, useMediaQuery } from '@mui/material'

export const isDesktop = () => useMediaQuery(useTheme().breakpoints.up('md'))

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

/**
 * Given a date string, returns a formatted date string in the long format
 * suitable for Spain, which is 'dd/MM/yyyy'.
 *
 * @param {string} dateStr Date string to be formatted
 * @returns {string} Formatted date string
 */
export const formatLongDate = (dateStr: string) =>
  new Date(dateStr).toLocaleString('es-ES', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
