import { IDocument } from './pages/Home/types'

const DOCUMENTS_KEY = 'documents'

export const getDocuments = () => {
  const storedDocuments = localStorage.getItem(DOCUMENTS_KEY)
  return storedDocuments ? JSON.parse(storedDocuments) : []
}

export const saveDocument = (document: Omit<IDocument, 'id'>) => {
  const storedDocuments = getDocuments()
  storedDocuments.push({ id: crypto.randomUUID(), ...document })
  localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(storedDocuments))
}

export const updateDocument = (document: IDocument) => {
  const storedDocuments = getDocuments()
  const index = storedDocuments.findIndex(
    (doc: IDocument) => doc.id === document.id,
  )
  storedDocuments[index] = {
    ...document,
    update_date: new Date().toISOString(),
  }
  localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(storedDocuments))
}
