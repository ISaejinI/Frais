import { getPetState } from "@/utils/pet";

export default function PetQuote({ score }) {
    const petState = getPetState(score);

    return (
        <div className="p-2 rounded-sm bg-white">
            <p className="text-lg/normal">
                {petState.descBeforeAction}
            </p>
        </div>
    )
}