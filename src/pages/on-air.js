import React from 'react'

import Loading from '../components/loading'
import Error from '../components/error'
import useFetch from '../utils/useFetch'
import { useSiteMetadata } from '../utils/use-site-metadata'
import Layout from '../components/layout'

export default function OnAir() {
  const { wordPressBackend } = useSiteMetadata()
  const { loading, results, error } = useFetch(`${wordPressBackend}}/wp-json/wp/v2/pages/?include=2090`)
  
  return (
    <Layout>
      <article className='content'>
          { loading && <Loading /> }
          { !loading && error ? <Error /> :
          <div style={{width: '75%'}} dangerouslySetInnerHTML={{__html: results?.[0].content?.rendered}} />
          }
      </article>  
    </Layout>
  )
}