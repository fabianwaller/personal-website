import React from 'react'
import {useState, useEffect} from 'react';
import Section from '../components/section'
import Button from '../components/button'
import Layout from '../components/layout'
import formatDate from "../lib/formatdate"

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getData();
        async function getData() {
            const res = await fetch('https://api.github.com/users/fabianwaller/repos');
            const data = await res.json();

            function compare(a, b) {
                if (new Date(a.pushed_at) < new Date(b.pushed_at)) {
                    return 1;
                }
                if (new Date(a.pushed_at) > new Date(b.pushed_at)) {
                    return -1;
                }
                return 0;
            }
            data.sort(compare);
            setRepos(data);
        }
    }, []);


    return (
        <Layout page='projects'>
            <Section name='projects' title='Projects' subtitle='public code repos'>
                {repos.map(repo => (
                    <a key={repo.full_name} className='project__container card grid' href={repo.html_url} target='_blank'>
                        <div className="project__content">
                            <span className='project__location flex'><i className='bx bxl-github'></i> GitHub</span>
                            <h3 className="project__name">{repo.full_name}</h3>
                            <p className="project__topics">{repo.topics.map(topic => <span key={topic} className='project__topic keyword'>{topic}</span>)}</p>
                            <span className="project__description">{repo.description}</span>
                        </div>

                        <div className="project__footer">
                            <span className="project__info flex">
                                <i className='bx bxs-star'></i>
                                {repo.stargazers_count}
                            </span>
                            <span className="project__info flex">
                                <i className='bx bx-calendar-alt'></i>{formatDate(new Date(repo.pushed_at))}
                            </span>
                        </div>
                        <Button classname="project__link" disabled='true' text="" href={repo.html_url} iconl='bx bx-link-external' link='true' />
                    </a>
                ))}
            </Section>
        </Layout>

    );
}

export default Projects