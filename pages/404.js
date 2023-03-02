import Layout from '../components/layout'

const PageNotFound = () => {

    return (
        <Layout page='404'>
            <div className='container'>
                <div className="full-screen centered">
                    <h1 className='section__title'>404</h1>
                    <span className='section__subtitle'>This page could not be found.</span>
                    <span className='section__subtitle'>It doesn't exist or was removed.</span>
                </div>
            </div>
        </Layout>
    );
}

export default PageNotFound