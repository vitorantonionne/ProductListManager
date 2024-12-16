import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import  { useState } from 'react'

import { 
  ButtonSubmit,
  DivContainer, 
  DivContainerProdutos, 
  DivListagem, 
  FormProduto, 
  InputDescricaoProduto, 
  InputNomeProduto,
  InputValorProduto, 
  Select,
  UlListagem
} from '../styles/Form.styles'


interface formProps {
  nome: string,
  descricao: string,
  valor: number,
  disponivel: string
}

interface newProduto {
  nome: string,
  descricao: string,
  valor: number,
  disponivel: string
}


export function Form() {
  const [ listagem, setListagem ] = useState(false)
  const [ produtos, setProdutos ] = useState<newProduto[]>([])


  function openListagem() {
    setListagem(true)
  }


  const newProductValidationSchema = zod.object({
    nome: zod.string().min(1, 'Informe o Nome do Produto'),
    descricao: zod.string().min(3, 'Descreva sobre o produto'),
    valor: zod.number().min(5).max(9999999),
    disponivel: zod.string()
  })

  const { register, handleSubmit, reset } = useForm<formProps>({
    resolver: zodResolver(newProductValidationSchema),
    defaultValues: {
      nome: '',
      descricao: '',
      valor: 0,
      disponivel: 'Selecione'
    }
  })


  function handleSubmitProduct(data: formProps) {
    const newProduto = {
      nome: data.nome,
      descricao: data.descricao,
      valor: data.valor,
      disponivel: data.disponivel
    } as newProduto

    setProdutos((presentProdutos) => [...presentProdutos, newProduto].sort((a,b) => a.valor - b.valor))
    openListagem()
    reset()
  }

  return(
    <DivContainer>
      <FormProduto onSubmit={handleSubmit(handleSubmitProduct)}>
        
        <DivContainerProdutos>
          <label htmlFor="nome">Nome do Produto:</label>
          <InputNomeProduto
            
            type="text"
            id="nome"
            placeholder="Nome"
            {...register('nome', { required: true })}
          />
        </DivContainerProdutos>

        <DivContainerProdutos>
          <label htmlFor="descricao">Nome do Produto:</label>
          <InputDescricaoProduto
            id="descricao"
            placeholder="Escreva a descrição do produto..."
            rows={4} 
            cols={21}
            {...register('descricao', { required: true })}
          />
        </DivContainerProdutos>

        <DivContainerProdutos>
          <label htmlFor="valor">Nome do Produto:</label>
          <InputValorProduto
            type="number" 
            id="valor"
            placeholder='Valor'
            step={5}
            {...register('valor', { valueAsNumber: true, required: true })}
          />
        </DivContainerProdutos>

        <DivContainerProdutos>
          <label htmlFor="disponivel">Disponivel Para venda ?</label>
          <Select 
            id='disponivel'
            {...register('disponivel')}
          >
            <option value="Selecione" disabled>Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </Select>
        </DivContainerProdutos>
        
        <footer>
          <ButtonSubmit type="submit">
            Enviar
          </ButtonSubmit>
        </footer>
      </FormProduto>

      {listagem && (
        <DivListagem>
          <h1>Lista De Produtos</h1>
          <UlListagem>
            {produtos.map((produto, index) => (
              <li key={index}>
                <p>Nome: {produto.nome}</p>
                <p>Valor: R${produto.valor}</p>
                <p>Descrição: {produto.descricao}</p>
                <p>Disponivel: {produto.disponivel}</p>
              </li>
        ))}
          </UlListagem>
          
        </DivListagem>
      )}

    </DivContainer>
  )
}