import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { FaCheck } from 'react-icons/fa';
import { useParams, useHistory } from "react-router-dom";
// import axios from 'axios';

const produtos = [
    {
        "id": "2",
        "produto": "Smartphone Samsung Galaxy A11 64GB Azul 4G - Octa-Core 3GB RAM 6,4” Câm. Tripla + Selfie 8MP",
        "valor": "1699.9",
        "promo": "1040.67",
        "imagemg": "http://react.professorburnes.com.br/img/1609540732_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540732_1p.jpg"
    },
    {
        "id": "3",
        "produto": "Smartphone xiaomi redmi 9a tela 6,53” 2gb/32gb 4g, azul",
        "valor": "1399.9",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540750_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540750_1p.jpg"
    },
    {
        "id": "4",
        "produto": "Fritadeira Elétrica sem Óleo/Air Fryer Nell Smart - Preta 2,4L com Timer",
        "valor": "289.9",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540783_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540783_1p.jpg"
    },
    {
        "id": "5",
        "produto": "Smart TV HD LED 32” LG 32LM625BPSB Wi-Fi Bluetooth - HDR Inteligência Artificial 3 HDMI 2 USB",
        "valor": "1399.9",
        "promo": "1281.9",
        "imagemg": "http://react.professorburnes.com.br/img/1609540796_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540796_1p.jpg"
    },
    {
        "id": "6",
        "produto": "Smart TV Crystal UHD 4K LED 50” Samsung - 50TU8000 Wi-Fi Bluetooth HDR 3 HDMI 2 USB",
        "valor": "2699.9",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540819_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540819_1p.jpg"
    },
    {
        "id": "7",
        "produto": "Google Nest Mini - Cinza",
        "valor": "499",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540833_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540833_1p.jpg"
    },
    {
        "id": "8",
        "produto": "Projetor Led Espelhamento Celular Wifi T5+ Multi Interfaces Branco - Yieqin",
        "valor": "899.9",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540853_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540853_1p.jpg"
    },
    {
        "id": "9",
        "produto": "Console PlayStation 5 PS5 - Sony",
        "valor": "4999.99",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540863_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540863_1p.jpg"
    },
    {
        "id": "10",
        "produto": "PlayStation 4 Mega Pack V17 1TB 1 Controle Sony - com 3 Jogos 3 Meses PS Plus",
        "valor": "2990",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540879_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540879_1p.jpg"
    },
    {
        "id": "11",
        "produto": "Game Retro Sonic The Hedgehog 3 Tiger Eletronics - Hasbro",
        "valor": "169.9",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540894_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540894_1p.jpg"
    },
    {
        "id": "12",
        "produto": "XBOX One X",
        "valor": "3890",
        "promo": "0",
        "imagemg": "http://react.professorburnes.com.br/img/1609540907_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540907_1p.jpg"
    },
    {
        "id": "13",
        "produto": "Nintendo Switch 32GB HAC-001-01 1 Controle Joy-Con - Vermelho e Azul",
        "valor": "3290",
        "promo": "2999.9",
        "imagemg": "http://react.professorburnes.com.br/img/1609540919_1g.jpg",
        "imagemp": "http://react.professorburnes.com.br/img/1609540919_1p.jpg"
    }
]

export const Produto = () => {

    const { id } = useParams();
    const history = useHistory();

    const [dataMenu, setDataMenu] = useState(null);

    useEffect(() => {
        // fetch('https://api.github.com/users/mateuschines')
        //     .then((value) => {
        //         value.json().then((data) => {
        //             console.log(data.location)
        //         })
        //     })

        let produto = produtos.filter(element => (
            element.id === id
        ));

        setDataMenu(produto[0]);

        // fetch('http://react.professorburnes.com.br/categoria')
        // .then((value) => {
        //     value.json().then((data) => {
        //         console.log(data)
        //     })
        // })

        // axios.get('https://api.github.com/users/mateuschines').then((value) => {
        //         console.log(value)
        //     })
    }, [id]);

    function onSubmit(e) {
        e.preventDefault();

        let qtd = e.target.quantidade.value;

        let obj = {
            id: dataMenu.id,
            produto: dataMenu.produto,
            quantidade: qtd,
            valor: dataMenu.valor,
            promo: dataMenu.promo,
            total: dataMenu.promo === '0' ? dataMenu.valor * qtd : dataMenu.promo * qtd
        }

        let localStorageCar = localStorage.getItem('@submarino:carrinho');
        let carrinho = null;
        if (typeof localStorageCar == 'string') {
            carrinho = JSON.parse(localStorageCar);
        }

        if (carrinho) {
            carrinho.push(obj);

            localStorage.setItem('@submarino:carrinho', JSON.stringify(carrinho));
        } else {
            localStorage.setItem('@submarino:carrinho', JSON.stringify([obj]));
        }

        history.push('/carrinho');

    }

    return (
        <>
            <Menu />

            <main className="container">
                {id && dataMenu ?
                    <>
                        <h1>Produto:</h1>
                        {/* <h1><?=$produto?></h1> */}
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <a href={dataMenu?.imagemg} data-lightbox="produto" title={dataMenu?.produto}>
                                    <img src={dataMenu?.imagemg} alt={dataMenu?.produto} className="w-100" />
                                </a>
                            </div>
                            <div className="col-12 col-md-8">


                                {/* <p className='de text-center'><?=$de;?></p>
                        <p className='valor text-center'><?=$valor;?></p> */}

                                <form
                                    name="formProduto"
                                    // method="post" 
                                    // action="index.php?pagina=adicionar"
                                    onSubmit={onSubmit}
                                >
                                    {/* <input type="hidden" name="id" /> */}
                                    <div className="input-group">
                                        <input type="number" name="quantidade"
                                            className="form-control form-control-lg"
                                            defaultValue={1}
                                            placeholder="Quantidade" required
                                        // inputmode="numeric"
                                        />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-success btn-lg">
                                                <FaCheck /> Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <br />

                                <h2 className="text-center">Descrição do Produto:</h2>

                                {dataMenu?.produto}
                            </div>
                        </div>
                    </>
                    : <h1>Nenhum produdo encontrato.</h1>}
            </main>
            <Footer />
        </>
    );
}
