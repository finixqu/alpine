const h3 =document.querySelector('h3')


for(let nomor= 0; nomor < 15; nomor++){
    let img = document.createElement('img');
    img.src = `https://randomuser.me/portraits/men/${nomor}.jpg`;
    document.body.append(img)
    console.log(img.src)
}

