import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {

        pageStatus: 'load',

        popUp: false,

        level: 1,

        lossCount: 0,

        maxLevel: 3,

        phase: 'ready',

        died: () => 
        {
            set((state) => 
            {
                if(state.phase === 'playing' && state.lossCount < 3)
                {
                    return {lossCount: state.lossCount + 1}
                }

                return {}
            })
        },

        start: () =>
        {
            set((state) =>
            {
                if(state.phase === 'ready')
                {
                    return {phase: 'playing'}
                }

                return {}
            })
        },

        restart: () =>
        {
            set((state) =>
            {
                if(state.phase === 'playing')
                {
                    return {phase: 'ready'}
                }

                return {}
            })
        },

        end: () =>
        {
            set((state) =>
            {

                if(state.phase === 'playing')
                {
                    return {phase: 'ended', popUp: true}
                }

                return {}
            })
        },

        restartLevel: () =>
        {
            set((state) => 
            {
                if(state.popUp === true)
                {
                    return {phase: 'ready',
                            popUp: false    
                    }
                }
            })
        },

        levelUp: () =>
        {
            set((state) => 
            {
                if(state.popUp === true)
                {
                    return {level: state.level + 1,
                            phase: 'ready',
                            popUp: false
                        }
                }

                return {}
            })
        },

        gameOver: () => 
        {
            set((state) =>
            {
                if(state.lossCount === 3)
                {
                    return {
                        level: 1,
                        lossCount: 0,
                        
                    }
                } else {
                    return {
                        level: 1,
                        lossCount: 0,
                        phase: 'ready',
                        popUp: false
                    }
                }

                return {}
            })
        },

        startGame: () => {
            set((state) => 
            {
                if(state.pageStatus === 'load'){
                    return {pageStatus: 'playing'}
                }
            })
        }
    }
}))