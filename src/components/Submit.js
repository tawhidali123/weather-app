import React from 'react';



class Submit extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='city'/>
                <input type='text' name='country' placeholder='country'/>
                <button>find weather</button>
            </form>
        );
    }
};

export default Submit;