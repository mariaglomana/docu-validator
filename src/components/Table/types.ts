export type TOrderDirection = 'asc' | 'desc'

export type TPositionInTable = 'date' | 'primary' | 'secondary' | 'auxiliary'

export interface ITableHeadData<T> {
  field: keyof T
  label: string
  isSortable: boolean
  position?: TPositionInTable
  withChip?: boolean
}

export type TTableData = Record<string, string | number>
