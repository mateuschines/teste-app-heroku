export const formataValorBR = (valor) => {
    if (valor) {
        let tes = parseFloat(valor);
        return tes.toLocaleString('pt-br', {minimumFractionDigits: 2});
    }
    return undefined

};
