import imgPagamentos from './../../images/pagamentos.png';

export const Footer = () => {

    return (
        <>
            <footer className="bg-primary">
                <div className="container">
                    <p className="text-center">SubSubmarino - Comércio eletrônico</p>
                    <p className="text-center">
                        <strong>Meios de Pagamento:</strong>
                    </p>
                    <p className="text-center">
                        <img src={imgPagamentos} alt="Meios de pagamento" />
                    </p>
                    <hr />
                </div>
            </footer>
        </>
    );
}
