const actions = [
    {
        id: 'action-home',
        name: 'Home',
        shortcut: ['h'],
        section: 'Link',
        perform: 'goToLink',
        link: '/',
        icon: 'contact'
    },
    {
        id: 'action-about',
        name: 'About',
        shortcut: ['a'],
        section: 'Link',
        perform: 'goToLink',
        link: '/about',
        icon: 'contact'
    },
    {
        id: 'action-journey',
        name: 'Journey',
        shortcut: ['j'],
        section: 'Link',
        perform: 'goToLink',
        link: '/journey',
        icon: 'contact'
    },
    {
        id: 'action-blog',
        name: 'Blog',
        shortcut: ['b'],
        section: 'Link',
        perform: 'goToLink',
        link: '/blog',
        icon: 'blog'
    }
]

export const getCommands = () => async (req, res) => {
    let filteredActions = [];
    let search = req.query.search;
    if (search == '') {
        filteredActions = actions;
    } else {
        filteredActions = actions.filter(action => action.name.toLowerCase().includes(search.toLowerCase()));
    }

    filteredActions.sort((a, b) => {
        if (a.section < b.section) { return -1; }
        if (a.section > b.section) { return 1; }
        return 0;
    });
    return res.status(200).json(filteredActions);
}