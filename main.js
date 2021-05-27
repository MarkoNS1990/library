let myLibrary = []

const book = (author,title,pages,read) =>{
    
    const addBookToLibrary = () =>{
        myLibrary.push({author,title,pages,read})
    }

    return {addBookToLibrary,author,title,pages,read}
}

const ui = ()=>{
    const addBookToUi =(book) =>{
        const list = document.getElementById('book-list')
        //Create tr element
        const row = document.createElement('tr')
        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="delete">X<a></td>`;
    
        list.appendChild(row)
        }
    
      const showAlert=(message,className)=>{
        //Create a div
        const div = document.createElement('div')
        //Add classes
        div.className = `alert ${className}`
        //Add text
        div.appendChild(document.createTextNode(message))
        //Get paremt
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        //Insert alert
        container.insertBefore(div,form)
    
        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
        }
    
      const deleteBook = (target) =>{
        if(target.className === 'delete'){
                target.parentElement.parentElement.remove()
        }
        }
    
      const  clearFields= () =>{
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('pages').value = ''
        }
  return {addBookToUi,showAlert,clearFields,deleteBook}
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
        myUi.addBookToUi(myBook)

        //Show success
        myUi.showAlert('Book Added','success')

        //Clear fields
        myUi.clearFields()
    }

    

    
    
    
})

//Event Listener for Delete
document.getElementById('book-list').addEventListener('click',function(e){

    const myUi = ui()

    myUi.deleteBook(e.target)

    //Show message
    myUi.showAlert('Book deleted','success')

    e.preventDefault()
})