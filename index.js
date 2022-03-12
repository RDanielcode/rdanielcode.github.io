// const toggleButton = document.querySelector('.toggleShow');
// const container = document.querySelector('.container');
// const profetional = document.querySelector('.profetional');

// toggleButton.onclick = () =>{
//     if(container.children.length === 2){
//         container.removeChild(container.lastChild);
//         container.classList.remove('grid');
//         profetional.classList.remove('profetional-click');

//     }else {
//         const personal = document.createElement('aside');
//         personal.innerHTML = `<div class="personal__container">
//         <div class="personal__img">
            
//         </div>
//         <div class="personal__info">
//             <span class="name">Daniel Reyes</span>
//             <p class="tech">Chemical Engineer</p>
//             <p class="tech">Frontend Developer|</p>
//             <p class="tech">React| JavaScript| CSS3| HTML5</p>
//         </div>
//         </div>
//         <div></div>
//         <div></div>`
    
//         container.appendChild(personal);
    
//         container.classList.add('grid');
//         profetional.classList.add('profetional-click');
//         personal.classList.add('personal-click');        
//     }
    
// }

const checkbox = document.querySelector('#btn-menu');
const toggleButton = document.querySelector('.toggleShow');
const exit = document.querySelector('.exit-button');
const profetional = document.querySelector('.profetional');

// toggleButton.onclick = () =>{
//     profetional.disabled = true;

// }

// exit.onclick = () =>{
//     profetional.disabled = false;
// }

checkbox.addEventListener('change', (event)=>{
    if(checkbox.checked){
        profetional.classList.add('profetional-click')
    } else {
        profetional.classList.remove('profetional-click')

    }
})
debugger

