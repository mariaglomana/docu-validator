import { formatLongDate } from '../../utils'
import { IDocument } from './types'

export const formatDocumentsData = (data: IDocument[]) =>
  data.map((doc: IDocument) => ({
    ...doc,
    update_date: formatLongDate(doc.update_date as string),
  }))
