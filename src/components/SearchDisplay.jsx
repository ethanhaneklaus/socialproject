import React from "react";


function DataDisplay({ data, isLikes, add, remove }) {
    const { data_id, title, url } = data;
    return (
        <div>
            <h5>{title}</h5>
            <img src={url} alt={title} />
            {isLikes && (
                <button
                    onClick={() => remove(data_id)}
                >
                    Remove Likes
                </button>
            )}
            {!isLikes && (
                <button
                    onClick={() => add(data)}
                >
                    Add Likes
                </button>
            )}
        </div>
    );
}

export default DataDisplay;