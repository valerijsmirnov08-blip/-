const number_bottom = document.getElementById('number_bottom');
const Max = document.getElementById('Max');
const Telegram = document.getElementById('Telegram');
const addres = document.getElementById('addres');
const bottom_edit = document.getElementById('bottom_edit');
const bottom = document.getElementById('bottom');
const portfolio_text = document.getElementById('portfolio_text');
const save_bottom = document.getElementById('save_bottom');
const portfolio_edit = document.getElementById('portfolio_edit');
const save_portfolio = document.getElementById('save_portfolio');

const offer_title_1 = document.getElementById('offer_title_1');
const offer_price_1 = document.getElementById('offer_price_1');
const offer_edit_1 = document.getElementById('offer_edit_1');

const offer_title_2 = document.getElementById('offer_title_2');
const offer_price_2 = document.getElementById('offer_price_2');
const offer_edit_2 = document.getElementById('offer_edit_2');

const offer_title_3 = document.getElementById('offer_title_3');
const offer_price_3 = document.getElementById('offer_price_3');
const offer_edit_3 = document.getElementById('offer_edit_3');

const offer_title_4 = document.getElementById('offer_title_4');
const offer_price_4 = document.getElementById('offer_price_4');
const offer_edit_4 = document.getElementById('offer_edit_4');






bottom_edit.addEventListener("click", function()
{
    bottom.contentEditable = true;
})

save_bottom.addEventListener("click", function()
{
    localStorage.setItem('number_bottom', number_bottom.textContent)
    localStorage.setItem('Max', Max.textContent, )
    localStorage.setItem('Telegram', Telegram.textContent, )
    localStorage.setItem('addres', addres.textContent, )
})

bottom_edit.addEventListener("click", function()
{
    bottom.contentEditable = true;
})

save_bottom.addEventListener("click", function()
{
    localStorage.setItem('number_bottom', number_bottom.textContent)
    localStorage.setItem('Max', Max.textContent, )
    localStorage.setItem('Telegram', Telegram.textContent, )
    localStorage.setItem('addres', addres.textContent, )
})


portfolio_edit.addEventListener("click", function()
{
    portfolio_text.contentEditable = true;
})


save_portfolio.addEventListener("click", function()
{
    localStorage.setItem('portfolio_text', portfolio_text.textContent)
})









