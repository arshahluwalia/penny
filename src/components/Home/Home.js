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
                thought: 'true love is when your pets know you\'re sad and come cuddle with you'
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
                <h1>{welcome} 
                    <svg width="40" height="40" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12.8523C8.01815 17.5344 10.0188 22.0197 12.6527 26.3757C13.7248 28.1489 14.8339 29.4014 14.8339 31.5016" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M28.5752 5C31.8639 10.1386 35.9102 16.6724 37.4091 22.6677" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M10.9077 53.0955C22.6175 57.8352 33.554 56.5784 44.4982 50.1509C56.9915 42.8135 63.345 33.7651 66.8555 19.7231" stroke="#F47865" strokeWidth="10" strokeLinecap="round"/>
                    </svg>
                </h1>
                <div className="thought_of_day">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhITEBEVFRUVEhgVFRcXFRcXGBUWFRIXGBcZGBcYHSggGBomGxgVITEiJSkrLjAuGB8zODMsNykuLisBCgoKDg0OGhAQGy8lICYtKy0rLS0vMC0uLS8tKy0rKy0rLS0tLS0tLTUtKy0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAOUA3QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xAA/EAACAQIDBQUGAwYEBwAAAAAAAQIDEQQSIQUxQVFhInGBkaEGEzKxwdFS4fAzQmJygpIUFbLxByM0Q3ODwv/EABoBAQACAwEAAAAAAAAAAAAAAAABAwIEBQb/xAAzEQACAQIDBQYFBAMBAAAAAAAAAQIDEQQhMRJBYXGRBRNRgbHBIlKh0fAjMuHxQnKCFP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAEDbGPjh6M6sley7K/FJu0Y+LaIlJRTb0RKTbsiJt3bsMNaL7VSSuo62SvbNNpPLHwu+HG3Oy29Ope+Ii9dPdVVSt0SqQ+bZQVcQ5TlOpOLnN3k/eVITvytayS3JckT9k4N1pPPOfu4K83njNNPRRjZaSb67rnl63aVatU2YZR3Z2yzze+1s+C5XOtDDQpxu83+aexeYHEYiabjVlGKds1R0qqf8rgu0+7xsW9LaEortSc3zsoLySfzK1VbvdaKWVRS+FcFFeHo27K7Wx3f8Pdr5t6enizSqdp10706mzHc5XbfKNmkuceG0nkq50ovVLll9Xr9fXO5o7QjLR9l9fuTjia20JUZJV4pwbsqkE1l/njd6dV5M6LZmKv2W76Xi73urX38VbVHV7O7WnKUaddp7WUZLK7+WS3N7t18ka9bD7KvH85FoAD0JqAAAAAAAAAAAAAAAAAAAAAAAAAAAA4T27xuapTo3SjTj7yV3JJzleMdYq6ajmf9R3Z8w2neriMRNVYxbrSikqmWTUH7tPda1oczmdrTksPsx1k7eHF+huYKKdTae5ENVdNKjt/DXXymrs6qhh3TpU6SXadp1OblNaJ9ysvMpNn7PqSrUozeaMqkb3qUp3Sd38LutEzpq/alKfPS3WXZT8L38DyrioU7PLbdm/CMVtT9uaule50JySa6+ei9/oQ8Xio01v1aahbjfc/F+iXJj2ewVZynKq7wcbwvJvtPi1xRS1KDxGKhBp5M+ummWN9OnZj6nW0MdF1KtKC7dOnmd1aKuuytNeW7gXYWltNTktd25JLJeWi6spqtxjZatX+pox+BUoSi+0no9LFT7N4qUc9GT7VGV4vnBv5Jtf39C4p15OCVRRzv4st8u/hfXdYoJdjHQtuqRs+rd0vVQ8jVpbDnKlSeTV1bdJaNcsn+NGULuLUj6BCV1dGZF2bK9OPj8yUe7w1XvqUKnzJPqrnJkrNoAAuMQAAAAAAAAAAAAAAAAAAAAAAAAfNtnVpOnFpz7V5NKtRiry11hUV7+J9JPmuBov3cY5b5bx/Y06q7N18LeY5Pat/g/69va5u4O1peXuWmxqVq0W0laE3+zpxfwNfFD4t5YPd/Un5Rn9yBsSLjWs4uN6c1rQdG/Zvuu093AnSe7+b6fkeZx9rx4qrr/ov43m09enuVmwtK7T35p/6H9mXOE2ao1q9bM37yCi42tbRK6fgVuIpQhJ1FLLNK+9dqy4p8O7ma8Jt2pVhi1aMPd4ac4tXvmUXrdlmAqKo8vryt6XIrbUlePhZ9f6LmtTSjdK1u/u4nNbS/wCsw3/kj/riW2wak5YOnKo5Sk4Xbk2206jytt6vs2Kau8+OpL8Cv/bml9IlSpqnjFwTv1a06GVG6Ur7rnc7J/ZrvZNIWzLKCV1fir6rXT0sTT2HZsXHB0U/kj6I5VX98uYABumAAAAAAAAAAAAAAABD2njlRhmer3Jc2crX2zVm73t04Fl7Xv8AZf1//P5nOGLZ2sDh4d2ptXbv6lrhNszT1Zf4HasZ6S0ZxZIw1bhfuYuW18JTmr2O+TIOK2lCGi7UuS+rKeljJTjkzNP0l06ESUbaMk0KeCV/jfkTcRtOpLc8q5R++84zEVXTqVY5U+25a08ztPtfGtUtfmdHVqKKcpOySu3ySOPxW1Y1a+bLFQtl7fvNybtJqnJSvrw9Tn9pU5To3i807+z/ADmb0YRirJFxsPHqOIo3jCN55XaVS7zpx3TbS3305HSYlZd/CSb7vhfo2cnOMLaTpr/31KWvDStTfzOpwuKVelGpo3JONSzTSnHSdmtLPeuaaPLYui+629dlu9vlmtl7kr5JeZVUttLp7rfzKzBYaDxDjVipdt2za775dHv1t5nRU8BSg51VG0qiyzd3bLFWSyvRKyXAq0+zaSu1opdOD6MTqN2u27c3c6nZ+AxEqf6vw+Hjos7bvOz1yE6bnbOxPxWJVrXv+tCiwODcKs6spKTkmkrWyq648dEkTAdGHY+FV9pN3Vnd7vDKxbGCirIwrU5Sm5qbV7WS3KySXokT8PtKrC3azLlL77yGDpJWyRMoRkrSV0dBhNqwnpLsPru8H9yzOMJeC2lOlp8UeT4dz+hlc0auCWtPp/P36nUA0YbExqRzQd16p8mbyTntNOzAABAAAAAAAAABR+1dK9KMvwz17mn9bHKHe7Rw/vKU4c46d61XqkcGlwtqYs7XZ0703Hwfr+M8BKp4F/vu3Te/yNqw0OTfe/sQbveRMaM8y6kiUm9W7s1wpKO5GZKKXZvIh7VpOVNqOuqduaX6v4HIVNn75JXXFcvyO7MJ0Yy3xT8CGjJSysznNl7QqO0HKvN8GqikrcnGpFpW53sdBhKDp5u25Z2m9IRXZTt2YJK+u+13pyRnSpRj8MUu5WNkYt7lc16WFpwm5rXdw5FWzFZngJCwr3yaXezL3EeEov8ArRtEd5Eig3VIJaSTj8jXKFu4gyUrmIABkAAAbcPiJU5ZoPvXBrqdNg8VGrFSj4rinyOUN+BxTpTzLc9JLmvuSa2IoKorrX14fY6wiYzHQpfE9XuitW/t3s2urHJnv2cua/S1zk5VHNucvilq+nJLoloG7Ghh8P3je1oi5W3Ff9m7d+vlYsMLi4VF2X3p70Ustj1MubS9r5b6/K1yJhqzhJSjw171yIubLw1KpF93rzOuB5c9MjmgAAHjZymJjBVJygvik2r8L77d7uy52xiMscq46vu4L9cjl9p7Qp4elUrVpZYQjmk/klzbdklzaIZ0cHTtFzehIBxm3fbPEYGdGWLwGShVbs41lOpG1m1KKVlOzTy356ux2FCtGcYzhJSjOKlGS3OMldNdGmiDbp1oVP2szAALQAAD3NFJuTdlwSu39iNV2lLdBKC6at97JBorYZPdo/QExUb/ABEOcm9W2311PD2UbaM8INhEnD4yUdH2o8Yv6ciYpJWcXeEt31XeiqJWCnpKP9S71o/R+gKpwWpLkrHgi9O79fcElQAAJAYABY7NrOcKtF73CeTxTVvW/mV2GqfDLlbzR7RqOEozW9O/5eRI2rTgp56Uk8+socm1fNfhfkwVJKM2vmz89/VWfPmXs9oQVNzTvZbuN+Ctzvoc1TjuXSxgo8Xv9EeyqRW+S8yGyKNBUrqOd/Y6KvtKFNJLtNK2j08zdgcdGor2s1vXI5vD4edT9nBvq1aP9z+lzoNmYH3UXreUneT+SXRa+ZkaVejSpQt/l+dCwANGKnlhJ9H58CTSSu7HPbSq55t9fTcjjf8AiVgKlfZ1aNKLlJOE3Fb5RhNOVlxsru3Q6mo9WeIxZ2+7Tp7G61j87bT25jNpzo06tR15x7NKEYxTbla7tFK8nZXk+XA+97EwLw+Gw9Fu7pUYQb4Nxgk7dLkilhqcZOUacIyl8UlFJvvaV2bQVYfD91dt3AABtAAibT2jTw8VKq32nlhGMZTnOVr2hCKbk7a6LQENpK7JYKTYHtXhsZOdOjKUasL5qdSDhNWdno99no+K4l2CIyUleLNVejmXXgQGi0IuNp/veZBdB7iKbMN8Xn8jWb8JHe/AFktCXAyPII9JNdgAAAAAHkjZhqEp6Qi3+uL4GBaezlXtTjzSfk7fVArrTcKbktxIwWyFHWpq+XDx5llChFaqMV3JG0GRxqlWU3eTAABWCFtWVqb6tff6E0qtuYiMYJOSTb0XHc+G8FtFXqRXEoTzMeKovwzflH53M1Knx95Dq0mvQxO55GKkem2eGaV4tSjzRpBCaeh6AASD5z7b+0tXZ+1KNb3XvKawjjGLbirzqSzuMrO0uzC+j0tzPoxXbc2Fh8bBQxNNTUXeLu4yi3vyyWq4abnYFGIpupDZR8j9ksdVxu2qeIyqMp1Z1JqO6EFScWr8rWjfi31PtpVbC9ncNglJYallcvik25SlbcnKTbt0Whah5kYak6cbPUGFaN4tdDMA2Csir6InUoWVjChQtqyQkQZzl4AAEmAAAAAAAJ2wpWrd8Wvr9CCStjft4+P+hgrrK9OXJ+h1IAMjhAAAEDauO91C6V5SdorrzfRHNO7blN5pPe39OSJm16uevLlBKC73rJ+qXgQJ1knZ/wC3eYs7OFpKFNeLV39jYD1ngNg8pzlTd6fjHg/szfUUZR95DdxXJmk9ws8lSz+Gpo/5uHnuBjNf5LX1RiemVWGVtcmYgyvcAAAAAAAAAAAAAAAAAAAAAE3YUb1l0Tfpb6kItfZylrOXRRXjq/kgU4h2pSfD1L4AGRxAAADisfXy1qqa/wC431KDa1R++nruendZNHQ+0lDLWb4TSkvk/lfxKmthI1crc1CSSUrptSS3NW4208EVtHpKMlsRnwXsWeHlmhCXOC9NPoQ9r4lwUUv3rvwRk8Tayh8KSUU+SX13+JF2qnUgpJawbzJfhlbXuTXqiRGNpJsnbOxHvIX4p2f0+psxPwtretV4MhbIfu6Tck+3O67oq1/N+hvq4q6atv6gnZ+LLxLLG6tPnBMjm3FS+BcqcF6GlMkqgsjIAAkAAAAAAAAAAAAAAAAAA8kzptlYfJSinvfafe/ysij2Xhve1Ff4Y6vryXizqiUc/HVclTXN+wABJzgAACr27s/31Psrtx1j15rx+iOMPo5RbY2J7y86dlLiuEuvRkNHRwWLUP056bn4HKmVObi7xbT5oyr4eUHacXF9V+rmsxOzqjKpUcneTbZng6WaSvuWsu5b/t4mNKi5blpz4LxJsIqKyx8Xzf2CK5Oysv6Mqs8zbfFiCCiZElfBAAAgAwqVEvsaqN27gyUcrkgAAxAAAAAAAAABrr1VFNt2S3ntaqoptuyRX0b1pKclaCfZX4nzZDJSvmdT7LU3knOSs5TtbkktF6vxbL0rthxtRj1bfrb6FiZo4eJlerJ8fTIAAFIAAAAABrqU1JWkk1yauaP8vpb/AHVP+xEsAyjKUdHY5fbvs+5LPRnJNa2u3bu5/Pv3HP4faLTyVezJaX/df2+XcfSDgvaXAx99Phxuuqv9TFo6uBrup+nPO2jNn+I5p/My9/H9IoI1KlHS948nrH8mTsPtCnL404vzXmQmdB00v4J7xC6mDrt7kZ04QavGzXNO5uStuJMLxWiI9OhxkSEgAYtt6gAAgAAAAEbFY6FP4nrwSQCTehJIuMx8ae93fJb/AMiqxW1py0j2V6+fA1bMf/Njfr55WY3LVTsrsn0sNOs1KrpHeofcsnGxnSPK8kld8E2wYbTckjqtnK1Kmv4F6q5KNdGNoxXJJeSNhYeek7yb8QAAYgAAAAAAAAA5H2hjfEWfG3yR1xzHtRhJZlUjFtW1twa/SIZu4CSVXPeisxtGOV6L7nN4inlk0WdfaV9JN6cLWfiVdapmbZUdynFpWZ5CbTum0+adjutjbJdTDwlOTzyvJN69l/Cn4a+Jzns7sKWImpSTVNO8pbs38MeffwPo8VbRbjOKOd2hidlqEHnv+335HGY6NSi7SgvO3inZ3RDe0bb6cvBpnY7ZoKdKWmsVmXhv9LnGUqTk7eYeRbhasa0LtZrU8e2YLfGa8F9zF7ahwjL0+5sxGGyrmiHiKMcsnlV7N8uBBtKMGZz25yp+cvyNFTbFR7sq7l9yvJOzML76tTp/imk/5d8vRMi7MnGEVdnW+ymy5SSr125X1pxe7+drdfl58rT9u7FjWi3FdrfZceq5P5l1TikkkrJKyXJIzLErKx5+WKqOr3i6cPA+Q16ThJxfBnlCrllGXJ3Oq9ovZ6cpudJXT5K/hZar/Yo/8ir3sqbZW0zvU68KkU011LCntCm1fNbo9GZ7Pf8Aia8KcE8ikp1H/DF3t3N2XiY4D2RrTa941CPm/I7PZmzYYeGWmu9vfJ82zKzZpYjFU4JqDvL04k0AGZxQAAAAAAAAAAAAAACBX2TRn8VKL8LfI10th4eLuqMb9Vf0ZZgWLO+qWttPqzxI9ABWYyhdNPirHE0o5ak4vf8AZ6ncHHbfw7hWclx7Sffv9bkSOj2fL4pQ8V6GvFfA/wBcSoxL7Eu75kmrWlLeVmOrprKvH7Fe460I2IZ0XsNhs1dztpTg34y7K9MxQ4ehKpJRhFyk9yR9F9m9k/4elaVnOTvJr0iui+bZMVdlGOrKFJx3vL7lyACw8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRicLGorTV+XNdzABKbWaKev7LUZcWv10sYUvZCgt93+utwCEkbH/sr7P7mW+DwFOirU4KPzfiSwAa7k5O7AAJIAAAAAAAAAAAAAAAP/2Q==" alt="pig"/>
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