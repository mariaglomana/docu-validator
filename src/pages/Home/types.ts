export type TDocumentStatus = 'pending' | 'approved' | 'rejected'

export interface IDocument {
  name: string
  update_date: string
  id: number
  author: string
  status: TDocumentStatus
  type: string
  size: number
  referred: string[]
  keywords: string[]
}
