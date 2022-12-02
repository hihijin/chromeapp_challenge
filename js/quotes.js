const quotes=[
    {
        quote : "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.",
        author : "린홀",
    },
    {
        quote : "인생에 뜻을 세우는 데 적당한 때는 없다.",
        author : "볼드윈",
    },
    {
        quote : "꿈을 꿀 수 있다면, 그 꿈을 실현할 수 있다.",
        author : "월트 디즈니",
    },
    {
        quote : "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
        author : "J.하비스",
    },
    {
        quote : "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author : "칭기즈칸",
    },
    {
        quote : "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
        author : "기시미 이치로",
    },
    {
        quote : "참을 인 세번이면 호구다",
        author : "박명수",
    },
    {
        quote : "일단 시작해라. 나중에 완벽해지면 된다.",
        author : "론 무어",
    },
    {
        quote : "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author : "벤자민 프랭클린",
    },
    {
        quote : "못하는 일에 초점 맞추기를 그만하면 자기가 어떤 일을 할 수 있는지 알고 놀라게 될 것이다.",
        author : "앨릭스 코브",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;