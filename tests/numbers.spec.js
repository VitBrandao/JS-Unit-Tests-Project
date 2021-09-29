/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {

    test('Teste com números positivos', () => {
      expect(numbers([2, 3, 4])).toBe(true);
    })

    test('Teste com números negativos', () => {
      expect(numbers([-2, -3, -4])).toBe(true);
    })

    test('Teste com string de texto', () => {
      expect(numbers([2, 'errado', 5])).toBe(false);
    })

    test('Teste com número em formato de string', () => {
      expect(numbers([2, '4', 5])).toBe(false);
    })

});

