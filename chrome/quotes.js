/*const quotes = [  {
  quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney",
},
{
  quote: "Life is what happens when you're busy making other plans.",
  author: "John Lennon",
},
{
  quote:
    "The world is a book and those who do not travel read only one page.",
  author: "Saint Augustine",
},
{
  quote: "Life is either a daring adventure or nothing at all.",
  author: "Helen Keller",
},
{
  quote: "To Travel is to Live",
  author: "Hans Christian Andersen",
},
{
  quote: "Only a life lived for others is a life worthwhile.",
  author: "Albert Einstein",
},
{
  quote: "You only live once, but if you do it right, once is enough.",
  author: "Mae West",
},
{
  quote: "Never go on trips with anyone you do ntot love.",
  author: "Hemmingway",
},
{
  quote: "We wander for distraction, but we travel for fulfilment.",
  author: "Hilaire Belloc",
},
{
  quote: "Travel expands the mind and fills the gap.",
  author: "Sheda Savage",
},
];*/

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//quote.innerText = todaysQuote.quote;
//author.innerText = todaysQuote.author;

/*
fetch('https://api.quotable.io/quotes?tags=inspirational')//여러개
.then(response => response.json())
.then(data => {
  if (data.results.length > 0) {
    console.log('랜덤 Inspirational 명언:', data.results[0].content);
    console.log('저자:', data.results[0].author);
  } else {
    console.log('해당 태그의 명언이 없습니다.');
  }
})
.catch(error => console.error('API 호출 중 오류 발생:', error));
*/
fetch('https://api.quotable.io/random')//랜덤 한개
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      console.log('랜덤 Inspirational 명언:', data.content);
      console.log('저자:', data.author);
      quote.innerText = `"${data.content}"`;
      author.innerText = `-${data.author}`;
      translateToKorean(data.content);//번역
    } else {
      console.log('명언이 없습니다.');
    }
  })
  .catch(error => console.error('API 호출 중 오류 발생:', error));

//////////////////////////////////////////////////////////////
async function translateToKorean(englishQuote) {
  const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=' + encodeURIComponent(englishQuote));
  const data = await response.json();
  console.log(data)
  //return data[0][0][0];
  let krTrans = '';
  data[0].forEach(e=>{console.log(e[0]);
                     krTrans+=e[0]});
  console.log(krTrans);
  //return krTrans;
  let trans = document.createElement('p');
  trans.innerText = krTrans;
  console.log(trans);
  document.getElementById("quote").appendChild(trans);
}
/*

// Quotable API로부터 영어 명언 가져오기
async function getEnglishQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data.content;
}

// 명언 가져와서 한국어로 번역하기
async function getKoreanQuote() {
  const englishQuote = await getEnglishQuote();
  const koreanQuote = await translateToKorean(englishQuote);
  return koreanQuote;
}

// 명언 가져와서 출력하기
async function displayQuotes() {
  const englishQuote = await getEnglishQuote();
  const koreanQuote = await getKoreanQuote();
  console.log('English Quote:', englishQuote);
  console.log('Korean Quote:', koreanQuote);
}

// 호출
displayQuotes();
 */
