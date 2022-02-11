import * as React from 'react'

import Content from '../components/content'
import Seo from '../components/seo'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
  <Layout>
      <Seo title='WUSF.org - WUSF Public Media' />
      <Content />
    </Layout>
  )
}