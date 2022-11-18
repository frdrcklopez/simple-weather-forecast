import moment from 'moment';

export const setUnixDate = (date, format) => {
    return moment.unix(date).format(format)
}
