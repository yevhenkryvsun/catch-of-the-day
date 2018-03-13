import React, {Component} from 'react';
import {getFunName} from "../helpers";

class StorePicker extends Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit store</button>
            </form>
        );
    }
}

export default StorePicker;