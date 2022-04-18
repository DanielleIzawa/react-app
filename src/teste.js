import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import React from "react";

import ListaDeUsuarios from "./ListaDeUsuarios";

const API = [
  {
    id: 1001,
    name: "Eduardo Santos",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    username: "@eduardo.santos",
  },
  {
    id: 1002,
    name: "Marina Coelho",
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    username: "@marina.coelho",
  },
];

jest.mock('axios', () => {
  return {get: jest.fn( (..._) => {
    return new Promise(resolve => {
      resolve(true)
    })
  })}
})

describe('Lista de usuários' , () =>{
  beforeEach (() => {
    axios.get.mockResolvedValue({data: API})
    render(<ListaDeUsuarios />)
  }) 

  it('should create a component', () =>{
    const {container} = render(<ListaDeUsuarios />)
    expect(container).toBeTruthy();

  })
})


describe('should modal payment', () => {
  beforeEach (async() => {
    axios.get.mockResolvedValue({data: API})
    render(<ListaDeUsuarios />)
    await screen.findByText(/Lista de Usuários/i);
  }) 
  it("open", () => {
    const open = screen.getAllByTestId("botao-pagar")
    fireEvent.click(open[0])
  });
})

