var topic = [
    "不便宜的拉麵",
    "省錢",
    "省錢",
    "薯條加大 加點雞塊",
    "省錢",
    "玩遊戲放棄作業揮霍人生"
];

var money = [
    "300",
    "0",
    "0",
    "80",
    "0",
    "無價"
]

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5, 10);
