export function compareTimestamp(timestamp) {
    const currentTime = new Date().getTime();
    const diff = currentTime - timestamp;

    if (diff < 60 * 1000) { // 小于1分钟
        return "一分钟内";
    } else if (diff < 60 * 60 * 1000) { // 小于1小时
        return `${Math.floor(diff / (60 * 1000))}分钟`;
    } else if (diff < 24 * 60 * 60 * 1000) { // 小于1天
        return `${Math.floor(diff / (60 * 60 * 1000))}小时`;
    } else if (diff < 30 * 24 * 60 * 60 * 1000) { // 小于1个月
        return `${Math.floor(diff / (24 * 60 * 60 * 1000))}天`;
    } else if (diff < 3 * 30 * 24 * 60 * 60 * 1000) { // 小于3个月
        return `${Math.floor(diff / (30 * 24 * 60 * 60 * 1000))}月`;
    } else { // 大于等于3个月
        return `${Math.floor(diff / (30 * 24 * 60 * 60 * 1000))}月`;
    }
}
