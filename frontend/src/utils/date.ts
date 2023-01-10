import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

export const nowUTC = (targetTimezone: string = "Europe/Paris") => {
    const now = new Date();
    return utcToZonedTime(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()), targetTimezone)
}

// We don't care about the date, only time
export const formatTime = (date: Date, language: string) => {
    if (date == null) {
		return '-';
	}

	const options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
        second: '2-digit'
	};

	return date.toLocaleTimeString(language, options);
}