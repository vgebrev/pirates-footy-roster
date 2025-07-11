export function dateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function dateTimeString(date) {
    if (!date) return '';
    const time = date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    const datePart = date.toLocaleDateString(undefined, {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return `${time}, ${datePart}`;
}

export function isSaturday(date) {
    if (!date) return false;
    return date.getDay() === 6;
}

export function isDateInPast(date, hours = 13) {
    if (!date) return false;
    const limit = new Date(date);
    limit.setDate(limit.getDate());
    limit.setHours(hours, 0, 0, 0);
    return limit < new Date();
}

export function isObject(val) {
    return typeof val === 'object' && val !== null && !Array.isArray(val);
}

export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function titleCase(str) {
    if (!str) return '';
    return str
        .split(' ')
        .map((word) => capitalize(word))
        .join(' ');
}

export function rotateArray(arr, offset) {
    const len = arr.length;
    const shift = offset % len;
    return arr.slice(shift).concat(arr.slice(0, shift));
}

export const teamColours = ['blue', 'white', 'orange', 'green', 'black'];

export const teamStyles = {
    blue: {
        text: 'text-blue-100 bg-blue-500',
        header: 'bg-blue-600 text-white',
        row: 'bg-blue-500',
        button: 'white',
        buttonClass:
            '!text-blue-100 !border-blue-100 hover:!bg-blue-600 hover:!text-white focus:!ring-blue-600 active:!ring-blue-600',
        confetti: ['#2b7fff', '#bedbff']
    },
    orange: {
        text: 'text-orange-100 bg-orange-500',
        header: 'bg-orange-600 text-white',
        row: 'bg-orange-500',
        button: 'white',
        buttonClass:
            '!text-orange-100 !border-orange-100 hover:!bg-orange-600 hover:!text-white focus:!ring-orange-600 active:!ring-orange-600',
        confetti: ['#ff6900', '#ffd6a8']
    },
    green: {
        text: 'text-green-100 bg-green-500',
        header: 'bg-green-600 text-white',
        row: 'bg-green-500',
        button: 'white',
        buttonClass:
            '!text-green-100 !border-green-100 hover:!bg-green-600 hover:!text-white focus:!ring-green-600 active:!ring-green-600',
        confetti: ['#00c951', '#b9f8cf']
    },
    white: {
        text: 'text-gray-800 bg-gray-100',
        header: 'bg-gray-200 text-gray-800',
        row: 'bg-gray-100',
        button: 'black',
        buttonClass:
            '!text-gray-800 !border-gray-800 hover:!bg-gray-200 hover:!text-gray-800 focus:!ring-gray-200 active:!ring-gray-200',
        confetti: ['#6a7282', '#e5e7eb']
    },
    black: {
        text: 'text-gray-100 bg-gray-800',
        header: 'bg-gray-900 text-white',
        row: 'bg-gray-700',
        button: 'white',
        buttonClass:
            '!text-gray-100 !border-gray-100 hover:!bg-gray-900 hover:!text-white focus:!ring-gray-900 active:!ring-gray-900',
        confetti: ['#1c1917', '#79716b']
    },
    red: {
        text: 'text-red-100 bg-red-500',
        header: 'bg-red-600 text-white',
        row: 'bg-red-500',
        button: 'white',
        buttonClass:
            '!text-red-100 !border-red-100 hover:!bg-red-600 hover:!text-white focus:!ring-red-600 active:!ring-red-600',
        confetti: ['#dc2626', '#fecaca']
    },
    gray: {
        text: 'text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200',
        header: 'dark:bg-gray-700 bg-gray-200',
        row: 'bg-gray-100 dark:bg-gray-600',
        button: 'primary',
        buttonClass:
            '!text-gray-700 !border-gray-700 hover:!bg-gray-200 hover:!text-gray-700 focus:!ring-gray-200 active:!ring-gray-200 dark:!text-gray-200 dark:!border-gray-200 dark:hover:!bg-gray-700 dark:hover:!text-gray-200 dark:focus:!ring-gray-700 dark:active:!ring-gray-700',
        confetti: ['#6a7282', '#e5e7eb']
    },
    default: {
        text: 'text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200',
        header: 'dark:bg-gray-700 bg-gray-200',
        row: 'bg-gray-100 dark:bg-gray-600',
        button: 'primary',
        buttonClass:
            '!text-gray-700 !border-gray-700 hover:!bg-gray-200 hover:!text-gray-700 focus:!ring-gray-200 active:!ring-gray-200 dark:!text-gray-200 dark:!border-gray-200 dark:hover:!bg-gray-700 dark:hover:!text-gray-200 dark:focus:!ring-gray-700 dark:active:!ring-gray-700',
        confetti: ['#6a7282', '#e5e7eb']
    }
};
