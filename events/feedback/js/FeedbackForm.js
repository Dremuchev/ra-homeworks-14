'use strict';

function FeedbackForm({data, onSubmit}) {
    const { salutation, name, email, subject, message, snacks } = data;
    const handleSubmit = event => {
        event.preventDefault();
        const object = {};
        const formData = new FormData(event.target);
        formData.forEach((value, key) => {
            object[key] = object[key] ? [].concat(object[key], value) : value;
        })
        onSubmit(JSON.stringify(object));
    };

    return <form className="content__form contact-form" onSubmit={event => handleSubmit(event)}>
        <div className="testing">
          <p>Чем мы можем помочь?</p>
        </div>
        <div className="contact-form__input-group">
          <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={salutation} />
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">
            Мистер
          </label>
          <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={salutation} />
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">
            Мисис
          </label>
            <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={salutation} />
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">
            Мис
          </label>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="name">
            Имя
          </label>
          <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={name} />
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="email">
            Адрес электронной почты
          </label>
          <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={email} />
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="subject">
            Чем мы можем помочь?
          </label>
          <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={subject}>
            <option>У меня проблема</option>
            <option>У меня важный вопрос</option>
          </select>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="message">
            Ваше сообщение
          </label>
          <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={message} />
        </div>
        <div className="contact-form__input-group">
          <p className="contact-form__label--checkbox-group">
            Хочу получить:
          </p>
          <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={snacks.includes("пицца")}/>
          <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">
            Пиццу
          </label>
            <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={snacks.includes("пирог")}/>
          <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">
            Пирог
          </label>
        </div>
        <button className="contact-form__button" type="submit">
          Отправить сообщение!
        </button>
        <output id="result" />
      </form>;
}
