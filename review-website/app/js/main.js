const infoArray = [
  {
    img: '../assets/img/profile_pic_1.jpg',
    fullname: 'susan smith',
    job: 'frontend developer',
    desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    img: '../assets/img/profile_pic_3.jpg',
    fullname: 'anna johnson',
    job: 'web designer',
    desc: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
  },
  {
    img: '../assets/img/profile_pic_2.jpg',
    fullname: 'peter jones',
    job: 'intern',
    desc: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
  },
  {
    img: '../assets/img/profile_pic_4.jpg',
    fullname: 'bill anderson',
    job: 'backend developer',
    desc: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
  }
]
const d = document
const $ = selector => d.querySelector(selector)
let i = 0
d.addEventListener('click', e => {
  if (e.target.matches('.next')) i++
  if (e.target.matches('.prev')) i--
  if (e.target.matches('.surprise-me')) i = Math.floor(Math.random() * infoArray.length - 1)
  i = indexValidator(i, infoArray)
  const card = infoArray[i]
  showCard(card.img, card.fullname, card.job, card.desc)
})
function indexValidator (index, array) {
  if (index > array.length - 1) {
    return 0
  }
  if (index < 0) {
    return array.length - 1
  }
  return index
}
function showCard (imgUrl, fullName, job, desc) {
  const $img = $('.profile-pic img')
  const $fullName = $('.fullname')
  const $job = $('.job')
  const $desc = $('.desc')

  $img.src = imgUrl
  $fullName.textContent = fullName
  $job.textContent = job
  $desc.textContent = desc
}
