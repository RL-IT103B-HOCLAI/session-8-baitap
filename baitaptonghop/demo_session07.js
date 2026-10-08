let chargingQueue = ['30A-111', '29B-222', '51C-333'];

console.log('Hàng đợi ban đầu:', chargingQueue);

chargingQueue.push('43D-444');

console.log('Sau khi thêm xe 43D-444:', chargingQueue);

chargingQueue.splice(1, 0, '14A-999');

console.log('Sau khi chèn xe ưu tiên 14A-999:', chargingQueue);

console.log('Có xe 14A-999 không?', chargingQueue.includes('14A-999'));

console.log('Vị trí xe 14A-999:', chargingQueue.indexOf('14A-999'));

let chargingCar = chargingQueue.shift();

console.log('Xe vào cổng sạc:', chargingCar);
console.log('Hàng đợi sau khi xe đầu tiên rời hàng:', chargingQueue);

let energyUsed = [30, 45, 25];
let pricePerKwh = 4500;

let totalEnergy = 0;

for (let i = 0; i < energyUsed.length; i++) {
    totalEnergy += energyUsed[i];
}

let totalRevenue = totalEnergy * pricePerKwh;

console.log('--- BÁO CÁO CA TRỰC ---');
console.log('Tổng điện năng tiêu thụ:', totalEnergy, 'kWh');
console.log('Đơn giá:', pricePerKwh, 'VNĐ/kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');