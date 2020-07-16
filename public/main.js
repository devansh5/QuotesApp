const update=document.querySelector('#update-button')

const deleteButton=document.querySelector('#delete-button')

const messageDiv=document.querySelector('#message')




deleteButton.addEventListener('click',_=>{
    fetch('/quotes',{
        method:'delete',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:'Dev here'
        })
        .then(res => {
            if (res.ok) return res.json()
          })
          .then(data => {
            window.location.reload()
          })
        .then(response => {
            if (response === 'No quote to delete') {
              messageDiv.textContent = 'No  quote to delete'
            } else {
              window.location.reload(true)
            }
          })
    })
})


update.addEventListener('click',_=>{
    fetch('/quotes',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:'Dev here',
            quote:'beginning is end and the end is beginning.'
        })
    })
})