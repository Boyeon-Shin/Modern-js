const image =[
    "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/804/c90e9c5408862343722dd5f16507b723_res.jpeg",

    "https://cdn.asiaa.co.kr/news/photo/202303/117028_130876_2519.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-28rqkFTWxtaZgo78fvvCK7-nKiQgGXkg&usqp=CAU"
]

let currentIdx = 0;
const $imageElement =
    document.getElementById("image")
const $prevButton  =
    document.getElementById("prevBtn")
const $nextButton =
    document.getElementById("nextBtn")

 function showImage(index) {
    $imageElement.src=image[index];

}
showImage(currentIdx);

$nextButton.addEventListener('click',() => {
    currentIdx = (currentIdx + 1) % image.length;
    showImage(currentIdx);

})
$prevButton.addEventListener('click',() => {
    currentIdx = (currentIdx - 1 + image.length) % image.length;
    showImage(currentIdx);
})
