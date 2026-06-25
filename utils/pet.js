import { petStates } from "@/data/pet-states";

export function getPetState(score) {
    for (const state of petStates) {
        if (score >= state.scoreMin && score <= state.scoreMax) {
            return state;
        }
    }
    return null;
}