import React from 'react';
import PedidoListRow from './PedidoListRow';

const PedidoList = ({ pedidos }) => {
  return (
    <table>
      <thead>
        <tr><td>ID</td><td>Nome</td><td>Descricao</td><td>Status</td></tr>
      </thead>
      <tbody>
        {pedidos.map(pedido => <PedidoListRow key={pedido.id} pedido={pedido} />)}        
      </tbody>
    </table>
  );
};

export default PedidoList;