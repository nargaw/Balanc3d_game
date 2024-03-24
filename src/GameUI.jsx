import useGame from "./stores/useGame"

export default function GameUI()
{

    const level = useGame(state => state.level)
    const lossCount = useGame(state => state.lossCount)

    const titleStyle = {
        fontFamily: 'MadimiOne, sans-serif',
        position: 'fixed',
        zIndex: 2,
        top: '25px',
        left: '25px',
        fontSize: '40px',
        color:'#e9c46a' ,
    }

    const livesStyle = {
        display: 'flex',
        zIndex: 2,
        bottom: '35px',
        left: '25px',
        position: 'fixed',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
    }

    
    const span1Style = {
        width: '50px',
        height: '50px',
        backgroundColor:  lossCount > 0 ? '#E6D69A25' : '#E6D69A',
        borderRadius: '50%'
    }

    const span2Style = {
        width: '50px',
        height: '50px',
        backgroundColor: lossCount > 1 ? '#E6D69A25' : '#E6D69A',
        borderRadius: '50%'
    }

    const span3Style = {
        width: '50px',
        height: '50px',
        backgroundColor: lossCount > 2 ? '#E6D69A25' : '#E6D69A',
        borderRadius: '50%'

    }

    const levelStyle = {
        fontFamily: 'MadimiOne, sans-serif',
        position: 'fixed',
        zIndex: 2,
        bottom: '25px',
        right: '25px',
        fontSize: '40px',
        color: '#e9c46a',
    }

    return <>
        <div style={titleStyle}>Balanc3d</div>
        <div style={livesStyle}>
            <span style={span1Style}></span>
            <span style={span2Style}></span>
            <span style={span3Style}></span>
        </div>
        <div style={levelStyle}>{level}</div>
    </>
}