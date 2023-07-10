export const navigation= ()=>{
  const bookList = document.querySelector('.book-list_container');
  const addBook_ = document.querySelector('.form_container');
  const contact = document.querySelector('.contact');
  const btnList = document.getElementById('btn-list');
  const btnAdd = document.getElementById('btn-add');
  const btnContact = document.getElementById('btn-contact');

  btnList.addEventListener('click',function(){
    bookList.classList.add('display')
    addBook_.classList.remove('display')
    contact.classList.remove('display')
    btnList.style.color='blue'
    btnAdd.style.color='black'
    btnContact.style.color='black'
  })
  
  btnAdd.addEventListener('click',function(){
    bookList.classList.remove('display')
    addBook_.classList.add('display')
    contact.classList.remove('display')
    btnList.style.color='black'
    btnAdd.style.color='blue'
    btnContact.style.color='black'
  })
  
  btnContact.addEventListener('click',function(){
    bookList.classList.remove('display')
    addBook_.classList.remove('display')
    contact.classList.add('display')
    btnList.style.color='black'
    btnAdd.style.color='black'
    btnContact.style.color='blue'
  })
}

navigation();