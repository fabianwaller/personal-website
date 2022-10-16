import { useEffect, useState, useRef } from "react"
import { render } from "react-dom"

const actions = [
    {
        id: 'contact',
        name: 'Contact me',
        shortcut: ['c'],
        keywords: 'contact',
        section: 'General',
        perform: 'goToLink',
        icon: 'contact'
    },
    {
        id: 'email',
        name: 'Email me',
        shortcut: ['c'],
        keywords: 'contact',
        section: 'General',
        perform: 'goToLink',
        icon: 'contact'
    },
    {
        id: 'blog',
        name: 'Blog',
        shortcut: ['c'],
        keywords: 'contact',
        section: 'General',
        perform: 'goToLink',
        icon: 'contact'
    }
]

const Commands = (props) => {
    const [commandsActive, setCommandsActive] = useState(false);
    const [currentCommand, setCurrentCommand] = useState(0);
    const inputReference = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', handleCommandsWindow);
        return () => {
            window.removeEventListener("keydown", handleCommandsWindow)
        }
    }, []);

    useEffect(() => {
        if (commandsActive) {
            inputReference.current.focus();
        }
    }, [commandsActive])

    useEffect(() => {
        window.addEventListener('keydown', handleCommandSelection);
        actions.forEach(action => {
            document.getElementById(action.id).classList.remove('list__item--active');
        })
        document.getElementById(actions[currentCommand].id).classList.add('list__item--active');
        return () => {
            window.removeEventListener("keydown", handleCommandSelection)
        }
    }, [currentCommand])


    const handleCommandsWindow = (e) => {
        if (e.metaKey == true && e.key === 'k') {
            document.body.style.overflow = 'hidden';
            setCommandsActive(true);
        }
        else if (e.key == 'Escape') {
            document.body.style.overflow = 'unset';
            setCommandsActive(false);
        }
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

    const goToLink = (link) => {
        window.location.href = link;
    }

    let hideClass = commandsActive ? '' : 'modal__background--hide';

    return (
        <>
            <div className={`modal__background ${hideClass}`}>
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