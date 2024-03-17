import { Grid, Stage } from "@react-three/drei";
import { useControls } from "leva";
import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";
import Level4 from "./Levels/Level4";
import Level5 from "./Levels/Level5";

export default function Environment(){

    const {wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor} = useControls({
        wallColor: '#264653',
        floorColor: '#287271',
        startFloorColor: '#2a9d8f',
        finishFloorColor: '#e76f51',
        movingPlatformColor: '#e9c46a',
        startTextColor: '#8ab17d',
        finishTextColor: '#f4a261'
    })

    return <>
        {/* <Grid 
            args={[300, 300]}
            sectionColor={"gray"}
            cellColor={"gray"}
            position={[0.5, 0.005, 0.5]}
        /> */}
        <Level1 wallColor={wallColor} floorColor={floorColor} startFloorColor={startFloorColor} finishFloorColor={finishFloorColor} startTextColor={startTextColor} finishTextColor={finishTextColor}/>
        <Level2 wallColor={wallColor} floorColor={floorColor} startFloorColor={startFloorColor} finishFloorColor={finishFloorColor} startTextColor={startTextColor} finishTextColor={finishTextColor}/>
        <Level3 wallColor={wallColor} floorColor={floorColor} startFloorColor={startFloorColor} finishFloorColor={finishFloorColor} startTextColor={startTextColor} finishTextColor={finishTextColor}/>
        <Level4 wallColor={wallColor} floorColor={floorColor} startFloorColor={startFloorColor} finishFloorColor={finishFloorColor} movingPlatformColor={movingPlatformColor} startTextColor={startTextColor} finishTextColor={finishTextColor}/>
        <Level5 wallColor={wallColor} floorColor={floorColor} startFloorColor={startFloorColor} finishFloorColor={finishFloorColor} movingPlatformColor={movingPlatformColor} startTextColor={startTextColor} finishTextColor={finishTextColor}/>
    </>
}