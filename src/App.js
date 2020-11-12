import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import TableComponent from './components/TableComponent';

export default class App extends Component {
  state = {
    title: "Xiyyu Developer",
    users: [
      {
        id: 1,
        nama: "arya",
        alamat: "pekalongan",
        umur: 25,
        nohp: "08596555366665",
      },
      {
        id: 1,
        nama: "arya",
        alamat: "pekalongan",
        umur: 25,
        nohp: "08596555366665",
      },
      {
        id: 1,
        nama: "arya",
        alamat: "pekalongan",
        umur: 25,
        nohp: "08596555366665",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title }/>
        <TableComponent users={this.state.users}  />
      </div>
    )
  }
}
