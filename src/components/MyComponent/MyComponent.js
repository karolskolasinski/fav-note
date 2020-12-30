import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value.toUpperCase(),
        })
    };

    render() {
        return (
            <>
                <input placeholder='your text' value={this.state.text} onChange={this.handleChange} />
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;
