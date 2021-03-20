import React, { Component } from "react";
class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//   };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //     console.log("Increment Clicked", this);
  // }

  //using different and good way
//   handleIncrement = () => {
//     //console.log("Increment Clicked", this);
//     this.setState({ value: this.state.value + 1 });
//   };
//   handleDelete = () => {
//     this.setState({ value: 0 });
//   };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-3 btn-danger btn-sm">
          Delete
        </button>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge ";
    classes += this.props.counter.value === 0 ? "m-2 badge-warning" : "m-3 badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
