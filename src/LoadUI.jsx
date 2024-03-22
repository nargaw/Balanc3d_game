import useGame from "./stores/useGame"
import platform from "platform"

export default function LoadUI()
{

    const pageStatus = useGame(state => state.pageStatus)
    const changeStartGame = useGame(state => state.startGame)

    const askPermissionOnSafari = () => {
        platform.name == 'Safari' ? DeviceOrientationEvent.requestPermission() : console.log('not safari')
    }
    // {platform.name == 'Safari' ? DeviceOrientationEvent.requestPermission() : console.log('not safari')}

    const startGame = () => {
        askPermissionOnSafari()
        changeStartGame()
    }
    
    //style
    const UIstyle = {
        fontFamily: 'MadimiOne, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2'
    }

    const titleStyle = {
        color: '#e9c46a',
        flex: '400px',
        textAlign: 'center',
        fontSize: '46px'
        // boxShadow: '10px 5px 5px #264653'
    }

    const buttonStyle = {
        fontFamily: 'MadimiOne, sans-serif',
        backgroundColor: '#e9c46a',
        borderRadius: '50px',
        flex: '50px',
        width: '200px',
        justifyContent: 'center',
        fontSize: '24px'
    }

    return <>
        <div className="UIpage" style={UIstyle}>
            <div className="title" style={titleStyle}>Balanc3d</div>

            <div className="animation"></div>

            <button style={buttonStyle} className="startGameButton" onClick={startGame}>Start</button>

        </div>
        
    </>
}