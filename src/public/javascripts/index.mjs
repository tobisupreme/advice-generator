const button = document.querySelector('.shuffle');
const title = document.querySelector('.title');
const advice = document.querySelector('.quote');

window.addEventListener('DOMContentLoaded', async function () {
  const { slip } = await getAdvice();

  updateDom({
    title: slip?.id,
    quote: slip?.advice,
  });
});
button.addEventListener('click', handleClick);

async function handleClick(e) {
  e.preventDefault();
  const { slip } = await getAdvice();

  updateDom({
    title: slip?.id,
    quote: slip?.advice,
  });
}

function updateDom(data) {
  title.innerHTML = `Advice #${data.title}`;
  advice.innerHTML = data.quote;
}

const baseUrl = 'https://api.adviceslip.com';

const generic = {
  slip: {
    id: 133,
    advice:
      'If you find yourself distressed about something, ask yourself if it will still matter tomorrow or next week or next month.',
  },
};

async function getAdvice() {
  try {
    const data = await (await fetch(`${baseUrl}/advice`)).json();
    return data ? data : generic;
  } catch (err) {
    console.error(`Error occured: ${err}`);
    return generic;
  }
}
