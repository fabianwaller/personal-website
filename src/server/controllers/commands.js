const actions = [
    {
        id: 'action-home',
        name: 'Home',
        shortcut: ['h'],
        section: 'General',
        perform: 'goToLink',
        link: '/',
        icon: 'contact'
    },
    {
        id: 'action-about',
        name: 'About',
        shortcut: ['a'],
        section: 'General',
        perform: 'goToLink',
        link: '/about',
        icon: 'contact'
    },
    {
        id: 'action-journey',
        name: 'Journey',
        shortcut: ['j'],
        section: 'General',
        perform: 'goToLink',
        link: '/journey',
        icon: 'contact'
    },
    {
        id: 'action-blog',
        name: 'Blog',
        shortcut: ['b'],
        section: 'General',
        perform: 'goToLink',
        link: '/blog',
        icon: 'blog'
    }
]

export const getCommands = () => async (req, res) => {
    console.log('getCommands');
    return res.status(200).json(actions);
}