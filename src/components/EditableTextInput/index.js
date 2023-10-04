import {Component} from 'react'

import {
  Container,
  Card,
  Heading,
  Input,
  Button,
  EditableInputContainer,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {isClicked: false, searchInput: ''}

  onClickOfBtn = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isClicked, searchInput} = this.state
    const buttonText = isClicked ? 'Edit' : 'Save'
    const text = isClicked ? searchInput : ''
    return (
      <Container>
        <Card>
          <Heading>Editable Text Input</Heading>
          <EditableInputContainer>
            <Input
              type="text"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <Button type="button" onClick={this.onClickOfBtn}>
              {buttonText}
            </Button>
          </EditableInputContainer>
        </Card>
        <p>{text}</p>
      </Container>
    )
  }
}

export default EditableTextInput
