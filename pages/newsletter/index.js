import React from 'react'
import {useState, useEffect} from 'react';

import Layout from '../../components/layout';
import NewsletterSubscriptionContainer from '../../components/newsletterSubscriptionContainer'

const Newsletter = () => {
    return (
        <Layout page='newsletter'>
            <section className='container'>
                <NewsletterSubscriptionContainer />
            </section>
        </Layout>
    )
}

export default Newsletter