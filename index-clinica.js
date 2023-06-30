// Услуги

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


//Запись
document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Запишись сейчас';
    button.className = 'btn-styled';
 
    button.onclick = function() {
       };
 
    var container = document.getElementById('container-0');
    container.appendChild(button);
}, false);
//записсь end

// Проверка статуса
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Проверить статус';
  button.className = 'btn-styled';

  button.onclick = function() {
     };

  var container = document.getElementById('container-0');
  container.appendChild(button);
}, false);

// Больше инфо
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Больше информации';
  button.className = 'btn-styled';

  button.onclick = function() {
     };

  var container = document.getElementById('container-01');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Больше информации';
  button.className = 'btn-styled';

  button.onclick = function() {
     };

  var container = document.getElementById('container-02');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Больше информации';
  button.className = 'btn-styled';

  button.onclick = function() {
     };

  var container = document.getElementById('container-03');
  container.appendChild(button);
}, false);

// media


