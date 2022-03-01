import React from 'react'

import Loading from '../components/loading'
import Error from '../components/error'
import useFetch from '../utils/useFetch'
import Layout from '../components/layout'

export default function ContactUs() {
    const { loading, results, error } = useFetch('https://dev.wusf.digital/wp-json/wp/v2/pages/?include=673')
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