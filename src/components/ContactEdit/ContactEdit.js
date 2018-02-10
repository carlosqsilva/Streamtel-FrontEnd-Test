import React from "react"
import styled from "styled-components"
import { TextInput, MaskInput } from "./TextInput"
import { Photo } from "./ImageInput"

const toBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
    reader.readAsDataURL(file)
  })
}

const Container = styled.form`
  grid-column: 2;
  position: relative;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class ContactEdit extends React.Component {
  state = {
    name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    picture: ""
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.isNewUser = !this.id

    if (!this.isNewUser) {
      const { id, ...info } = this.props.contacts.find(_ => _.id === this.id)
      this.setState({ ...info })
    }
  }

  componentWillUnmount() {
    if (this.state.name !== "" && this.isNewUser) {
      this.props.submit(this.state)
    } else if (!this.isNewUser) {
      this.props.submit({ ...this.state, id: this.id })
    }
  }

  textChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  pictureChange = e => {
    const file = e.target.files[0]
    if (file instanceof Blob) {
      toBase64(file).then(dataUrl => this.setState({ picture: dataUrl }))
    }
  }

  render() {
    const { name, last_name, email, phone, address, picture } = this.state
    return (
      <Container>
        <Photo image={picture} onChange={this.pictureChange} />
        <TextInput
          name="name"
          label="Nome"
          value={name}
          onChange={this.textChange}
          required
          tabIndex="1"
        />
        <TextInput
          name="last_name"
          label="Sobrenome"
          value={last_name}
          onChange={this.textChange}
          tabIndex="2"
        />
        <TextInput
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={this.textChange}
          tabIndex="3"
        />
        <MaskInput
          name="phone"
          label="Telefone"
          type="tel"
          mask="(99) 99999-9999"
          value={phone}
          onChange={this.textChange}
          tabIndex="4"
        />
        <TextInput
          name="address"
          label="Endereço"
          value={address}
          onChange={this.textChange}
          tabIndex="5"
        />
      </Container>
    )
  }
}

export default ContactEdit
