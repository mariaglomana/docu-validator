import { useState } from 'react'
import { Button } from '@mui/material'

import { PageLayout, Table } from '../../components'
import { TOrderDirection } from '../../components/Table/types'
import texts from '../../texts.json'
import { navigateTo } from '../../utils'
import * as storage from '../../storage'
import { formatDocumentsData, sortDocuments } from './helpers'
import { IDocument } from './types'
import { DOCUMENTS_TABLE_HEAD_DATA } from './constants'

const Home = () => {
  const [orderBy, setOrderBy] = useState<keyof IDocument>('update_date')
  const [orderDirection, setOrderDirection] = useState<TOrderDirection>('desc')

  return (
    <PageLayout withHeader>
      <Table
        headData={DOCUMENTS_TABLE_HEAD_DATA}
        title={texts.loadedDocuments}
        data={
          sortDocuments(
            formatDocumentsData(storage.getDocuments()),
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

      <Button onClick={() => navigateTo('/new-document')}>
        {texts.addDocument}
      </Button>
    </PageLayout>
  )
}

export default Home
