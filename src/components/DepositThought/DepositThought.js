import React from 'react';
import "./DepositThought.css";

class DepositThought extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            thought: '',
            error: '',
            errorVisible: false
        };
    }
    
    handleSubmit = (event) => {
        let err = '';
        event.preventDefault();
        if(this.state.thought.length > 280) {
            err = <strong>Thought is too long</strong>
            this.setState({error: err});
            this.setState({errorVisible: true});
        } else {
            // Add to DB
            this.setState({error: err});
            this.setState({errorVisible: false});
            console.log(this.state.thought);
        }
    }
    
    handleChange = (event) => {
        this.setState({thought: event.target.value});
    }

    handleClick = () => {
        this.props.toggle();
    }

    render() {
        return (
        <div className="modal">
            <div className="modal_content">
                <form className="deposit_form" onSubmit={this.handleSubmit}>
                    <div className="text">
                        <textarea value={this.state.thought} placeholder="Penny for your thoughts?" onChange={this.handleChange} />
                        <p className="char_length">{this.state.thought.length} / 280</p>
                    </div>
                    <div className="submit">
                        <button className="close" onClick={this.handleClick}>Cancel</button>
                        <input type='submit' value='Deposit' />
                    </div>
                    <p className={`error ${this.state.errorVisible ? '' : 'invisible'}`}>{this.state.error}</p>
                </form>
            </div>
        </div>
        );
    }
}

export default DepositThought;