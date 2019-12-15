import React, {Component} from 'react'
import { connect } from 'react-redux'
import {loadPedidos, managePedido} from '../actions/pedidoActions'
import PedidoList from './PedidoList'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class Pedidos extends Component {

    componentDidMount() {
        this.props.loadPedidos()
    }

    pedidoRow(pedido, index) {
        return <div key={index}>{pedido.nome}</div>;
    }

    render() {
        return(
            <div className="container">
                <h1>Pedidos</h1>
                <Link to='/pedido'  className='btn' 
                    onClick={() => this.props.managePedido(false)}>+1 Pedido</Link>
                <br/>
                <PedidoList pedidos={this.props.pedidos} />
                <br/>
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      pedidos: state.pedidos.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadPedidos, managePedido}, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);
