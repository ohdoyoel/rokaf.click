import { useEffect } from "react";
import { CharacterImage } from "../../atoms/CharacterImage";

interface CharacterButtonProps {
    id: number;
    size?: number;
    onClick?: () => void;
}

export const CharacterButton = ({id, size, onClick}: CharacterButtonProps) => {
    useEffect(() => {
        var btn = document.getElementById("clickBtn");
        btn && btn.addEventListener("keypress", (event) => {
            // If the user presses the "Enter" key on the keyboard
            if (event.code == "Enter" || event.code == "Space") {
                event.preventDefault();
            }
        });
    })

    // input.addEventListener("keypress", function(event) {
    // // If the user presses the "Enter" key on the keyboard
    // if (event.key === "Enter") {
    //     // Cancel the default action, if needed
    //     event.preventDefault();
    //     // Trigger the button element with a click
    //     document.getElementById("myBtn").click();
    // }
    // });

    return (
        <button id="clickBtn" onClick={onClick}>
            <CharacterImage id={id} size={size}/>
        </button>
    )
}