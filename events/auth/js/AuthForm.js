'use strict';

function AuthForm({ onAuth }) {
    const userData = {};

    const handleSubmit = event => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            onAuth(userData);
        }
    };

    const handleEvent = event => {
        const val = event.target.value;
        userData[event.target.name] = event.target.value = event.target.name === 'email' 
            ? val.replace(/[^\w\d\-@._]/g, "")
            : val.replace(/[^\w\d_]/g, "");
    }

    return (
        <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handleSubmit}>
            <div className="Input">
                <input required type="text" placeholder="Имя" onChange={() => (userData["name"] = event.target.value)} />
                <label />
            </div>
            <div className="Input">
                <input type="email" placeholder="Электронная почта" name="email" onChange={handleEvent} />
                <label />
            </div>
            <div className="Input">
                <input required type="password" placeholder="Пароль" name="password" onChange={handleEvent} />
                <label />
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right" />
            </button>
        </form>
    );
}