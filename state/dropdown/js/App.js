class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.options[0],
      open: false
    }
  }
  handleChange = option => this.setState({active: option});

  toggleOpen = () => this.setState({open: !this.state.open});

  render() {
    const { options } = this.props;
    const { active, open } = this.state;
    return (
      <div className="container">
        <div className={`dropdown-wrapper ${open ? "open" : ""}`} >
          <button className={"btn"} onClick={this.toggleOpen} >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          <ul className="dropdown">
            {options.map((option, i) => (
              <li
                className={option === active ? "active" : ""}
                onClick={() => this.handleChange(option)} >
                  <a href="#">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

App.defaultProps = { options: [] };