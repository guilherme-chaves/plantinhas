const getCurrentDate = () => {
    const d = new Date();
    return (d.getDate() + " de " + d.toLocaleString("default", { month: "long" }).toLowerCase() + ", " + d.getFullYear())
};

// F = formatado
const getWeekDaysF = () => {
  const current = new Date();
  const week = []; 
  current.setDate((current.getDate() - current.getDay()));
  for (let i = 0; i < 7; i++) {
      week.push(
          new Date(current).toLocaleString("default", { day:"2-digit", weekday: "short"}).replace(' ', '').split('.,')
      ); 
      current.setDate(current.getDate() + 1);
  }
  return week
};

const getWeekDay = () => {
    const d = new Date();
    return d.getDay();
};


const getWeekDayName = () => {
    const d = new Date();
    return (d.toLocaleString("default", { weekday: "short" }).replace('.',''))
};

const getWeekDays = (): Array<Date> => {
    const current = new Date();
    const week = []; 
    current.setDate((current.getDate() - current.getDay()));
    for (let i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() + 1);
    }
    return week;
};


export {
    getCurrentDate,
    getWeekDays,
    getWeekDaysF,
    getWeekDay,
    getWeekDayName
}
