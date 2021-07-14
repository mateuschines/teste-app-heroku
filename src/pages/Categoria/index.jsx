import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { useParams, Link } from "react-router-dom";
// import axios from 'axios';

const categorias = [
    {
        "id": "2",
        "nome": "Eletronicos",
        "produtos": [
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
        ]
    },
    {
        "id": "1",
        "nome": "Telefonia",
        "produtos": [
            {
                "id": "3",
                "produto": "Smartphone xiaomi redmi 9a tela 6,53” 2gb/32gb 4g, azul",
                "valor": "1399.9",
                "promo": "0",
                "imagemg": "http://react.professorburnes.com.br/img/1609540750_1g.jpg",
                "imagemp": "http://react.professorburnes.com.br/img/1609540750_1p.jpg"
            },
        ]
    },
    {
        "id": "3",
        "nome": "Games",
        "produtos": [
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
    },
    {
        "id": "4",
        "nome": "Móveis",
        "produtos": [
            {
                "id": "8",
                "produto": "Projetor Led Espelhamento Celular Wifi T5+ Multi Interfaces Branco - Yieqin",
                "valor": "899.9",
                "promo": "0",
                "imagemg": "http://react.professorburnes.com.br/img/1609540853_1g.jpg",
                "imagemp": "http://react.professorburnes.com.br/img/1609540853_1p.jpg"
            },
        ]
    },

]

export const Categoria = () => {

    const { id } = useParams();

    const [dataMenu, setDataMenu] = useState(null);

    useEffect(() => {
        // fetch('https://api.github.com/users/mateuschines')
        //     .then((value) => {
        //         value.json().then((data) => {
        //             console.log(data.location)
        //         })
        //     })

        let categoria = categorias.filter(element => (
            element.id === id
        ));

        setDataMenu(categoria[0]);

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

    return (
        <>
            <Menu />

            <main className="container">

                <div className="row">
                    {id && dataMenu ?
                        dataMenu.produtos.map((item, index) => (
                            <div key={'div' + index} className='col-12 col-md-4 text-center'>
                                <img key={'img' + index} src={item.imagemp} alt={item.produto} className='w-100' />
                                <h2 key={'h2' + index}>{item.produto}</h2>
                                <p key={'de' + index} className='de'>{item.valor}</p>
                                <p key={'valor' + index} className='valor'>{item.promo}</p>
                                <p key={'p' + index}>
                                    <Link className='btn btn-success btn-lg w-100' to={'/produto/' + item.id}>
                                        Detalhes
                                    </Link>
                                    {/* <a key={'detalhes' + index} href='index.php?pagina=produto&id={$id}' className='btn btn-success btn-lg w-100'>
                                    Detalhes
                                </a> */}
                                </p>
                            </div>
                        ))

                        : <h1>Nenhuma categoria encontrata.</h1>}
                </div>
            </main>
            <Footer />
        </>
    );
}
