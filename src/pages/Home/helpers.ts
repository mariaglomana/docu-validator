import { formatLongDate } from '../../utils'
import { IDocument } from './types'
import { TOrderDirection, TTableData } from '../../components/Table/types'

export const formatDocumentsData = (data: IDocument[]) =>
  data.map((doc: IDocument) => ({
    ...doc,
    update_date: formatLongDate(doc.update_date as string),
  }))

export const sortDocuments = (
  userDocuments: TTableData[],
  orderBy: keyof TTableData,
  orderDirection: TOrderDirection,
): TTableData[] => {
  return userDocuments.sort((a, b) => {
    const valueA = a[orderBy]
    const valueB = b[orderBy]

    // Handle date strings for `update_date`
    if (orderBy === 'update_date') {
      const dateA = new Date(valueA as string).getTime()
      const dateB = new Date(valueB as string).getTime()
      return orderDirection === 'asc' ? dateA - dateB : dateB - dateA
    }

    // Handle numeric comparisons
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return orderDirection === 'asc' ? valueA - valueB : valueB - valueA
    }

    // Handle string comparisons (case-insensitive)
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return orderDirection === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    }

    // Default fallback (if types don't match or unhandled cases)
    return 0
  })
}
