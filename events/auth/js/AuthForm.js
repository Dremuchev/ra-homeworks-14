'use strict';

function AuthForm({ onAuth }) {

    const handleSubmit = event => {
        const form = event.target.elements;
        event.preventDefault();
        const userData = { 
            name: form.name.value, 
            email: form.email.value,
            password: form.password.value
        };
        if (onAuth) {
            onAuth(userData);
        }
    };

    const handleEvent = event => {
        const val = event.target.value;
        event.target.value = event.target.name === 'email' 
            ? val.replace(/[^\w\d\-@._]/g, "")
            : val.replace(/[^\w\d_]/g, "");
    }

    return <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handleSubmit}>
        <div className="Input">
          <input required type="text" placeholder="Имя" name="name" />
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
      </form>;
}

AuthForm.defaultProps = {
    onAuth: console.log
}