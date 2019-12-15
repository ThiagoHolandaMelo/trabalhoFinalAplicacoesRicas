import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import { createPedido } from '../actions/pedidoActions';
import PedidoForm from './PedidoForm'

class ManagePedido extends Component {

    render() {
        if (this.props.redirect) {
            return <Redirect to='/pedidos' />
        }

        return (
            <div className="container">
                <h1>Gerenciar Pedidos</h1>
                <PedidoForm onSubmit={this.props.createPedido} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { redirect: state.pedidos.redirect };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPedido }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePedido);