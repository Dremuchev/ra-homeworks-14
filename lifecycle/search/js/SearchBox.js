class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { fixed: false }
    }

    scrollHandler = () => {
        this.setPosition(this.isFixed(window.pageYOffset))
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    render() {
        return <SearchBoxView fixed={this.state.fixed} />
    }

    isFixed(offset) {
        const searchBox = document.querySelector('.search-box')
        return offset > searchBox.offsetTop
    }

    setPosition(isFixed) {
        this.setState({ fixed: isFixed })
    }
}
