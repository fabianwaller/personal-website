import React from 'react'
import ReactDOM from 'react-dom'

import { useState , useEffect } from 'react';

import Section from './section'
import Button from './button'

function ProjectsContainer({repos}) {
    function formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        //var ampm = hours >= 12 ? 'pm' : 'am';
        //hours = hours % 12;
        //hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        let strTime = hours + ':' + minutes + ' '; //+ ampm;
        return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + " " + strTime;
    }
      
    if(repos == null) { return null }
    return (
        <div>
            {repos.map(repo => (
                <a key={repo.full_name} className='project__container card grid' href={repo.html_url}>
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
                    <Button classname="project__link" disabled='true' text="" href={repo.html_url} iconl='bx bx-link-external' link='true'/>
                </a>
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

            function compare(a, b) {
                if (new Date(a.pushed_at) < new Date(b.pushed_at)){
                  return 1;
                }
                if (new Date(a.pushed_at) > new Date(b.pushed_at)){
                  return -1;
                }
                return 0;
            }
              
            data.sort(compare);
            setRepos(data);
        }
    }, []);


    return (
        <Section name='projects' title='Projects' subtitle ='public code repos'> 
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