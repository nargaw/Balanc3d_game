import Environment from "./Environment"
import Lights from "./Lights"
import { Physics } from "@react-three/rapier"
import Player from "./Player/player.jsx"
import useGame from "./stores/useGame.jsx"

export default function Experience()
{

    const pageStatus = useGame(state => state.pageStatus)
    // console.log(pageStatus)

    return <>
        
        <Physics>
            {pageStatus === 'playing' && <Environment />}
            {/* <Environment />  */}
            {pageStatus === 'playing' && <Player />}    
        </Physics>
        <Lights />  
    </>
}