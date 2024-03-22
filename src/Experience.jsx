import Environment from "./Environment"
import Lights from "./Lights"
import { Physics } from "@react-three/rapier"
import Player from "./Player/player.jsx"
import useGame from "./stores/useGame.jsx"
import LoadExperience from "./LoadExperience.jsx"

export default function Experience()
{

    const pageStatus = useGame(state => state.pageStatus)
    // console.log(pageStatus)

    return <>
        
        <Physics>
            {pageStatus === 'load' && <LoadExperience />}
            {pageStatus === 'playing' && <Environment />}
            {/* <Environment />  */}
            {pageStatus === 'playing' && <Player />}    
        </Physics>
        <Lights />  
    </>
}