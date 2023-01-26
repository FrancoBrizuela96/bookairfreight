import React from "react";
import "./Quote.css";

const options = {
    month: "short",
    day: "numeric",
};

export const Quote = ({ quote }) => {
    if (quote)
        return (
            <div className="quote-box">
                <div className="left-side">
                    <>
                        {quote.shipping_channel === "air" ? (
                            <div className="shipping-type-container">
                                <svg
                                    fill="#3898ec"
                                    viewBox="0 0 530.436 530.436"
                                    transform="rotate(90)">
                                    <path d="M267.136,0c-31.766,0-57.519,83.269-57.519,115.035v80.502L7.667,280.73v56.705l201.951-39.006v111.445l-86.628,63.856 v56.704l143.288-50.113l141.17,50.113v-56.704l-82.795-61.947V298.595l198.117,38.838v-56.705l-198.117-84.829v-80.864 C324.652,83.269,298.902,0,267.136,0z"></path>
                                </svg>
                                <p>Traditional air freight</p>
                            </div>
                        ) : (
                            <div className="shipping-type-container">
                                <svg
                                    fill="#3898ec"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416,473.14a6.83,6.83,0,0,0-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05,10.05,0,0,0-12.72-1.51c-50.33,32.42-111.61,32.44-161.95.05a10.09,10.09,0,0,0-12.82,1.56c-10.77,11.28-35.19,33.3-62.43,47.75A7.11,7.11,0,0,0,96,472.72a6.73,6.73,0,0,0,7.92,7.15c20.85-4.18,41-13.68,60.2-23.83a8.71,8.71,0,0,1,8-.06,185.14,185.14,0,0,0,167.81,0,8.82,8.82,0,0,1,8.09.06c19.1,10,39.22,19.59,60,23.8a6.73,6.73,0,0,0,8-6.71Z"></path>
                                    <path d="M476.71,246.91h0c-3.49-8.39-10.9-14.89-20.9-18.35L432,219.08V136a64,64,0,0,0-64-64H336V64a40,40,0,0,0-40-40H216a40,40,0,0,0-40,40v8H144a64,64,0,0,0-64,64v83.15l-23.58,9.39c-9.94,3.3-17.63,10-21.15,18.44-2.45,5.89-5.25,15-1.3,26.46l.1.3L80.73,393.18A23.33,23.33,0,0,0,102.58,408c.5,0,1,0,1.53-.05,31.32-2,56-17.27,72.6-31.61C200.42,396.81,228.31,408,256,408s55.43-11.2,79.14-31.7c16.59,14.36,41.3,29.67,72.61,31.65a23.36,23.36,0,0,0,23.37-14.74l46.65-119C481.05,266.12,480.67,256.45,476.71,246.91ZM269,154.21l-1.14-.4a39.53,39.53,0,0,0-23.73,0l-.58.18L117.48,204.22A4,4,0,0,1,112,200.5V136a32,32,0,0,1,32-32H368a32,32,0,0,1,32,32v64.44a4,4,0,0,1-5.48,3.72Z"></path>
                                </svg>
                                <p>Traditional ocean freight</p>
                            </div>
                        )}
                    </>
                    <div className="info-container">
                        <span className="days-delivery">
                            {quote.initial_day} - {quote.final_day}
                        </span>
                        <span className="delivery">Estimated delivery</span>
                        {/* <b className="delivery">Sep 20 - Sept 26</b> */}
                        <b className="delivery">
                            {`${quote.initial_date.toLocaleDateString(
                                "en-US",
                                options
                            )} - ${quote.final_date.toLocaleDateString(
                                "en-US",
                                options
                            )}`}
                        </b>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-header">{`${quote.starting_country} -> ${quote.destination_country}`}</div>
                    <div className="right-body">US$ {quote.quota_price}</div>
                </div>
            </div>
        );
};