const Calendar = ({ date }) => {
    const monthName = date.toLocaleString("ru", { month: "long" });
    const dayName = date.toLocaleString("ru", { weekday: "long" });
    const array = createCalendarFromDate(date);

    const dayId = ['273f', '4d0a', '91a0', '19ba', '8eee', 'e9ea', 'a46f', 
        '7665', 'd9d9', '2b85', '59da', 'b1e5', 'e0b2', 'b1cc', 
        'fab1', '73a0', 'b5de', '059f', 'f3cd', 'd798', 'cf93', 
        'b87b', 'ec88', 'a4b7', 'e985', 'ae6e', '5bb6', 'fc10', 
        'ca09', '344d', '9715'];
    const weekId = ['c3b', '56c', '6ed', 'd49', 'e05'];

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">
                    {dayName[0].toUpperCase() + dayName.slice(1)}
                </div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">
                        {date.getDate()}
                    </div>
                    <div className="ui-datepicker-material-month">
                        {date.toLocaleString("ru", { day: 'numeric', month: 'long' }).toUpperCase().slice(2)}
                    </div>
                    <div className="ui-datepicker-material-year">
                        {date.getFullYear()}
                    </div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">
                        {monthName[0].toUpperCase() + monthName.slice(1)}
                    </span>&nbsp;
                    <span className="ui-datepicker-year">
                        {date.getFullYear()}
                    </span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="ui-datepicker-week-end"></col>
                    <col className="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map( (week, weekIndex) =>
                        <tr key={weekId[weekIndex]}>
                            {week.map( (day, dayIndex) =>
                                <td key={dayId[dayIndex]} className={day.className}>
                                    {day.number}
                                </td> )
                            }
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const createCalendarFromDate = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const firstDay = new Date(year, month, 1);
    const oneHour = 1000 * 60 * 60;
    const oneDay = oneHour * 24;
    const nextMonth = new Date(year, month + 1, 1);
    const lastDate = Math.ceil((nextMonth.getTime() - firstDay.getTime() - oneHour) / oneDay);
    const lastMonth = new Date(year, month - 1, 1);

    const monthArray = [];
    let weekArray = [];
    let isEmpty = true;
    let otherDays = 0;

    for (let count = 1; count <= lastDate;) { // перебираем дни текущего месяца
        if (isEmpty) {
            // Проверяем 5 дней назад и наполняем первую и последнюю недели в календаре (конец прошлого месяца)
            for (let daysBefore = -5; daysBefore < 2; daysBefore++) {
                let weekBefore = new Date(year, month, daysBefore);
                if (lastMonth.getMonth() !== month && weekBefore.getDate() !== 1) {
                    if (weekBefore.getDay() === 0) {
                        weekArray = [];
                    } else {
                        weekArray.push({'className': "ui-datepicker-other-month", 'number': weekBefore.getDate()});
                    }
                }
            }
            isEmpty = false;
        } else {
            // Наполняем будние дни текущего месяца
            for (let empty = 7 - weekArray.length; weekArray.length < 7; empty--) {
                if (count === today && count !== lastDate) {
                    weekArray.push({'className': "ui-datepicker-today", 'number': count});
                    count++;
                } else if (count > lastDate) {
                    weekArray.push({'className': "ui-datepicker-other-month", 'number': ++otherDays});
                    count++;
                } else {
                    weekArray.push({ 'number': count });
                    count++;
                }
            }
            monthArray.push(weekArray);
            weekArray = [];
        }
    }
    return monthArray;
}