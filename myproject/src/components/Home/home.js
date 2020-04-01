import React from 'react'
import Article from '../articles/article'
import Footer from '../footer/footer'

function Home(props) {
    //console.log('the props in home',props)
    return(
        <div>
            <Article article = {props.article.articles} />
            <Footer />
        </div>
    )
}

export default Home