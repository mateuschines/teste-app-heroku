import { useCallback, useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { FaTrash } from 'react-icons/fa';
import { formataValorBR } from './../../utils/funcoes'
// import { useParams, Link } from "react-router-dom";
// import axios from 'axios';

export const Carrinho = () => {

    const [dataCarrinho, setDataCarrinho] = useState(null);
    const [totalCarrinho, setTotalCarrinho] = useState(null);

    function atualizaTotal(carrinho) {
        let total = 0;
        carrinho.forEach(element => {
            total = element.total + total
        });

        setTotalCarrinho(total);
    }

    useEffect(() => {

        let localStorageCar = localStorage.getItem('@submarino:carrinho');
        let carrinho = null;
        if (typeof localStorageCar === 'string') {
            carrinho = JSON.parse(localStorageCar);
        }

        if (carrinho) {
            setDataCarrinho(carrinho);
            atualizaTotal(carrinho);
        }

    }, []);

    const removeProdutoCarrinho = useCallback((id) => {

        let carrinho = dataCarrinho.filter((element) => (
            element.id !== id
        ));

        localStorage.setItem('@submarino:carrinho', JSON.stringify(carrinho));

        setDataCarrinho(carrinho);
        atualizaTotal(carrinho);

    }, [dataCarrinho]);

    const limparCarrinho = useCallback(() => {
        localStorage.removeItem('@submarino:carrinho');
        setDataCarrinho([]);
        atualizaTotal([]);
    }, []);

    return (
        <>
            <Menu />

            <main className="container" style={{ marginTop: 10, marginBottom: '10%' }}>

                <h1 className="text-center">Carrinho de Compras</h1>

                <p className="alert alert-warning">
                    Existem {dataCarrinho ? dataCarrinho.length : '0'} produto(s) diferente(s) no carrinho:
                </p>

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Nome do Produto</td>
                            <td>Quantidade</td>
                            <td>Vlr Unit.</td>
                            <td>Vlr Total</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataCarrinho && dataCarrinho.map((item, index) => (
                            <tr key={index}>
                                <td key={'prod' + index}>{item.produto}</td>
                                <td key={'qtd' + index}>{item.quantidade}</td>
                                <td key={'promo' + index}>R$ {item.promo === '0' ? formataValorBR(item.valor) : formataValorBR(item.promo)}</td>
                                <td key={'total' + index}>R$ {formataValorBR(item.total)}</td>
                                <td key={'exc' + index}>
                                    <button key={index} type='button'
                                        className='btn btn-danger btn-sm'
                                        onClick={() => removeProdutoCarrinho(item.id)}
                                    >
                                        <FaTrash key={index} size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Valor Total:</td>
                            <td></td>
                            <td></td>
                            <td>R$ {formataValorBR(totalCarrinho)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>

                <button type='button' onClick={() => { limparCarrinho() }} className="btn btn-danger btn-lg float-left">
                    Limpar Carrinho
                </button>
                <button type='button' className="btn btn-success btn-lg float-right">
                    Finalizar Pedido
                </button>

                <div className="clearfix"></div>
            </main>
            <Footer />
        </>
    );
}
