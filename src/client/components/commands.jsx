import { useEffect, useState, useRef } from "react"
import { render } from "react-dom"

const Commands = (props) => {
    const [commandsActive, setCommandsActive] = useState(false)
    const [currentCommand, setCurrentCommand] = useState(0)
    const inputReference = useRef(null)
    const [search, setSearch] = useState('')
    const [actions, setActions] = useState([])

    useEffect(() => {
        window.addEventListener('keydown', handleCommandsKeyboardPress)
        return () => {
            window.removeEventListener('keydown', handleCommandsKeyboardPress)
        }
    }, []);

    useEffect(() => {
        if (commandsActive) {
            inputReference.current.focus()
            window.addEventListener('click', handleCommandsEscapeClick)
            return () => {
                window.removeEventListener('keydown', handleCommandsKeyboardPress)
                window.removeEventListener('click', handleCommandsEscapeClick)
            }
        }
    }, [commandsActive])

    useEffect(() => {
        fetch(`/api/commands?search=${search}`)
            .then((response) => response.json())
            .then((data) => setActions(data))
    }, [search])

    useEffect(() => {
        window.addEventListener('keydown', handleCommandSelection)
        window.addEventListener('keydown', handleCommandRunning)
        if (actions[currentCommand]) {
            actions.forEach(action => {
                document.getElementById(action.id).classList.remove('list__item--active');
            })
            document.getElementById(actions[currentCommand].id).classList.add('list__item--active');

        }
        return () => {
            window.removeEventListener('keydown', handleCommandSelection)
        }
        return () => {
            window.removeEventListener('keydown', handleCommandRunning)
        }
    }, [actions, currentCommand])


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
            performAction(actions[currentCommand]);
        }
    }

    const handleCommandRunningClick = (e) => {
        e.preventDefault();
        actions.forEach(action => {
            if (action.id == e.target.id) {
                performAction(action);
            }
        })
    }

    const performAction = (action) => {
        if (action.perform == 'goToLink') {
            goToLink(action.link)
        }
        escapeCommands();
    }

    const goToLink = (link) => {
        window.location.href = link;
    }

    let hideClass = commandsActive ? '' : 'modal__background--hide';

    let items = actions.map(action => (
        <div key={action.id} className='list__item' id={action.id} onClick={handleCommandRunningClick}>
            {action.name}
        </div>
    ))

    return (
        <>
            <div className={`modal__background ${hideClass}`} id='modalBackground'>
                <div className="modal__container container grid">
                    <input type="text" ref={inputReference} id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="search__input" autoComplete="off" placeholder="Search" />

                    <hr className='divider' />

                    <div className="list">
                        {items}
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