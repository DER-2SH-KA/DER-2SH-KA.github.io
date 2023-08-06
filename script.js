// function AddNewWebPage() {
//     var pageName = prompt("Введите название для новой кнопки");
//     var pageSource = prompt("Введите ссылку на сайт");

//     const $textNode = document.createTextNode(String(pageName));

//     const $DIV = document.createElement('div');
//     $DIV.className = "use_link";

//     const $Anchor = document.createElement('a');
//     $Anchor.appendChild($textNode);
//     $Anchor.href = String(pageSource);

//     $DIV.appendChild($Anchor);
    
//     const $links = document.querySelector('#links');
//     $links.appendChild($DIV);
// }