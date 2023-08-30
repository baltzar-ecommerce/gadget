import * as moment from 'moment'

export function useMoment() {
    moment.updateLocale('en', {
        calendar: {
            sameDay:  'HH:mm',
            nextDay:  '[Tomorrow at] HH:mm',
            nextWeek: 'dddd',
            lastDay:  '[Yesterday at] HH:mm',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM DD YYYY'
        }
    })
}