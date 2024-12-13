import React from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = userState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={this.handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨": "확인하기"}
        </button>
    );
}

export default ConfirmButton;