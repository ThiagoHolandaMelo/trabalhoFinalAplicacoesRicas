import * as types from './actionTypes'
import {reset as resetForm} from 'redux-form'
import axios from 'axios'
const URL = "http://localhost:3004/pedidos"

export function createPedido(pedido) {
  pedido.id = generateId(pedido)
  return dispatch => {
    axios.post(URL, pedido)
      .then( request => {
          dispatch(resetForm('pedidoForm'))
          dispatch({type: types.CREATE_PEDIDO_SUCCESS})
      })
   }
}

export function loadPedidos() {
  return dispatch => {
    axios.get(URL)
      .then(pedidos => {
        dispatch(loadPedidosSuccess(pedidos.data))
      })
  }
}

export function loadPedidosSuccess(pedidos) {
  return { type: types.LOAD_PEDIDOS_SUCCESS, pedidos };
}

export function managePedido(redirect) {
  return { type: types.MANAGE_PEDIDO, redirect }
}

function generateId(pedido) { 
  return pedido.nome.toLowerCase() + '-' + pedido.descricao.toLowerCase()
}