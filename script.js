const modalShow= document.getElementById('show-modal');
const modal= document.getElementById('modal');
const modalClose =document.getElementById('close-modal');
const bookmarkForm=document.getElementById('bookmark-form');
const websiteNameEl=document.getElementById('website-name');
const websiteUrlEl=document.getElementById('website-url');
const bookmarksContainer= document.getElementById('bookmarks-container');


const bookmarks =[];

function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();

}

function closeModal(){
    modal.classList.remove('show-modal');
}

function addBookmark(){
    bookmarks.forEach((bookmark) =>{
        const item= document.createElement('div');
        const i = document.createElement('i');
        i.setAttribute('class',"fa fa")
    })
}

function validateUrl(nameValue,urlValue){
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
      );
      if (!urlValue || !nameValue){
        alert('Please Enter A value for both');
      }
      if(urlValue.match(pattern)){
        alert('match');
        }
      if(!urlValue.match(pattern)){
            alert('Please Enter A Valid url');
            return false;
      }
}

function storeBookmark(e){
    e.preventDefault();
    const nameValue = e.srcElement[0].value;
    let urlValue =e.srcElement[1].value;
    if (!urlValue.includes('http://','https://')){
        urlValue=`https://${urlValue}`
    }
    console.log(nameValue,urlValue);
    validateUrl(nameValue,urlValue);
    console.log(nameValue,urlValue);
    let bookmark = {
        name:nameValue,
        url:urlValue
    }
    bookmarks.push(bookmark);
    addBookmark();
}

modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click',closeModal);

window.addEventListener('click',(e)=>(e.target === modal ? closeModal() :false));
bookmarkForm.addEventListener('submit',storeBookmark);