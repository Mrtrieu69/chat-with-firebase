import React, { useState } from "react";
import Attach from "../assets/images/attach.png";
import Img from "../assets/images/img.png";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const handleSend = () => {};

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <div className="send">
                <img src={Attach} alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Input;
