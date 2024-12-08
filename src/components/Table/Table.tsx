import {
  TableSortLabel,
  Typography,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { ITableHeadData, TOrderDirection, TTableData } from './types.ts'
import { isDesktop } from '../../utils.ts'

interface TableProps<T extends TTableData> {
  ariaLabel?: string
  title: string
  headData: ITableHeadData<T>[]
  data: T[]
  orderBy: keyof T
  changeOrderBy: (orderBy: keyof T) => void
  orderDirection: TOrderDirection
  changeOrderDirection: (orderDirection: TOrderDirection) => void
}

const Table = <T extends TTableData>({
  title,
  headData,
  data,
  orderBy,
  changeOrderBy,
  orderDirection,
  changeOrderDirection,
  ariaLabel,
}: TableProps<T>) => {
  const columns = isDesktop()
    ? ['date', 'primary', 'secondary', 'auxiliary']
    : ['primary', 'secondary']

  const dataKeyColumns = columns
    .map((col) => headData.find((colData) => colData.position === col)?.field)
    .filter((val) => val !== undefined) as (keyof T)[]

  const handleClickSort = (newOrderBy: keyof T) => {
    if (newOrderBy === orderBy) {
      changeOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc')
    } else {
      changeOrderBy(newOrderBy)
    }
  }

  return (
    <>
      <Typography id='tableDescription' variant='h5'>
        {title}
      </Typography>
      <MuiTable
        role='table'
        aria-label={ariaLabel}
        aria-describedby='tableDescription'
      >
        <TableHead role='rowgroup'>
          <TableRow role='row'>
            {dataKeyColumns.map((dataKey) => {
              const columnData = headData.find(
                (colData) => colData.field === dataKey,
              )
              if (!columnData) return null
              return (
                <TableCell key={dataKey as string} role='columnheader'>
                  {columnData.isSortable ? (
                    <TableSortLabel
                      active={columnData.field === orderBy}
                      direction={orderDirection}
                      onClick={() => handleClickSort(columnData.field)}
                    >
                      {columnData.label}
                    </TableSortLabel>
                  ) : (
                    columnData.label
                  )}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody role='rowgroup'>
          {data.map((rowData, index) => (
            <TableRow role='row' key={index}>
              {dataKeyColumns.map((dataKey) => {
                return (
                  <TableCell key={`${index}-${dataKey as string}`} role='cell'>
                    {rowData[dataKey as string]}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </>
  )
}

export default Table
