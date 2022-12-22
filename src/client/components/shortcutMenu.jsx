import Button from './button.jsx';

const ShortcutMenu = () => {

    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    let action;
    let cmd;
    let hotkey;

    if (isMobile) {
        action = 'Tap ';
    } else {
        action = 'Press ';
        if (isMac) {
            cmd = <i className='bx bx-command command__container'></i>;
        } else {
            cmd = <span className='command__container'>ctrl</span>;
        }
        hotkey = (
            <div className="flex">
                {cmd}
                <span className="command__container">K</span>
            </div>
        );
    }

    const dispatchHotkey = () => {
        window.dispatchEvent(new KeyboardEvent('keydown', { 'metaKey': 'true', 'key': 'k' }));
    }

    return (
        <>
            <span className='button button--flex button--link' link='true' onClick={dispatchHotkey}>
                {action}
                {hotkey}
                for shortcuts
                <i className='bx bx-right-arrow-alt'></i>
            </span>
        </>
    )
}

export default ShortcutMenu