import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapDisPatchToProps(dispatch) {
    return {
        onClick: function(size) {
            dispatch({type: 'INCREMENT', size: size});
        }
    }
}

export default connect(null, mapDisPatchToProps)(AddNumber);

/*
import store from '../store';
import React, { Component } from 'react';
export default class extends Component {
    render() {
        return(
            <AddNumber onClick={function(size) {
                store.dispatch({type: 'INCREMENT', size: size});
            }.bind(this)}></AddNumber>
        );
    }
}
*/
