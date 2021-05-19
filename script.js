let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
}

function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    oddList.appendChild(newListItem)


     if (usersWord.length % 2 === 0) {
        /* put word in even list */ return newListItem
    } else {
        /*put word in odd list*/ return newListItem
        oddList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("even-odd-form").requestFullscreen()
}

