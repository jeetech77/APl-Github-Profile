const head = document.querySelector('h1');
const inputArea = document.querySelector(".input-area");
const btn = document.querySelector(".btn");
const imageBottomDiv = document.querySelector(".image-bottom");
const errorPara=document.querySelector(".error-para");
let apiUrl = "https://api.github.com/users"
btn.addEventListener("click", () => {
    let userName = inputArea.value;
    console.log(userName);
    let finalUrl=createUrl(apiUrl,userName);
    fetch(finalUrl)
    .then(Response=>Response.json())
    .then(json=>{
        console.log(json);
        let userImgUrl=json.avatar_url;
        let newImgElement=document.createElement("img");
        console.log(userImgUrl);
        newImgElement.src=userImgUrl;
        document.body.insertBefore(newImgElement,imageBottomDiv);
    })
    .catch(error=>errorPara.innerHTML=error);
});
function createUrl(url,text){
    return (`${url}/${text}`);
}