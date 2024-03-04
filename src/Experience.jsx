import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import { Physics } from "@react-three/rapier"
import Player from "./Player/player.jsx"

export default function Experience()
{
    return <>
        <Physics debug>
            <Environment /> 
            <Player />     
        </Physics>
        <Lights />  
    </>
}