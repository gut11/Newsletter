import "./NewsLetter.css"


const mockData = [
    {
        title: "Gigante da tecnologia investe bilhões em pesquisa de inteligência artificial aplicada à saúde",
        body: "Gigante da tecnologia anuncia investimento bilionário em pesquisa de inteligência artificial aplicada à saúde, com o objetivo de acelerar o desenvolvimento de soluções inovadoras para diagnósticos mais precisos e tratamentos personalizados.",
    },
    {
        title: "Startup de transporte compartilhado lança serviço de carros autônomos em fase de testes",
        body: "Startup de transporte compartilhado anuncia o lançamento de um serviço de carros autônomos em fase de testes, prometendo oferecer uma experiência de mobilidade revolucionária e segura, utilizando tecnologias avançadas de sensoriamento e algoritmos de aprendizado de máquina. Empresa líder em e-commerce anuncia parceria estratégica com uma fintech para oferecer aos seus usuários uma plataforma de pagamentos integrada, visando agilizar as transações online e proporcionar uma experiência de compra mais fluida e segura."
    },
    {
        title: "E-commerce firma parceria estratégica para oferecer plataforma integrada de pagamentos",
        body: "Empresa líder em e-commerce anuncia parceria estratégica com uma fintech para oferecer aos seus usuários uma plataforma de pagamentos integrada, visando agilizar as transações online e proporcionar uma experiência de compra mais fluida e segura."
    },
    {
        title: "Pesquisadores inovam com tecnologia de armazenamento de dados baseada em moléculas",
        body: "Pesquisadores desenvolvem uma nova tecnologia de armazenamento de dados baseada em moléculas, permitindo que enormes quantidades de informações sejam armazenadas em pequenos volumes físicos, abrindo caminho para avanços significativos em áreas como computação quântica e armazenamento de dados em larga escala."
    }
]


const NewsLetter = props => {
    return (
        <>
            <div id="newsletter-container">
                <img src="newsletter.jpeg" alt="" />
                {mockData.map(news => {
                    return (
                        <div className="news-container">
                            <h1 style={{color:"#2565AF"}}>{news.title}</h1>
                            <p>{news.body}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default NewsLetter