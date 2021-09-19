import React, { useState, useEffect } from 'react';
import "./Thoughts.css";

function Thoughts () {

    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // Pull thoughts from DB
        setThoughts([
            {
                thought: 'people who back into parking lots like what do you have to prove',
                saves: 428
            },
            {
                thought: 'random thought 2',
                saves: 428
            },
            {
                thought: 'sometimes i sleep all day and still be sleepy',
                saves: 428
            },
            {
                thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies accumsan dui quis rutrum. Duis aliquam elit eget consequat volutpat. Fusce dolor tellus, fermentum in efficitur id, ultricies nec felis. Phasellus feugiat commodo rutrum. Sed tellus ligula, tristique at lorem.',
                saves: 428
            },
            {
                thought: 'pineapple on pizza slander will not be tolerated in this house',
                saves: 428
            },
            {
                thought: 'oct-dec is the best time of the year',
                saves: 428
            },
            {
                thought: 'people who back into parking lots like what do you have to prove',
                saves: 428
            },
            {
                thought: 'random thought 2',
                saves: 428
            },
            {
                thought: 'sometimes i sleep all day and still be sleepy',
                saves: 428
            },
            {
                thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies accumsan dui quis rutrum. Duis aliquam elit eget consequat volutpat. Fusce dolor tellus, fermentum in efficitur id, ultricies nec felis. Phasellus feugiat commodo rutrum. Sed tellus ligula, tristique at lorem.',
                saves: 428
            },
            {
                thought: 'pineapple on pizza slander will not be tolerated in this house',
                saves: 428
            },
            {
                thought: 'oct-dec is the best time of the year',
                saves: 428
            }
        ]);
    }, []);

    function onWithdraw(obj) {
        console.log("withdraw");
        console.log(obj);
    }

    return (
        <div className="thoughts">
            <div className="container">
                {thoughts.map((thought, i) => {
                    return (<div key={i} className="thought">
                        <p>{thought.thought}</p>
                        <div className="saves">
                            <button className="withdraw" onClick={onWithdraw}>Withdraw</button>
                            <p>{thought.saves}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Thoughts;