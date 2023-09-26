import { Component } from 'react'
import Output from './Output';

class Input extends Component {

    constructor() {
        super();
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: '',
            content: []
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addValue(){
        this.setState(
            {
                content: this.state.content.concat([this.state.value]),
                value: ""
            },
        )
    }

    deleteValue(data){
      this.setState(
        {
          content: this.state.content.filter(items => items!=data)
        }
      )
    }


  render() {
    return (
      <div className='content'>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={() => this.addValue()}>Add item</button>
        <div className='display'>{this.state.value}</div>
        <div id="container"></div>
        {
          this.state.content
          .filter(data => data!="")
          .map((data,index) => (
            <div key={index}>
              <Output value={data} />
              <button onClick={() => this.deleteValue(data)}>Delete Item</button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Input