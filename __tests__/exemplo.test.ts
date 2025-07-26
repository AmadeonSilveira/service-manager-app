describe('Função de soma', () => {
    function somar(a: number, b: number) {
        return a + b;
    }

    it('deve retornar 4 ao somar 2 + 2', () => {
        expect(somar(2, 2)).toBe(4);
    });

    it('deve retornar valor negativo se um número for negativo', () => {
        expect(somar(-1, 3)).toBe(2);
    });
})