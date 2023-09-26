import { Component } from 'react'

class Output extends Component {

    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: this.props.value
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
    )
  }
}

export default Output
