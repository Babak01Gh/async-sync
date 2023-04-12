
const submitBtn = document.querySelector('input[type="submit"]');
const detailsContainer = document.querySelector('.details-for');

submitBtn.addEventListener('click', ()=>{
    const selected = document.querySelector('input[name="email"]:checked').id;
    detailsContainer.classList.add('Onload');
    getDetails(selected,(data)=>{
        detailsContainer.innerHTML = `
        <p class="email">${data.email}</p>
        <p class="detail">${data.loginDetails}</p>
        <p class="courses">${data.courses}</p>
        `
        detailsContainer.classList.remove('Onload');
    })
})

function getDetails(id,callback){
    setTimeout(()=>{
        axios.get(`https://my-json-server.typicode.com/babak01Gh/async-sync/emails/${id}`).then(user => callback(user.data));    
    },2000)
}
