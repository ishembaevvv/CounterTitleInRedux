export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const RESET_COUNT = "RESET_COUNT";

export const increase_count = () => ({
    type: INCREASE_COUNT
})
export const decrease_count = () => ({
    type: DECREASE_COUNT
})
export const reset_count = () => ({
    type: RESET_COUNT
})
