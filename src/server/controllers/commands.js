import { findArticles } from "./blog.js";

const actions = [
    {
        id: 'action-home',
        name: 'Home',
        section: 'Link',
        perform: 'goToLink',
        link: '/',
        icon: 'bx bx-home'
    },
    {
        id: 'action-about',
        name: 'About',
        section: 'Link',
        perform: 'goToLink',
        link: '/about',
        icon: 'bx bx-user'
    },
    {
        id: 'action-journey',
        name: 'Journey',
        section: 'Link',
        perform: 'goToLink',
        link: '/journey',
        icon: 'bx bx-rocket'
    },
    {
        id: 'action-projects',
        name: 'Projects',
        section: 'Link',
        perform: 'goToLink',
        link: '/projects',
        icon: 'bx bx-collection'
    },
    {
        id: 'action-blog',
        name: 'Blog',
        section: 'Link',
        perform: 'goToLink',
        link: '/blog',
        icon: 'bx bx-news'
    },
    {
        id: 'action-newsletter',
        name: 'Newsletter',
        section: 'Link',
        perform: 'goToLink',
        link: '/newsletter',
        icon: 'bx bxs-bell'
    },
    {
        id: 'action-contact',
        name: 'Contact',
        section: 'Link',
        perform: 'goToLink',
        link: '/contact',
        icon: 'bx bxs-envelope'
    },
    {
        id: 'action-github',
        name: 'Github',
        section: 'Link',
        perform: 'goToLink',
        link: 'https://github.com/fabianwaller',
        icon: 'bx bxl-github'
    },
    {
        id: 'action-twitter',
        name: 'Twitter',
        section: 'Link',
        perform: 'goToLink',
        link: 'https://twitter.com/fabianwallerr',
        icon: 'bx bxl-twitter'
    },
    {
        id: 'action-linkedin',
        name: 'LinkedIn',
        section: 'Link',
        perform: 'goToLink',
        link: 'https://www.linkedin.com/in/fabian-waller-974840213/',
        icon: 'bx bxl-linkedin'
    },
]

export const getCommands = () => async (req, res) => {
    let filteredActions = actions;
    let search = req.query.search;
    if (search != '') {
        filteredActions = actions.filter(action => action.name.toLowerCase().includes(search.toLowerCase()));
    }

    filteredActions.sort((a, b) => {
        if (a.section < b.section) { return -1; }
        if (a.section > b.section) { return 1; }
        return 0;
    });

    return res.status(200).json(filteredActions);
}