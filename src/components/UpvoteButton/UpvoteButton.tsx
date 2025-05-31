import React from "react";

type UpvoteButtonProps = {
    selected: boolean;
    onToggle: () => void,     
}

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ selected, onToggle }) => {
    return (
        <button
            onClick={onToggle}
              aria-pressed={selected}
        >
            {selected ? "Upvoted" : "Upvote"}
        </button>
    );
};

export default UpvoteButton;