export function getDates(rangeSelected){
    const [start, end] = rangeSelected;
    const startDay = ("0" + start.getDate()).slice(-2);
    const startMonth = ("0" + start.getMonth() + 1).slice(-2);
    const startYear = start.getFullYear();
    const endDay = ("0" + end.getDate()).slice(-2);
    const endMonth = ("0" + start.getMonth() + 1).slice(-2);
    const endYear = end.getFullYear();
    let startDate = `${startYear}-${startMonth}-${startDay}`;
    let endDate = `${endYear}-${endMonth}-${endDay}`;
    return [startDate, endDate]
}

