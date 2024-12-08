import { MainLayout } from '../../components'
import userDocumentsData from '../../data/documents.json'
import { formatDocumentsData } from './helpers'
import { IDocument } from './types'

const storedUserDocuments = userDocumentsData.documents as IDocument[]

const Home = () => {
  const userDocuments = formatDocumentsData(storedUserDocuments)
  return (
    <MainLayout>{userDocuments.map((doc) => JSON.stringify(doc))}</MainLayout>
  )
}

export default Home
