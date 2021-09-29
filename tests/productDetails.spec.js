const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste para Alcool Gel e Máscara', () => {
    expect(productDetails('Alcool Gel', 'Máscara')).toContainEqual({ name: 'Alcool Gel', details: { productId: 'Alcool Gel123' } },
    { name: 'Máscara', details: { productId: 'Máscara123' } })
  });

  it('Teste para Vitor e Brandao', () => {
    expect(productDetails('Vitor', 'Brandao')).toContainEqual({ name: 'Vitor', details: { productId: 'Vitor123' } },
    { name: 'Brandao', details: { productId: 'Brandao123' } })
  });

  it('Teste para Fruta e Água', () => {
    expect(productDetails('Fruta', 'Água')).toContainEqual({ name: 'Fruta', details: { productId: 'Fruta123' } },
    { name: 'Água', details: { productId: 'Água123' } })
  });

  it('Teste para Arroz e Feijão', () => {
    expect(productDetails('Arroz', 'Feijão')).toContainEqual({ name: 'Arroz', details: { productId: 'Arroz123' } },
    { name: 'Feijão', details: { productId: 'Feijão123' } })
  });

  it('Teste para Tênis e Cueca', () => {
    expect(productDetails('Tênis', 'Cueca')).toContainEqual({ name: 'Tênis', details: { productId: 'Tênis123' } },
    { name: 'Cueca', details: { productId: 'Cueca123' } })
  });
});
