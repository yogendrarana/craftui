"use client";

import { useState } from "react";

export default function GradientCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className=" bg-gray-100">
            <div className="checkbox-wrapper-25">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="appearance-none h-[25px] w-[75px] rounded-[25px] cursor-pointer transition-all duration-250 ease-in-out"
                />
            </div>

            <style jsx>{`
                .checkbox-wrapper-25 input[type="checkbox"] {
                    background-image: -webkit-linear-gradient(
                            hsla(0, 0%, 0%, 0.1),
                            hsla(0, 0%, 100%, 0.1)
                        ),
                        -webkit-linear-gradient(left, #f66 50%, #6cf 50%);
                    background-size: 100% 100%, 200% 100%;
                    background-position: 0 0, 15px 0;
                    box-shadow: inset 0 1px 4px hsla(0, 0%, 0%, 0.5),
                        inset 0 0 10px hsla(0, 0%, 0%, 0.5), 0 0 0 1px hsla(0, 0%, 0%, 0.1),
                        0 -1px 2px 2px hsla(0, 0%, 0%, 0.25), 0 2px 2px 2px hsla(0, 0%, 100%, 0.75);
                    padding-right: 25px;
                }

                .checkbox-wrapper-25 input[type="checkbox"]:after {
                    background-color: #eee;
                    background-image: -webkit-linear-gradient(
                        hsla(0, 0%, 100%, 0.1),
                        hsla(0, 0%, 0%, 0.1)
                    );
                    border-radius: 25px;
                    box-shadow: inset 0 1px 1px 1px hsla(0, 0%, 100%, 1),
                        inset 0 -1px 1px 1px hsla(0, 0%, 0%, 0.25),
                        0 1px 3px 1px hsla(0, 0%, 0%, 0.5), 0 0 2px hsla(0, 0%, 0%, 0.25);
                    content: "";
                    display: block;
                    height: 25px;
                    width: 50px;
                }

                .checkbox-wrapper-25 input[type="checkbox"]:checked {
                    background-position: 0 0, 35px 0;
                    padding-left: 25px;
                    padding-right: 0;
                }
            `}</style>
        </div>
    );
}
