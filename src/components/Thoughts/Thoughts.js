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
                thought: 'true love is when your pets know you’re sad and come cuddle with you',
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
                thought: 'being a sleepy person with a busy life is so hard',
                saves: 428
            },
            {
                thought: 'do you ever just sit with your laptop open but u just use ur phone',
                saves: 428
            },
            {
                thought: 'grind now so that your dogs can have the background they deserve',
                saves: 428
            },
            {
                thought: 'first they’ll give your butterflies then mental trauma',
                saves: 428
            },
            {
                thought: 'money been buying my happiness so y’all definitely lied',
                saves: 428
            },
            {
                thought: 'people who back into parking lots like what do you have to prove',
                saves: 428
            },
            {
                thought: 'true love is when your pets know you’re sad and come cuddle with you',
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
                thought: 'being a sleepy person with a busy life is so hard',
                saves: 428
            },
            {
                thought: 'do you ever just sit with your laptop open but u just use ur phone',
                saves: 428
            },
            {
                thought: 'grind now so that your dogs can have the background they deserve',
                saves: 428
            },
            {
                thought: 'first they’ll give your butterflies then mental trauma',
                saves: 428
            },
            {
                thought: 'money been buying my happiness so y’all definitely lied',
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
                            <div className="num_saves">
                                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.9167 19C20.6711 19 16.4167 23.2544 16.4167 28.5C16.4167 33.7456 20.6711 38 25.9167 38C31.1623 38 35.4167 33.7456 35.4167 28.5C35.4167 23.2544 31.1623 19 25.9167 19ZM26.7084 32.4172V33.25H25.9167V32.4599C25.0965 32.4457 24.2495 32.2509 23.5417 31.8852L23.9027 30.5837C24.6595 30.8782 25.6665 31.1901 26.455 31.0112C27.3639 30.8053 27.5507 29.8696 26.5453 29.4199C25.809 29.0763 23.5544 28.7834 23.5544 26.8517C23.5544 25.7735 24.3777 24.8061 25.9167 24.5955V23.75H26.7084V24.5559C27.2815 24.5718 27.9244 24.6715 28.6416 24.8884L28.355 26.1931C27.747 25.9793 27.0757 25.7862 26.4202 25.8258C25.2422 25.8938 25.1377 26.9151 25.961 27.3426C27.3164 27.9791 29.0834 28.4509 29.0834 30.1498C29.085 31.5083 28.0194 32.2319 26.7084 32.4172ZM29.2797 16.3004C31.072 15.9473 32.7029 15.3092 33.8334 14.4052V15.4375C33.8334 16.2276 33.2222 16.9496 32.239 17.5402C31.319 17.0066 30.3263 16.5902 29.2797 16.3004ZM25.9167 7.125C30.149 7.125 33.8334 5.53058 33.8334 3.5625C33.8334 1.59442 30.149 0 25.9167 0C21.686 0 18 1.59442 18 3.5625C18 5.53058 21.686 7.125 25.9167 7.125ZM26.064 3.94408C25.5905 3.80158 24.1418 3.68125 24.1418 2.87533C24.1418 2.42567 24.6706 2.02508 25.6586 1.93642V1.58333H26.1669V1.91742C26.5374 1.92533 26.949 1.96492 27.4082 2.05992L27.2245 2.60142C26.8746 2.52067 26.4851 2.44467 26.1035 2.44467L25.9895 2.44625C25.2264 2.47792 25.1646 2.90067 25.6919 3.078C26.558 3.34558 27.698 3.54033 27.698 4.24967C27.698 4.81492 27.0108 5.11733 26.1669 5.19333V5.54167H25.6586V5.21233C25.1393 5.20758 24.5883 5.12367 24.1355 4.97167L24.3682 4.42858C24.7545 4.52833 25.2422 4.62808 25.6792 4.62808L26.0085 4.60592C26.5928 4.522 26.71 4.13092 26.064 3.94408ZM8.50004 24.5417C10.788 24.5417 12.8938 24.0651 14.3663 23.3257C14.8587 22.2332 15.4968 21.2214 16.2631 20.3189C15.549 18.6675 12.243 17.4167 8.50004 17.4167C4.26937 17.4167 0.583374 19.0111 0.583374 20.9792C0.583374 22.9473 4.26937 24.5417 8.50004 24.5417ZM8.64729 21.3608C8.17387 21.2183 6.72512 21.0979 6.72512 20.292C6.72512 19.8423 7.25554 19.4417 8.24196 19.3531V19H8.75021V19.3341C9.12071 19.342 9.53237 19.3816 9.99154 19.4766L9.80629 20.0181C9.45796 19.9373 9.06846 19.8613 8.68687 19.8613L8.57287 19.8629C7.80971 19.8946 7.74954 20.3173 8.27521 20.4947C9.14129 20.7623 10.2813 20.957 10.2813 21.6663C10.2813 22.2316 9.59412 22.534 8.75021 22.61V22.9583H8.24196V22.629C7.72104 22.6243 7.17162 22.5403 6.71879 22.3883L6.95154 21.8453C7.33787 21.945 7.82554 22.0448 8.26254 22.0448L8.59187 22.0226C9.17454 21.9387 9.29329 21.5476 8.64729 21.3608ZM14.9854 34.8682C13.5303 35.8023 11.122 36.4167 8.50004 36.4167C4.26937 36.4167 0.583374 34.8223 0.583374 32.8542V31.8218C2.39787 33.2753 5.50596 34.0417 8.50004 34.0417C10.457 34.0417 12.4568 33.7076 14.1193 33.0742C14.3615 33.6981 14.6513 34.2982 14.9854 34.8682ZM0.583374 28.8958V27.8651C2.39787 29.317 5.50596 30.0833 8.50004 30.0833C10.1451 30.0833 11.8155 29.8443 13.2944 29.3946C13.3466 30.1372 13.4638 30.8608 13.6395 31.5637C12.2335 32.1132 10.4349 32.4583 8.50004 32.4583C4.26937 32.4583 0.583374 30.8639 0.583374 28.8958ZM0.583374 24.9375V23.9052C2.39787 25.3587 5.50596 26.125 8.50004 26.125C10.2845 26.125 12.1021 25.8463 13.6712 25.3191C13.4685 26.0997 13.3387 26.9056 13.2896 27.7353C11.9375 28.2071 10.2765 28.5 8.50004 28.5C4.26937 28.5 0.583374 26.9056 0.583374 24.9375ZM18 7.52083V6.4885C19.8145 7.942 22.9226 8.70833 25.9167 8.70833C28.9124 8.70833 32.0189 7.942 33.8334 6.4885V7.52083C33.8334 9.48892 30.149 11.0833 25.9167 11.0833C21.686 11.0833 18 9.48892 18 7.52083ZM18 15.4375V14.4052C19.129 15.3092 20.7614 15.9473 22.5537 16.3004C21.5071 16.5902 20.516 17.0066 19.596 17.5402C18.6112 16.9496 18 16.2276 18 15.4375ZM18 11.4792V10.4484C19.8145 11.9003 22.9226 12.6667 25.9167 12.6667C28.9124 12.6667 32.0189 11.9003 33.8334 10.4484V11.4792C33.8334 13.4473 30.149 15.0417 25.9167 15.0417C21.686 15.0417 18 13.4473 18 11.4792Z" fill="#F47865"/>
                                </svg>
                                <p>{thought.saves}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Thoughts;