import dayjs from 'dayjs';

export const toJavaLocalDataTime = (date: Date): string => {
    return dayjs(date).format('YYYY-MM-DDTHH:mm:ss.SSS');
};