var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

const opentab = (tabname) => {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


var sidemenu = document.getElementById('side-menu');

const openMenu = () => {
    sidemenu.style.right = '0';
}

const closeMenu = () => {
    sidemenu.style.right = '-200px';
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxgCY3uq_AAZPnMtZmonhz1k9Qx5LKKtaU6J4NgduvZC5t4n8bLCqsxWjkYHPq_cjlV/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            Swal.fire('Message sent succesfully!')
            // setTimeout(function () {
            //     msg.innerHTML = ""
            // }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


