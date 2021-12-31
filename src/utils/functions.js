
export const formatPrice = (price) => {
    return Math.ceil(price)
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const discountPrice = (price, discount) => {
    return Math.ceil(price - price * (discount / 100));
};

export const formatDate = (date) => {
    const year = new Date(date).getUTCFullYear();
    const month = new Date(date).getUTCMonth();
    const day = new Date(date).getUTCDate();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    const calendar = new Date(year, month, day, hours, minutes).toLocaleString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Tehran'
    });

    const clock = `${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;

    return `${clock} | ${calendar}`;
};

export const formatBytes = (bytes) => {
    const marker = 1024;
    const decimal = 3;
    const kiloBytes = marker;
    const megaBytes = marker * marker;
    const gigaBytes = marker * marker * marker;

    if (bytes < kiloBytes) return bytes + ' Bytes';
    else if (bytes < megaBytes) return (bytes / kiloBytes).toFixed(decimal) + ' KB';
    else if (bytes < gigaBytes) return (bytes / megaBytes).toFixed(decimal) + ' MB';
    else return (bytes / gigaBytes).toFixed(decimal) + ' GB';
};

export const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

export const range = (min, max) => {
    let range = [];

    for (let i = min; i < max; i++) {
        range.push(i);
    }

    return range;
};