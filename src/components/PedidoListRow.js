import React, { useState }  from 'react';


const PedidoListRow = ({pedido}) => {

  const [exibirPedido, setExibirPedido] = useState(true)

  let detalhamentoDoPedido = "";
  
  if( exibirPedido ){
    detalhamentoDoPedido = <p><td>{pedido.descricao}</td><td>{pedido.status}</td></p>;  
  }
  
  const _handleClick = event => {
    event.preventDefault()
    setExibirPedido(!exibirPedido)
  }

  return(
    <tr>
      <td>{pedido.id}</td>
      <td>{pedido.nome}</td>
      {detalhamentoDoPedido}
    </tr>
  );
};

export default PedidoListRow;