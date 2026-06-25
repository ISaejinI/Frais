import { getPetState } from "@/utils/pet";

export default function PetQuote({ score }) {
    const petState = getPetState(score);

    return (
        <div className="p-3 rounded-2xl bg-white">
            <p className="text-s text-black">
                {petState.descBeforeAction}
            </p>
        </div>
    )
}