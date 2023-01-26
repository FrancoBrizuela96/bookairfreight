import React, { useState } from "react";

export const FormInput = (props) => {
    const { label, id, onChange, error, ...inputProps } = props;
    const [showError, setShowError] = useState(false);

    return (
        <div className="input-container">
            <label>{label}</label>
            <input
                onChange={(e) => {
                    if (showError) setShowError(false);
                    onChange(e);
                }}
                {...inputProps}
                onInvalid={() => setShowError(true)}
            />
            {showError ? <span className="error-message">{error}</span> : null}
        </div>
    );
};
