import React from 'react'
import Layout from '../../components/layout'
import Articles from '../../components/articles'
import {getSortedPostsData} from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const Blog = ({allPostsData}) => {

    return (
        <Layout page='blog'>
            <section className='blog section' id='blog'>

                <div className="blog__container container">

                    <div className="section__header">
                        <h1 className="section__title linear__gradient linear__gradient-2">Personal Blog</h1>
                        <span className="section__subtitle">insight in my thoughts</span>
                    </div>

                    <p className="blog__description">Here you'll find all my public thoughts, notes, learnings and experiences. I share whatever I want, ranging from programming to math, over books and podcasts and much more. Scroll down to check them out!</p>

                    <div className="blog__content grid">
                        <Articles allPostsData={allPostsData} />
                    </div>

                </div>

            </section>

        </Layout>
    )

}

export default Blog