import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
import { Physics } from "@react-three/rapier"
import Player from "./Player/player"

export default function Experience()
{
    return <>
        <Physics debug>
            {/* <TestObj /> */}
            <Environment /> 
            <Player />     
        </Physics>
        <Lights />
        
    </>
}