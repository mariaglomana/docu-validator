import { useState } from 'react'

import { MainLayout, Table } from '../../components'
import userDocumentsData from '../../data/documents_simple.json'
import texts from '../../texts.json'
import { formatDocumentsData, sortDocuments } from './helpers'
import { IDocument } from './types'
import { DOCUMENTS_TABLE_HEAD_DATA } from './constants'
import { TOrderDirection } from '../../components/Table/types'

const storedUserDocuments = userDocumentsData.documents as IDocument[]

const Home = () => {
  const userDocuments = formatDocumentsData(storedUserDocuments)
  const [orderBy, setOrderBy] = useState<keyof IDocument>('update_date')
  const [orderDirection, setOrderDirection] = useState<TOrderDirection>('desc')

  return (
    <MainLayout>
      <Table
        headData={DOCUMENTS_TABLE_HEAD_DATA}
        title={texts.loadedDocuments}
        data={
          sortDocuments(
            userDocuments,
            orderBy as string,
            orderDirection,
          ) as IDocument[]
        }
        orderBy={orderBy}
        changeOrderBy={setOrderBy}
        orderDirection={orderDirection}
        changeOrderDirection={setOrderDirection}
        ariaLabel={texts.documents}
      />
    </MainLayout>
  )
}

export default Home
