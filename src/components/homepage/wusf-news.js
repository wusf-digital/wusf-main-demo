import React from 'react'

import Card from 'react-bootstrap/Card'
import ContentSection from '../partials/content-sections'
import Loading from '../loading'
import Error from '../error'
import useFetch from '../../utils/useFetch'

export default function WUSFNews() {
    const { loading, results, error } = useFetch(`https://api.npr.org/query?orgId=${process.env.GATSBY_NPR_ORG_ID}&fields=title,byline,storyDate,parent,teaser,image&dateType=story&output=JSON&apiKey=${process.env.GATSBY_NPR_API_KEY}`)

    return (
        <ContentSection name='Local News from WUSF'>
            {loading && <Loading />}
            <div className='articles'>
            {!loading && error ? <Error /> : 
            results?.list.story.map(story => {
                return ( 
                    <Card key={story.id} style={{width: '45%'}}>
                        <Card.Img 
                            className='article-card-img-top'
                            variant='top' 
                            src={story.image?.[0].src ?? 'https://www.radio.net/images/broadcasts/4a/85/29021/c300.png'}
                             />
                        <Card.Body>
                            <Card.Title className='article-name'>
                                <a href={story.link[0]['$text']} target='_blank' rel='noreferrer'>
                                    {story.title['$text']}
                                </a>
                            </Card.Title>
                            <Card.Text>{story.teaser['$text']}</Card.Text>
                        </Card.Body>
                    </Card>
                    
                )
            })
            }
            </div>
        </ContentSection>
    )
}