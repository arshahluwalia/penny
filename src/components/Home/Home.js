import React, { useState, useEffect } from 'react';
import "./Home.css";

function Home () {
    
    const [thoughts, setThoughts] = useState([]);
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        let time = new Date();

        if(time.getHours() < 12) {
            setWelcome("Good morning");
        } else if(time.getHours() < 17){
            setWelcome("Good afternoon");
        } else {
            setWelcome("Good evening");
        }

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
    }, []);

    return (
        <div className="home">
            <div className="left_panel">
                <h1>{welcome}</h1>
                <div className="thought_of_day">
                    <h1>Thought of the day</h1>
                    {thoughts.map((thought, i) => {
                        if(i === 0) return <p key={i}>{thought.thought}</p>
                        else return null;
                    })}
                </div>
            </div>

            <div className="right_panel">
                <h1 className="trending">Trending thoughts</h1>
                <div className="trending_thoughts">
                    {thoughts.map((thought, i) => {
                        return (
                            <div key={i} className="trending">
                                <p>{thought.thought}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 className="suggested">You might also like</h1>
                <div className="suggested_thoughts">
                    {thoughts.map((thought, i) => {
                        return (
                            <div key={i} className="suggested">
                                <p>{thought.thought}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;