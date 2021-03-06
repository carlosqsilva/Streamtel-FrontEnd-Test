import React from "react"
import styled from "styled-components"
import { InputText, InputImage } from "../Components/Inputs"
import { NavBar } from "../Components/NavBar"

const toBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
    reader.readAsDataURL(file)
  })
}

const Wrapper = styled.div`
  grid-column: 2;
  padding-top: 55px;
  padding-bottom: 50px;
`

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class Edit extends React.Component {
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

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.goBack()
  }

  render() {
    const { name, last_name, email, phone, address, picture } = this.state
    const { goBack } = this.props.history
    return (
      <Wrapper>
        <NavBar
          title={name}
          previous={goBack}
          action={goBack}
          actionLabel="Salvar"
        />
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <InputImage image={picture} onChange={this.pictureChange} />
          <InputText
            name="name"
            label="Nome"
            value={name}
            onChange={this.textChange}
            required
            tabIndex="1"
          />
          <InputText
            name="last_name"
            label="Sobrenome"
            value={last_name}
            onChange={this.textChange}
            tabIndex="2"
          />
          <InputText
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={this.textChange}
            tabIndex="3"
          />
          <InputText
            name="phone"
            label="Telefone"
            type="tel"
            mask="(99) 99999-9999"
            value={phone}
            onChange={this.textChange}
            tabIndex="4"
          />
          <InputText
            name="address"
            label="Endereço"
            value={address}
            onChange={this.textChange}
            tabIndex="5"
          />
          <input type="submit" style={{ display: "none" }} />
        </Form>
      </Wrapper>
    )
  }
}

export default Edit
