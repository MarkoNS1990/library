let myLibrary = []

const book = (author,title,pages,read) =>{
    
    const addBookToLibrary = () =>{
        myLibrary.push({author,title,pages,read})
    }

    return {addBookToLibrary,author,title,pages,read}
}

const ui = ()=>{
   const addBookToUI = (book) =>{
    const list = document.getElementById('book-list')
    //Create tr element
    const row = document.createElement('tr')
    //Insert cols
    row.innerHTML = `
    <td>${book.author}<td>
    <td>${book.title}<td>
    <td>${book.pages}<td>
    <td><a href='#' class='delete'> X <a><td>`

    list.appendChild(row)
   }
   const clearFields = () =>{
    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    }
    const showAlert = (message,className)=>{
        //Create a div
        const div = document.createElement('div')
        //Add classes
        div.className = `alert ${className}`
        //Add text
        div.appendChild(document.createTextNode(message))
        //Get parent
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        //Insert alert
        container.insertBefore(div,form)
    
        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    
    }
  return {addBookToUI,showAlert,clearFields}
}



//Event Listener for Add book
document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault()
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          pages = document.getElementById('pages').value
        
          
    //Instantiate book
    const myBook = book(title,author,pages)
    console.log(myBook)
    //Instantiate UI
    const myUi = ui()

    //Validate
    if(title === '' || author === '' || pages === ''){
       //Error alert
       myUi.showAlert('Please fill in all fields','error')
    }else{
        //Add book to list
        myUi.addBookToUI(myBook)

        //Show success
        myUi.showAlert('Book Added','success')

        //Clear fields
        myUi.clearFields()
    }

    

    
    
    
})