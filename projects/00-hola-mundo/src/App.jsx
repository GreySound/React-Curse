import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// Un componente es una funcion que devuelve un elemento,
// El "Elemento" es lo que renderiza

export function App () {
    return (
        <section className="App"> {/* Esto es React.Fragment */}
        <TwitterFollowCard isFollowing userName="midudev" >
            Miguel Ángel Durán 
        </TwitterFollowCard> {/*Reemplazamos name = '' por propiedad children*/}
        <TwitterFollowCard ></TwitterFollowCard>
        <TwitterFollowCard  userName="GreySound"> {/*isFollowing = {false}*/}
            Ivan Millan
        </TwitterFollowCard>
       {/*<TwitterFollowCard isFollowing = {false}  userName="charly ~" name= "Carlos Lopez"/>*/}
        </section>
        
    )
}