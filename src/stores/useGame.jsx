import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {

        level: 1,

        maxLevel: 3,

        phase: 'ready',

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
            })
        }
    }
}))