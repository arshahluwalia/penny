import React, { useState, useEffect } from 'react';
import "./Home.css";
import pig from '../pig.svg';

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
                thought: 'people who back into parking lots like what do you have to prove',
                saves: 428
            },
            {
                thought: 'true love is when your pets know you’re sad and come cuddle with you',
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
                thought: 'being a sleepy person with a busy life is so hard',
                saves: 428
            },
            {
                thought: 'grind now so that your dogs can have the background they deserve',
                saves: 428
            },
            {
                thought: 'money been buying my happiness so y’all definitely lied',
                saves: 428
            }
        ]);
    }, []);

    return (
        <div className="home">
            <div className="left_panel">
                <h1>{welcome}
                    <svg width="40" height="40" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12.8523C8.01815 17.5344 10.0188 22.0197 12.6527 26.3757C13.7248 28.1489 14.8339 29.4014 14.8339 31.5016" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M28.5752 5C31.8639 10.1386 35.9102 16.6724 37.4091 22.6677" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M10.9077 53.0955C22.6175 57.8352 33.554 56.5784 44.4982 50.1509C56.9915 42.8135 63.345 33.7651 66.8555 19.7231" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                    </svg>
                </h1>
                <div className="thought_of_day">
                    <img src={pig} alt="piggy bank"></img>
                    <h1>Thought of the day</h1>
                    {thoughts.map((thought, i) => {
                        if(i === 0) return <p key={i}>{thought.thought}</p>
                        else return null;
                    })}
                </div>
            </div>

            <div className="right_panel">
                <h1 className="trending">
                    <svg width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2451 0C17.495 0.03675 26.5866 5.20421 28.2832 17.4726C30.1309 15.6575 31.1599 9.99192 30.625 7.58479C38.6937 13.6465 42.875 21.4293 42.875 30.1125C42.875 40.5128 35.8721 49 24.5755 49C12.8809 49 6.125 41.3376 6.125 32.1032C6.125 19.3223 16.4395 16.5457 15.2451 0ZM21.905 40.3086C20.3758 42.04 21.1537 44.2797 23.4628 44.4838C25.576 44.6737 27.0541 42.826 27.6115 40.8252C28.1689 38.8284 27.7952 36.701 26.8581 34.9186C24.8205 38.0118 23.7548 38.267 21.905 40.3086ZM30.9292 43.5916C36.013 41.2519 38.7937 36.0722 38.7937 30.1575C38.7937 25.3432 36.8745 19.9961 33.6895 15.7841C32.1726 21.6376 27.7197 23.9059 24.5 24.5C24.6021 17.9279 23.8507 11.9376 19.1876 7.27242C18.5833 16.9336 10.3655 22.8503 10.2083 32.0052C10.1491 35.0901 11.2578 38.5446 13.7404 41.0191C14.7429 42.0175 15.8923 42.7974 17.1378 43.3875C16.8907 42.1461 17.0112 40.8272 17.5359 39.6145C19.3958 35.3147 24.3408 34.8758 26.115 27.8667C28.0586 29.3959 32.8014 35.0187 31.7867 40.8476C31.6193 41.8052 31.3294 42.7321 30.9292 43.5916Z" fill="#624ECE"/>
                    </svg>
                     Trending thoughts
                </h1>
                <div className="trending_thoughts">
                    {thoughts.map((thought, i) => {
                        return (
                            <div key={i} className="trending">
                                <p>{thought.thought}</p>
                            </div>
                        )
                    })}
                </div>
                <h1 className="suggested">
                    <svg width="42" height="25" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 6.4338C15.491 -3.01971 0 -0.259955 0 11.5858C0 19.7425 9.74925 28.083 21 39.2498C32.2525 28.083 42 19.7425 42 11.5858C42 -0.300205 26.4688 -2.94971 21 6.4338Z" fill="#F47865"/>
                    </svg>
                    You might also like
                </h1>
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