class SubscribeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isValid: false,
            cls: '',
        }
    }

    handleValidate(event) {
        this.setState({
            isValid: event.currentTarget.validity.valid,
            cls: this.state.isValid ? 'is-valid' : 'is-error',
        })
    }

    render() {
        const { cls } = this.state
        return (
            <div className={`form form--subscribe ${cls}`}>
                <form className="form form--subscribe">
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            id="input-email"
                            placeholder="Email"
                            className="form-control"
                            onInput={this.handleValidate.bind(this)}
                        />
                        <div className="form-error">
                            Пожалуйста, проверьте корректность адреса
                            электронной почты
                        </div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">
                                keyboard_arrow_right
                            </i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
