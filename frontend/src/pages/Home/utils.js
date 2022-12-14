export function getDates(rangeSelected){
    const [start, end] = rangeSelected;
    const startDay = start.getDate().toString().length === 1 ? `0${start.getDate()}` : start.getDate();
    const startMonth = start.getMonth().toString().length === 1 ? `0${start.getMonth() + 1}` : start.getMonth() + 1;
    const startYear = start.getFullYear();
    const endDay = end.getDate().toString().length === 1 ? `0${end.getDate()}` : end.getDate();
    const endMonth = end.getMonth().toString().length === 1 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
    const endYear = end.getFullYear();;
    let startDate = `${startYear}-${startMonth}-${startDay}`;
    let endDate = `${endYear}-${endMonth}-${endDay}`;
    return [startDate, endDate]
}

