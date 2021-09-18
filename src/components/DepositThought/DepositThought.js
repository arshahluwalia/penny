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

    render() {
        return (
          <form className="deposit_form" onSubmit={this.handleSubmit}>
            <textarea value={this.state.thought} onChange={this.handleChange} />
            <div className="submit">
                <p>{this.state.thought.length} / 280</p>
                <input type='submit' value='deposit' />
            </div>
            <p className={`error ${this.state.errorVisible ? '' : 'invisible'}`}>{this.state.error}</p>
          </form>
        );
    }
}

export default DepositThought;