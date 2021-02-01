import moment from 'moment';

export const groupAccordingToDates = (collection = []) => {
    const sortedCollection = sortDates(collection, 'startTime');

    var currentDate = moment();
    var lastMonthDate = currentDate.clone().startOf('month').subtract(1, 'day');

    var result = {
        'today': [],
        'current-week': [],
        'current-month': [],
        'last-month': []
    };
    sortedCollection.forEach(item => {
        if(moment(item.startTime).isSame(currentDate, 'day')) {
            result.today.push(item);
        }
        if(moment(item.startTime).isSame(currentDate, 'week')) {
            result['current-week'].push(item);
        }
        if(moment(item.startTime).isSame(currentDate, 'month')) {
            result['current-month'].push(item);
        }
        if(moment(item.startTime).isSame(lastMonthDate, 'month')) {
            result['last-month'].push(item);
        }
    });

    return result;
};

export const sortDates =
    (collection, dateKey) =>
        collection.sort((a, b) =>
            moment(a[dateKey]).format('YYYYMMDD') - moment(b[dateKey]).format('YYYYMMDD'));