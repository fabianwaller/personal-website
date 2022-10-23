import { useEffect, useState, useRef } from "react"
import { render } from "react-dom"

const actions = [
    {
        id: 'action-home',
        name: 'Home',
        shortcut: ['h'],
        section: 'General',
        perform: 'goToLink',
        link: '/#home',
        icon: 'contact'
    },
    {
        id: 'action-about',
        name: 'About',
        shortcut: ['a'],
        section: 'General',
        perform: 'goToLink',
        link: '/#about',
        icon: 'contact'
    },
    {
        id: 'action-journey',
        name: 'Journey',
        shortcut: ['j'],
        section: 'General',
        perform: 'goToLink',
        link: '/#journey',
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

const Commands = (props) => {
    const [commandsActive, setCommandsActive] = useState(false)
    const [currentCommand, setCurrentCommand] = useState(0)
    const inputReference = useRef(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        window.addEventListener('keydown', handleCommandsKeyboardPress)
        window.addEventListener('click', handleCommandsEscapeClick)
        return () => {
            window.removeEventListener('keydown', handleCommandsKeyboardPress)
            window.removeEventListener('click', handleCommandsEscapeClick)
        }
    }, []);

    useEffect(() => {
        if (commandsActive) {
            inputReference.current.focus()
        }
    }, [commandsActive])

    useEffect(() => {
        window.addEventListener('keydown', handleCommandSelection);
        window.addEventListener('keydown', handleCommandRunning)
        actions.forEach(action => {
            document.getElementById(action.id).classList.remove('list__item--active');
        })
        document.getElementById(actions[currentCommand].id).classList.add('list__item--active');
        return () => {
            window.removeEventListener('keydown', handleCommandSelection)
        }
        return () => {
            window.removeEventListener('keydown', handleCommandRunning)
        }
    }, [currentCommand])


    const handleCommandsKeyboardPress = (e) => {
        if (e.metaKey == true && e.key === 'k') {
            document.body.style.overflow = 'hidden';
            setCommandsActive(true);
            return;
        } else if (e.key == 'Escape') {
            escapeCommands();
        }
    }

    const handleCommandsEscapeClick = (e) => {
        let escapeClick = e.target == document.getElementById('modalBackground')
        if (escapeClick) {
            escapeCommands();
        }
    }

    const escapeCommands = () => {
        document.body.style.overflow = 'unset';
        setCommandsActive(false);
    }

    const handleCommandSelection = (e) => {
        if (e.key == 'ArrowDown') {
            e.preventDefault();
            if (currentCommand + 1 < actions.length) {
                setCurrentCommand(currentCommand + 1);
            }
        }
        if (e.key == 'ArrowUp') {
            e.preventDefault();
            if (currentCommand > 0) {
                setCurrentCommand(currentCommand - 1);
            }
        }
    }

    const handleCommandRunning = (e) => {
        if (e.key == 'Enter') {
            if (actions[currentCommand].perform == 'goToLink') {
                goToLink(actions[currentCommand].link)
            }
            escapeCommands();
        }
    }

    const goToLink = (link) => {
        window.location.href = link;
    }

    let hideClass = commandsActive ? '' : 'modal__background--hide';

    return (
        <>
            <div className={`modal__background ${hideClass}`} id='modalBackground'>
                <div className="modal__container container grid">
                    <input type="text" ref={inputReference} id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="search__input" placeholder="Search" />

                    <hr className='divider' />

                    <div className="list">
                        {actions.map(action => (
                            <a key={action.id} className='list__item' id={action.id}>
                                {action.name}
                            </a>
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Commands



/*    const activateCommandsModal = () => {
        document.body.style.overflow = 'hidden';
        // compensate for missing scroll bar
        document.body.style.paddingRight = `0.5rem`;
        document.getElementById('header').style.paddingRight = `0.5rem`;
        setCommandsActive(true);
    }

    const deactivateCommandsModal = () => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = `0rem`;
        document.getElementById('header').style.paddingRight = `0rem`;
        setCommandsActive(false);
    }

    */