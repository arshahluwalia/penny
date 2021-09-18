import React from 'react';

class DepositThought extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            thought: '',
            error: ''
        };
    }
    
    handleSubmit = (event) => {
        let err = '';
        if(this.state.thought.length < 10) {
            err = <strong>Thought is too short</strong>
        }
        event.preventDefault();
        // Add to DB
        this.setState({error: err});
        console.log(this.state.thought);
    }
    
    handleChange = (event) => {
        this.setState({thought: event.target.value});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <p>Thought</p>
            <input
                type='text'
                onChange={this.handleChange}
            />
            <input type='submit' />
            {this.state.error}
          </form>
        );
    }
}

export default DepositThought;