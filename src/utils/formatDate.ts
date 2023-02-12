export function formatDate(dateStr: string): string {
    dateStr = dateStr as string;
    const num = parseInt(dateStr, 10);
    const year = num.toString().slice(0, 4);
    const month = parseInt(num.toString().slice(4, 6), 10) - 1;
    const day = num.toString().slice(6, 8);
    const date = new Date(parseInt(year, 10), month, parseInt(day, 10));
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    );
  }