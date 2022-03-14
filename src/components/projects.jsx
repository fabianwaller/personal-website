import React from 'react'
import ReactDOM from 'react-dom'

import { useState , useEffect } from 'react';

import Section from './section'
import Button from './button'

function ProjectsContainer({repos}) {
    if(repos == null) { return null }
    return (
        <div className='projects__container grid'>
            {repos.map(repo => (
                <div key={repo.full_name} className='project__container card grid'>
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
                            <i className='bx bx-calendar-alt'></i>{repo.updated_at}
                        </span>
                    </div>
                    <Button classname="project__link" text="" href={repo.html_url} iconl='bx bx-link-external' link='true'/>
                </div>
            ))}
        </div>

    );
}

function Projects() {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        getData();

        async function getData() {
            const res = await fetch('https://api.github.com/users/fabianwaller/repos');
            const data = await res.json();
    
            setRepos(data);
        }
    }, []);



    return (
        <Section name='projects' title='Projects' subtitle ='My code'> 
            <ProjectsContainer repos={repos}/>
        </Section> 

    );
}
  
export default Projects





/*     fetch('https://api.github.com/users/fabianwaller/repos')
        .then(response => response.json())
        .then(function(data) {
            data.forEach(el => {
                const repo = {
                    name : el.full_name,
                    description: el.description,
                    url: el.html_url,
                    updated_at: el.updated_at,
                    stars: el.stargazers_count,
                    watchers: el.watchers_count,
                    topics: el.topics
                }
                let card = <div className="project__container card grid">
                    <h3 className="card__title">{repo.name}</h3>
                </div>

            });
        }); */