const titleOfSpectacle = document.title // или заменить потом на заголовок h1 с названием пьессы
const descriptionOfSpectacle = 'Пьеса о демоническом обаянии студентки ПТУ и ее роковой роли в жизни преподавателя философии'  // заменить на описание из первого раздела
const fotoOfSpectacle = document.querySelector('.share__picture') // заменить на фото из описания пьессы


document.querySelector('.share__link_fb').addEventListener('click', () => {
   window.open(`https://www.facebook.com/sharer.php?s=100&p%5Btitle%5D=${titleOfSpectacle}&p%5Bsummary%5D=${descriptionOfSpectacle}&p%5Burl%5D=${window.location.href}&p%5Bimages%5D%5B0%5D=${fotoOfSpectacle.src}`, 'sharer', 'status=0,toolbar=0,width=650,height=500')
});
document.querySelector('.share__link_vk').addEventListener('click', () => {
   window.open(`https://vkontakte.ru/share.php?url=${window.location.href}`,'sharer','status=0,toolbar=0,width=650,height=500')
})
document.querySelector('.share__link_twtr').addEventListener('click', () => {
   window.open(`https://twitter.com/intent/tweet?text=${titleOfSpectacle}. ${descriptionOfSpectacle}. ${window.location.href}`, 'sharer', 'status=0,toolbar=0,width=650,height=500')
})
