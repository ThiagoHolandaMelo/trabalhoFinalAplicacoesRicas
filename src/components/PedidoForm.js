import React from 'react'
import { reduxForm, Field } from 'redux-form'

let PedidoForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name='nome' component='input'
             placeholder='Nome' />
      <Field name='descricao' component='input'
             placeholder='Descricao' />      
      <input type="submit" />
    </form>
  )
}

export default reduxForm({form: 'pedidoForm' })(PedidoForm)