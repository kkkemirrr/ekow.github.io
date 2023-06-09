// document.querySelector('#elastic').oninput = function(){
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('products.json li')
//     if(val != ''){
//         elasticItems.forEach(function(elem){
//             if(elem.innerText.search(val) == -1 ){
//                 elem.classList.add('hide')
//             }
//             else{
//                 elem.classList.remove('hide')
//             }
//         })
//     }
//     function insertMark(string, pos , len){
//         // hello world
//         //hello <mark> wo </mark> rld
//         // hello + <mark>+wo+</mark>rld
//         return string.slice(0,pos)+'<mark>' + string.slice(pos, pos + len)+ '</mark>' + string.slice(pos + len);
//     }
// }