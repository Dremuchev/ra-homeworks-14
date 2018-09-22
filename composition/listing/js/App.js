'use strict';

const App = ({ items }) => (
  <main>
    {items.map(el => <ItemCard card={el} />)}
  </main>
);

const ItemCard = ({ card }) => {
  switch (card.type) {
    case 'unisex':
      return <Item color="black" item={card} />;
    case 'male':
      return <Item color="blue" item={card} />;
    case 'female':
      return <Item color="orange" item={card} />;
  }
};
