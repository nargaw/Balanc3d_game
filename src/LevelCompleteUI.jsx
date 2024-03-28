import useGame from "./stores/useGame"

export default function LevelCompleteUI()
{


    const restartLevel = useGame(state => state.restartLevel)
    const levelUp = useGame(state => state.levelUp)
    const level = useGame(state => state.level)
    const gameOver = useGame(state => state.gameOver)
    console.log(level)    

    const containerStyle = {
        zIndex: '2',
        width: '300px',
        height: '400px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#19191995',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        fontFamily: 'MadimiOne, sans-serif',
    }

    const titleStyle = {
        fontSize: '35px',
        margin: 0,
        color:'#e9c46a'
    }

    const levelNumberStyle = {
        fontSize: '85px',
        margin: 0,
        color:'#e9c46a'
    }

    const buttonContainerStyle = {
        display: 'flex',
        gap: '40px',
        
    }

    const buttonStyle = {
        fontFamily: 'MadimiOne, sans-serif',
        color:'#e9c46a',
        backgroundColor: '#264653',
    }


    return <>
        <div style={containerStyle}>
            <p style={titleStyle}>Level</p>
            <p style={levelNumberStyle}>{level}</p>
            <p style={titleStyle}>Completed</p>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle} onClick={restartLevel}>replay</button>
                {level < 10 && <button style={buttonStyle} onClick={levelUp}>next</button>}
                {level === 10 && <button style={buttonStyle} onClick={gameOver}>restart</button>}
            </div>
        </div>
    </>
}