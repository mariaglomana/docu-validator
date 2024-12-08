import { ITableHeadData } from '../../components/Table/types'
import texts from '../../texts.json'
import { IDocument } from './types'

export const DOCUMENTS_TABLE_HEAD_DATA: ITableHeadData<IDocument>[] = [
  {
    field: 'author',
    label: texts.author,
    isSortable: true,
    position: 'auxiliary',
  },
  {
    field: 'update_date',
    label: texts.updateDate,
    isSortable: true,
    position: 'date',
  },
  {
    field: 'name',
    label: texts.name,
    isSortable: true,
    position: 'primary',
  },
  {
    field: 'status',
    label: texts.status,
    isSortable: true,
    withChip: true,
    position: 'secondary',
  },
]
