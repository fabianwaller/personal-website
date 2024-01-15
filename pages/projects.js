import React from 'react'
import Section from '../components/section'
import Button from '../components/button'
import Layout from '../components/layout'
import formatDate from "../lib/formatdate"

const getData = async () => {
    const res = await fetch('https://api.github.com/users/fabianwaller/repos');
    const data = await res.json();

    const closedSourceProjects = getClosedSourceProjects();
    data.push(...closedSourceProjects);

    data.sort(compare);
    return data
}

const getClosedSourceProjects = () => {
    return [
        {
            type: "closed",
            full_name: "Squadmanager",
            html_url: "https://www.squadmanagerapp.com",
            description: "A mobile app to manage your sports team.",
            topics: ["react native", "expo", "supabase", "typescript"],
            pushed_at: new Date().toISOString(),
        },
        {
            type: "closed",
            full_name: "Website FC Düppenweiler",
            html_url: "https://www.fcdüppenweiler.de",
            description: "Vereinswebsite des FC Düppenweiler",
            topics: ["nextjs", "typescript", "css"],
            pushed_at: new Date().toISOString(),
        }
    ]
}

const compare = (a, b) => {
    if (new Date(a.pushed_at) < new Date(b.pushed_at)) {
        return 1;
    }
    if (new Date(a.pushed_at) > new Date(b.pushed_at)) {
        return -1;
    }
    return 0;
}

export const getServerSideProps = async () => {
    return {
        props: {
            repos: await getData()
        }
    }
}

const Projects = (props) => {
    return (
        <Layout page='projects'>
            <Section name='projects' title='Projects' subtitle='my private projects and public code repos'>
                {props.repos.map(repo => {
                    if (repo.full_name == 'fabianwaller/fabianwaller') return
                    return (
                        <a key={repo.full_name} className='project__container card grid' href={repo.html_url} target='_blank'>
                            <div className="project__content">
                                {
                                    repo.type != 'closed' ? (
                                        <span className='project__location flex'><i className='bx bxl-github'></i> GitHub</span>
                                    ) : (
                                        <span className='project__location flex'><i className='bx bx-world'></i> Web</span>
                                    )
                                }
                                <h3 className="project__name">{repo.full_name}</h3>
                                <p className="project__topics">{repo.topics.map(topic => <span key={topic} className='project__topic keyword'>{topic}</span>)}</p>
                                <span className="project__description">{repo.description}</span>
                            </div>

                            <div className="project__footer">
                                {
                                    repo.type != 'closed' ? (
                                        <span className="project__info flex">
                                            <span className="project__info flex">
                                                <i className='bx bxs-star'></i>
                                                {repo.stargazers_count}
                                            </span>
                                            <i className='bx bx-calendar-alt'></i>{formatDate(new Date(repo.pushed_at))}
                                        </span>
                                    ) : null
                                }
                            </div>
                            <Button classname="project__link" disabled='true' text="" href={repo.html_url} iconl='bx bx-link-external' link='true' />
                        </a>
                    )
                })}
            </Section>
        </Layout>

    );
}

export default Projects