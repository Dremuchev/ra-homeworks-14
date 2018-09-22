'use strict';

const content = [
    {
        id: 'fD357',
        header: 'Компоненты',
        article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
    },
    {
        id: 'kP14d',
        header: 'Выучил раз, используй везде!',
        article: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
    },
    {
        id: 'qY4g5',
        header: 'Использование JSX',
        article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
    }
];

class Accordion extends React.Component {
    render() {
        const { content, header } = this.props;
        return (
            <main className='main'>
                <h2 className='title'>{header}</h2>
                {content.map(section => <ListItem item={section} />)}
            </main>
        );
    }
}

class ListItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <section className={'section'} key={item.id} ref={el => this.content = el}>
                <button>toggle</button>
                <h3 className='sectionhead' onClick={() => this.content.classList.toggle('open')}>{item.header}</h3>
                <div className='articlewrap'>
                    <div className='article'>{item.article}</div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(<Accordion content={content} header={'React'} />, document.getElementById('accordian'));