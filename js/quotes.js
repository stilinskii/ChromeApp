const quotes = [
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalani Lama',
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: 'Robert Louis Stevenson',
  },
  {
    quote: 'No pressure, no diamonds.',
    author: 'Thomas Carlyle',
  },
  {
    quote: 'We can do anything we want to if we stick to it long enough.',
    author: 'Helen Keller',
  },
  {
    quote: 'Try Again. Fail again. Fail better.',
    author: 'Samuel Beckett',
  },
  {
    quote: 'Solitary trees, if they grow at all, grow strong.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'Hold on to your dreams of a better life and stay committed to striving to realize it.',
    author: 'Earl G. Graves, Sr.',
  },
  {
    quote:
      'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn',
  },
  {
    quote:
      'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
//span:nth-child(2) 이런식으로도 됨

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

console.dir(quote);

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
