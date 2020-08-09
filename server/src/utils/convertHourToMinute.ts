export default function convertHourToMinute(time: string) {
    //08:00

    const [hour, minute] = time.split(':').map(Number)
    const timeInMunites = (hour * 60) + minute;
    return timeInMunites;
}