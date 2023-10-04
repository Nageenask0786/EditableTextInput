import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  font-weight: bold;
`

export const Input = styled.input`
  margin-bottom: 20px;
  color: #323f4b;
  height: 30px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ;
  width: 300px;
  margin: 10px;
`

export const Button = styled.button`
  height: 30px;
  background-color: ;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: 0px;
  font-family: 'Roboto';
  color: #ffffff;
  width: 40px;
  background-color: #d946ef;
  margin: 10px;
`
export const EditableInputContainer = styled.div`
  display: flex;
`
