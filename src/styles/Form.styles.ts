import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const FormProduto = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`

export const DivContainerProdutos = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`

export const InputNomeProduto = styled.input`
  outline: none;
  padding: 2px;
`
export const InputDescricaoProduto = styled.textarea`
  /* height: 65px;
  width: 28%; */
  outline: none;
`

export const InputValorProduto = styled.input`
  outline: none;
  padding: 2px;
`

export const Select = styled.select`
outline: none;
`
export const ButtonSubmit = styled.button`
  padding: 3px;
`

export const DivListagem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  width: 50%;
`

export const UlListagem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
