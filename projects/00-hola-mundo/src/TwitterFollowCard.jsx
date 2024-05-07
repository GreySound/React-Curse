import { useState } from "react"

export function TwitterFollowCard ({ children, userName = 'unknow' }) { //Las props deben ser inmutables. 2.- De aqui mandamos al hook: *isFollowing*
    const [isFollowing, setIsFollowing] = useState(false) //El foco esta apagado. 

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing) //Encender y apagar el foco de acuerdo al estado
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
           <img 
            className='tw-followCard-avatar'
            alt = 'El avatar' 
            src = {`https://unavatar.io/${userName}`}/> 
           <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUsername'>@{userName}</span>
           </div>
        </header>

        <aside>  
            <button className={buttonClassName} onClick={handleClick}>
                {/*Follow <-- esto lo cambiamos por la evaluacion siguiente:*/} 
                {text}
            </button>
        </aside>
    </article>
    )
    // aside Elemento que envuelve un boton
    // button Elemento que envuelve un texto -- Children
}