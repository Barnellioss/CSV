import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ListItems from './listItems'
import styles from './listStyles.module.css'
import { setLayers } from "./../redux-store/layersReducer";

class ListContainer extends React.Component {
    render() {
        return (
            <ListItems data={this.props.data} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.layersList.layers
    }
}


export default compose(connect(mapStateToProps, { setLayers }))(ListContainer)