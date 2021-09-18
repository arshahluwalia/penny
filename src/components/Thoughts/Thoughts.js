import React, { useState, useEffect } from 'react';
import "./Thoughts.css";

function Thoughts () {

    const [thoughts, setThoughts] = useState([]);
    const [currThought, setCurrThought] = useState([]);
    const [thoughtIndex, setThoughtIndex] = useState(-1);

    useEffect(() => {
        // Pull thoughts from DB
        setThoughts([
            {
                thought: 'random thought'
            },
            {
                thought: 'random thought 2'
            },
            {
                thought: 'short thought'
            },
            {
                thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies accumsan dui quis rutrum. Duis aliquam elit eget consequat volutpat. Fusce dolor tellus, fermentum in efficitur id, ultricies nec felis. Phasellus feugiat commodo rutrum. Sed tellus ligula, tristique at lorem.'
            },{
                thought: 'random thought'
            },
            {
                thought: 'random thought again'
            }
        ]);
        setCurrThought({thought: ''});
    }, []);

    useEffect(() => {
        if(thoughts.length > 0) {
            setCurrThought(thoughts[0]);
        }
    }, [thoughts]);

    useEffect(() => {
        setThoughtIndex(thoughtIndex + 1);
    }, [currThought]);

    function onNext() {
        if(thoughtIndex < thoughts.length) {
            setCurrThought(thoughts[thoughtIndex]);
        } 
        else {
            alert("Oops! Looks like you've read all thoughts. Check back in when we get more.");
        }
    };

    function onWithdraw() {
        console.log("withdraw");
        onNext();
    }

    return (
        <div className="thoughts">
            <div className="container">
                <div className="thought">
                    <div className="thought_box">
                        <p>{currThought.thought}</p>
                    </div>
                </div>
                <button className="withdraw" onClick={onWithdraw}>withdraw</button>
            </div>

            <button onClick={onNext}>next</button>
        </div>
    );
};

export default Thoughts;