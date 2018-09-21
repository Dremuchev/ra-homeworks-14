'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'All' };
  }

  render() {
    const { filters, projects } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={filter => this.setState({ selected: filter })} />
        <Portfolio projects={selected === 'All' ? projects : projects.filter(el => el.category === selected)} />
      </div>
    );
  }
}
