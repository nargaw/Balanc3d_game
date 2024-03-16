import Environment from "./Environment"
import Lights from "./Lights"
import { Physics } from "@react-three/rapier"
import Player from "./Player/player.jsx"

export default function Experience()
{
    return <>
        <Physics>
            <Environment /> 
            <Player />     
        </Physics>
        <Lights />  
    </>
}