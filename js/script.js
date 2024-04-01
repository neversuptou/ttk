//  DROPDOWN
let intervalId;

document.querySelectorAll(".dropdown-toggle").forEach((e) => {
  e.addEventListener("click", (e) => {
    const menu = e.currentTarget.dataset.path;
    document.querySelectorAll(".dropdown-menu").forEach((e) => {
      if (!document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
        e.classList.remove('menu-active');
        e.classList.remove('open');
        document.querySelector(`[data-target=${menu}]`).classList.add("menu-active");
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.add("open");
        }, 0);
      }

      if (document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
        clearTimeout(intervalId)
        document.querySelector(`[data-target=${menu}]`).classList.remove("menu-active");
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.remove("open");
        }, 0)
      }

      window.onclick = e => {
        if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
          return;
        } else {
          document.querySelector(`[data-target=${menu}]`).classList.remove("menu-active");
          document.querySelector(`[data-target=${menu}]`).classList.remove("open");
        }
      }
    });
  });
});

//  YMAPS ROUTE

let center = [55.751574, 37.573856];
ymaps.ready(function () {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 7,
  });

  const addRoute = (array) => {
    var multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: array
    }, {
      boundsAutoApply: true
    });
    let map = new ymaps.Map('map', {
      center: center,
      zoom: 7,
    });
    map.geoObjects.add(multiRoute);
  }

  const arr = Array.from(document.querySelector(".dropdown-menu").children)
  arr.forEach(item => item.addEventListener('click', () => {
    document.querySelector('#map ymaps').remove()
    addRoute([item.children[0].dataset.from, item.children[0].dataset.to])
      let button = document.getElementById("own-button");
      let textButton = item.children[0].textContent;
      button.textContent = textButton;
  }))
});

//  HEADER BUTTONS

const navItems = Array.from(document.querySelector('.list ul').children).forEach((item) => {
  item.addEventListener("click", (e) => {
    const tabs = Array.from(document.querySelector('#myTab').children).forEach((tab) => {
      tab.children[0].classList.remove('active');
    })
    const tabsContent = Array.from(document.querySelector('#myTabContent').children).forEach((tabC) => {
      tabC.classList.remove('active', 'show');
    });

    const curTarg = e.currentTarget.children[0].dataset.value;
    document.getElementById(curTarg).classList.add('active');

    const tasbConent = e.currentTarget.children[0].dataset.value + '-pane'
    document.getElementById(tasbConent).classList.add('active', 'show');

  })
});

//  FOOTER BUTTONS

const footItems = Array.from(document.querySelector('.footerA').children).forEach((items) => {
  items.addEventListener("click", (e) => {
    const tabsFoot = Array.from(document.querySelector('#myTab').children).forEach((tab) => {
      tab.children[0].classList.remove('active');
    })
    const tabsFootContent = Array.from(document.querySelector('#myTabContent').children).forEach((tabContent) => {
      tabContent.classList.remove('active', 'show');
    });
//  console.log(e.currentTarget.dataset.val);
    const targetFooter = e.currentTarget.dataset.val;
    document.getElementById(targetFooter).classList.add('active');

    const contentFooter = e.currentTarget.dataset.val + '-pane'
    document.getElementById(contentFooter).classList.add('active', 'show');
  });
})

//  ORDER BOOKING BUTTON

const buttonBooking = document.querySelector('.buyB').onclick = function(e) { 
  const tabsBtn = Array.from(document.querySelector('#myTab').children).forEach((tab) => {
    tab.children[0].classList.remove('active');
  }) 
  const tabsBtnContent = Array.from(document.querySelector('#myTabContent').children).forEach((tabContent) => {
    tabContent.classList.remove('active', 'show');
  });
  const targetBtn = e.currentTarget.dataset.tyaga;
  document.getElementById(targetBtn).classList.add('active');

  const contentFooter = e.currentTarget.dataset.tyaga + '-pane'
    document.getElementById(contentFooter).classList.add('active', 'show');
  // const contentFooter = e.currentTarget.dataset.buttonB + '-pane'
  // document.getElementById(contentFooter).classList.add('active', 'show');
}

// VALIDATION FORM
let name;
let email;
let phone;
let checkbox;

function validName() {
  const myName = document.getElementById('InputName').value;
  let words = /[а-яА-ЯёЁa-zA-Z]$/;
  let validMyName = words.test(myName);
  if(!myName == ""){
    document.getElementById('InputName').classList.remove('error');
    document.getElementById('n-error').classList.add('d-none');
    return true;
  } else {
    document.getElementById('InputName').classList.add('error');
    document.getElementById('n-error').classList.add('mail-errors')
    // document.getElementById('n-error').classList.remove('d-none');
    return false;
  } 
}

function validEmail() {
  const myEmail = document.getElementById('InputEmail').value;
  let words = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let validMyEmail = words.test(myEmail);
  if(validMyEmail){
    document.getElementById('InputEmail').classList.remove('error');
    document.getElementById('e-error').classList.add('d-none');
    return true;
  } else {
    document.getElementById('InputEmail').classList.add('error');
    document.getElementById('e-error').classList.add('mail-errors')
    document.getElementById('e-error').classList.remove('d-none');
    return false;
  } 
}

function validPhone() {
  const myPhone = document.getElementById('InputPhone').value;
  let words = /^((\+7|7|8)+([0-9]){10})$/;
  let validMyPhone = words.test(myPhone);
  if(validMyPhone){
    document.getElementById('InputPhone').classList.remove('error');
    document.getElementById('p-error').classList.add('d-none');
    return true;
  } else {
    document.getElementById('InputPhone').classList.add('error');
    document.getElementById('p-error').classList.add('mail-errors')
    document.getElementById('p-error').classList.remove('d-none');
    return false;
  } 
}

function validCheckbox(){
  let checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    document.getElementById('c-error').classList.add('d-none');
    return true;
  } else {
    document.getElementById('c-error').classList.add('mail-errors')
    document.getElementById('c-error').classList.remove('d-none');
  }
}

function sucsses(){
  let modalBody = document.getElementById('mod-b')
  modalBody.classList.add('d-none')
  let zag = document.getElementById("staticBackdropLabel").textContent;
      zag.textContent = "СПАСИБО ЗА ЗАЯВКУ!";
}

const element = document.getElementById("submit-close"); // получить элемент по его ID
const form = document.getElementById('add-form')
form.addEventListener('change', (e) => {
  validPhone();
  validEmail();
  validName();
  validCheckbox()
 
  // if(validPhone() && validEmail() && validName() && validCheckbox()){
    // element.setAttribute("data-bs-dismiss", "modal"); // добавить атрибут и его значение
  // } else {
      // element.removeAttribute("data-bs-dismiss");
  // }
})
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validPhone()
  validEmail()
  validName() 
  validCheckbox()
  if( validPhone() && validEmail() && validName() && validCheckbox()){
    name = form[0].value
    email = form[1].value
    phone = form[2].value
    checkbox = form[3].value

  const  data = {
    name: name,
    email: email,
    phone: phone,
  }
  console.log(data)
  sucsses();
  };
})
