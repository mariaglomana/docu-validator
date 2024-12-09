import { IDocument } from './pages/Home/types'
import * as storage from './storage'
import { UserData } from './types'

export const saveNewDocument = (documentData: IDocument) => {
  storage.saveDocument(documentData)
}

export const sendNewDocumentEmails = async (
  authorData: UserData,
  document: File,
  referred: string[],
): Promise<void> => {
  // TODO: use email service
  console.log('...sending emails...', { authorData, document, referred })
  return Promise.resolve()
}
