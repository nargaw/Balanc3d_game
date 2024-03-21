import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {

        pageStatus: 'load',

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
                    return {phase: 'ended'}
                }

                return {}
            })
        },

        levelUp: () =>
        {
            set((state) => 
            {
                if(state.phase === 'ended')
                {
                    return {level: state.level + 1,
                            phase: 'ready'}
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
                        lossCount: 0
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