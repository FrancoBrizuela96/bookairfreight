import React, { useState } from "react";
import { getDeliveryData } from "../../helpers/getDeliveryData";
import { FormInput } from "../FormInput";

const INITIAL_STATE = {
    starting_country: "",
    destination_country: "",
    quota_price: "",
    shipping_channel: "ocean",
};

const inputs = [
    {
        id: 0,
        label: "Starting country",
        name: "starting_country",
        error: "Starting country should be at least 3 characters and shouldn't include numbers or special characters!",
        type: "text",
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
    },
    {
        id: 1,
        label: "Destination country",
        name: "destination_country",
        error: "Destination country should be at least 3 characters and shouldn't include numbers or special characters!",
        type: "text",
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
    },
    {
        id: 2,
        label: "Quota price",
        name: "quota_price",
        error: "Quota price should not be empty or equal to 0!",
        type: "text",
        pattern: "^[1-9][0-9]*$",
        required: true,
    },
];

export const QuoteForm = ({ setCurrentQuote }) => {
    const [form, setForm] = useState(INITIAL_STATE);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = getDeliveryData(form);

        setCurrentQuote(data);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {inputs.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={form[input.name]}
                    onChange={handleInputChange}
                    error={input.error}
                />
            ))}
            <div className="input-container">
                <label>Shipping channel</label>
                <select
                    value={form.shipping_channel}
                    name="shipping_channel"
                    onChange={handleInputChange}>
                    <option value="air">Air</option>
                    <option value="ocean">Ocean</option>
                </select>
            </div>
            <button type="submit">Create quote</button>
        </form>
    );
};
