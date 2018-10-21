class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: this.props.isOpen }
    }

    componentWillReceiveProps(args) {
        this.setState({ isOpen: args.isOpen })
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.isOpen || this.props.isOpen) {
            return true
        }
        return false
    }

    render() {
        const { isOpen } = this.state
        return <CartView {...this.props} isOpen={isOpen} />
    }
}
