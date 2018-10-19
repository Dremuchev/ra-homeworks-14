class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: this.props.isOpen }
    }

    componentWillReceiveProps(args) {
        this.setState({ isOpen: args.isOpen })
    }

    render() {
        const { isOpen } = this.state
        return isOpen ? (
            <CartView {...this.props} isOpen={isOpen} />
        ) : (
            <CartView {...this.props} items={[]} />
        )
    }
}
