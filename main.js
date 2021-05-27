let myLibrary = []

const book = (author,title,pages,read) =>{
    
    const addBookToLibrary = () =>{
        myLibrary.push({author,title,pages,read})
    }

    return {addBookToLibrary}
}

const title = document.getElementById('title')
const author = document.getElementById('author')
const yesRead = document.getElementById('yesRead')
const noRead = document.getElementById('noRead')

const ui = ()=>{

}


