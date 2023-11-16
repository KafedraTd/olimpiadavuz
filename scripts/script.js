
const cyrillicPattern = /^[\u0400-\u04FF]+$/;
const englishPattern = /^[a-zA-Z]+$/;
var refs={
  "customsList": "https://customs.gov.ru/Structure/perechen--tamozhennyx-organov-v-for",
  "tnvedDoc": "https://www.consultant.ru/cons/cgi/online.cgi?from=438878-80&req=doc&rnd=MCCUw&base=LAW&n=455987#J4VJlqTkJzOtBmel",
  "pkgsClass":"../pages/classificationOfPacking.html",
  "troisList":"https://www.alta.ru/rois/",
  "descriptDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=409905-0&req=doc&rnd=MCCUw&base=LAW&n=436034#cUZRlqTaQ7FmylWv1",
  "dtiClass":"../pages/classificationOfDti.html",
  "prefClass":"../pages/classificationOfPref.html",
  "incotermsClass":"../pages/classificationOfIncoterms.html",
  "customsDoc":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=fhuoCA&base=LAW&n=380602&cacheid=91EE7F34B05BC0730D198101904AB3CB&mode=rubr#Ra75Q2TaUet7JsxD",
  "feesDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=416219-0&req=doc&rnd=MCCUw&base=LAW&n=447294#U0wSlqTQrZs4XDyd2",
  "exdutiesDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=433259-0&req=doc&rnd=MCCUw&base=LAW&n=457844#PcCTlqTa6uF6DTYz",
  "imdutiesDoc": "https://www.consultant.ru/cons/cgi/online.cgi?from=438878-80&req=doc&rnd=MCCUw&base=LAW&n=455987#J4VJlqTkJzOtBmel",
  "taxesDoc":"https://www.consultant.ru/cons/cgi/online.cgi?from=438470-0&req=doc&rnd=MCCUw&base=LAW&n=454239#0niTlqT9wTpJkWFX",
  "trackingDoc":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=2tWYzw&base=LAW&n=441402&dst=100009&field=134#34agSYTsarxNNXDC",
  "prefsDoc":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=402119&dst=21#fn0jhvTosMS52DZ7",
  "markingDoc":"https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=448695#JNeihvT0ykPbP5883"
}
var itemQty = 1;
var except=['check8kt','CodeDI','2-CodeDI','3-CodeDI','4-CodeDI']
let allTdTags = document.getElementsByTagName('td');

let currEvent=localStorage.getItem('evtstu')
      
function getDeclaration (url) {
        async function getData() {
          const response = await fetch(url);
          const data = await response.json();
          let dataArray = Array.from(data);

          
          for (i = 0; i < dataArray.length; i++) {
              if (dataArray[i].usrName == localStorage.getItem('student') && 
              dataArray[i].date == localStorage.getItem('dtfill') && 
              dataArray[i].studEvent == localStorage.getItem('evtstu')) {
                
                var dataArrayUsr = Object.entries(dataArray[i]);
                document.getElementById(dataArrayUsr[0][0]).textContent = dataArrayUsr[0][1];
                document.getElementById(dataArrayUsr[1][0]).textContent = dataArrayUsr[1][1];
                document.getElementById(dataArrayUsr[2][0]).textContent = dataArrayUsr[2][1];
                
                for (y = 5; y < dataArrayUsr.length; y++) {
                  if(!except.includes(dataArrayUsr[y][0])){
                    grafaName="data["+dataArrayUsr[y][0].toString()+"]"
                    document.getElementsByName(grafaName)[0].value = dataArrayUsr[y][1];
                  }

          };
      };
    };
};
getData();
};

function href(){
  for (var i of Object.keys(refs)){
    let arg="[data-nm="+i+"]"
    let els=document.querySelectorAll(arg)
    for (el of els){
      el.href=refs[i]
    }
  }
}

href()


Array.from(allTdTags).forEach(e => {
  e.href = "#popup";
})

function grafa(cbID, itID, itsName) {
  var cbID, itID
  var checkBox = document.getElementById(cbID);
  if (checkBox.checked == true) {
    let inputs = document.getElementsByClassName(itsName);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
      //inputs[i].disabled = true;
      if (inputs[i].name != 'data[' + itsName + '-1]') {
        inputs[i].style.display = 'none';
      }
    }
    document.getElementById(itID).value = "СМ.ГРАФУ 14 ДТ";
  } else {
    document.getElementById(itID).value = ""
    let inputs = document.getElementsByClassName(itsName);
    for (let i = 0; i < inputs.length; i++) {
      // inputs[i].className += " defaultColor"
      inputs[i].style.display = 'flex';
      //inputs[i].disabled = false;   
    }
  }
}

// ФИЛЬТРАЦИЯ ТЕКСТА В ВЫПАДАЮЩЕМ СПИСКЕ ПО ГРАФЕ
function selit(a) {
  var x = (a.options[a.selectedIndex].value);
  alert(x);
}

// ДОВАЛЕНИЕ ГРАФ ДЛЯ ОДНОГО ТОВАРА ПО НАЖАТИЮ КНОКПИ--------------------------------------------------------------
function addingNewGoods() {
  if (itemQty < 4) {
    itemQty++;
  }

  document.getElementById('grafa3-1').value = 1;
  document.getElementById('grafa3-2').value = Math.round(itemQty / 3) + 1;
  document.getElementById('grafa5').value = itemQty;
  let goodnumber = "goodNumber" + itemQty;
  document.getElementById(goodnumber).style.display = 'contents';
  let gr = 'gr32-1-' + itemQty;
  window.scrollTo(0, document.body.scrollHeight);
  document.getElementById(gr).focus();
  populateOptions();
}
// ------------------------------------------------------------------------------------------------------------------
function removingNewGoods() {
  if (itemQty == 0 || itemQty == 1) {
  } else {
    let goodnumber = "goodNumber" + itemQty;
    document.getElementById(goodnumber).style.display = 'none';
    itemQty--;
    populateOptions();
    document.getElementById('grafa3-2').value = Math.round(itemQty / 3) + 1;
    document.getElementById('grafa5').value = itemQty;
  }
}// end of removingNewGoods ---------------------------------------------------------------------------------------------

function populateOptions() {
  var selectArray = document.getElementsByClassName('itemNum');
  // for (i = 0; i < selectArray.length; i++) {
  //   selectArray[i].options.length = 0;
  // }
  var ar = [];
  for (i = 0; i < itemQty; i++) {
    var ele = document.createElement('option');
    ele.value = i + 1;
    ar[i] = ele.value;
  }

  for (i = 0; i < selectArray.length; i++) {
    let options = ar.map(opt => `<option value= ${opt.toLowerCase()}>${opt}</option>`).join('\n');
    selectArray[i].innerHTML = options;
  }
}

//----------------------------------ГРАФА 44 КНОПКИ------------------------------------------------------------------------
function copyDocs(objName) {
  if (itemQty > 1) {
    var itemNumber1 = objName.className.split('-')[1];
    var selectText = 'itemNum' + itemNumber1;
    var selectNumber = document.getElementById(selectText);
    var itemNumber2 = selectNumber.options[selectNumber.selectedIndex].value;
    var docArray = document.getElementsByClassName('grafa44t' + itemNumber2);
    for (i = 0; i < docArray.length; i++) {
      var Adoc = 'grafa44' + itemNumber1 + '-' + (i + 1);
      var Bdoc = 'grafa44' + itemNumber2 + '-' + (i + 1);
      document.getElementById(Adoc).value = document.getElementById(Bdoc).value;
    }
  }
}

// ФУНКЦИЯ ПОСТРОЕНИЕ ГРАФЫ 44 В ПОРЯДКЕ ВОЗРОСТАНИЯ КОДОВ ДОКУМЕНТОВ

function orderDocs(btnDoc) {

  // ПОЛУЧЕНИЕ МАССИВА ВСЕХ ПОЛЕЙ ДОКУМЕНТОВ ГРАФЫ 44 ПО КОНКРЕТНОМУ ТОВАРУ (ПО ИМЕНИ КНОПКИ В 44 ГРАФЕ)
  var objName = btnDoc.className.toString();
  var itemNumber = objName.split('-')[1];
  var docNames = "grafa44t" + itemNumber;
  var docArray = document.getElementsByClassName(docNames);

  // СЧИТЫВАНИЕ СОДЕРЖИМОГО ВСЕХ ЗАПОЛНЕННЫХ ПОЛЕЙ 44 ГРАФЫ И ЗАПИСЬ ИХ В МАССИВ 
  var valArray = [];
  for (var i = 0; i < docArray.length; i++) {
    if (docArray[i].value.length > 6) {
      valArray[i] = docArray[i].value;
    }
  }
  var temp = [];
  for (let i of valArray) {
    i && temp.push(i);
  }
  valArray = temp;

  // СОЗДАНИЕ ДВУХУРОВНЕВОГО МАССИВА СОДЕРЖИМОГО ПОЛЕЙ 44 ГРАФЫ ДЛЯ ПОСЛЕДУЮЩЕЙ СОРТИРОВКИ ПО ПЕРВОМУ ЭЛЕМЕНТУ
  var val2DArray = new Array(valArray.length);
  for (let i = 0; i < val2DArray.length; i++) {
    val2DArray[i] = new Array(2);
  }
  // ЗАПИСЬ В ДВУХУРОВНЕВЫЙ МАССИВ СОДЕРЖИМОГО ПОЛЕЙ 44 ГРАФЫ ДЛЯ ПОСЛЕДУЮЩЕЙ СОРТИРОВКИ ПО ПЕРВОМУ ЭЛЕМЕНТУ
  for (i = 0; i < valArray.length; i++) {
    val2DArray[i][0] = valArray[i].split(' ')[0];
    val2DArray[i][1] = valArray[i];
  }
  // СОРТИРОВКА ПО АЛФАВИТУ ДВУХУРОВНЕВОГО МАССИВА
  val2DArray.sort(sortFunction);
  function sortFunction(val2DArray, bArray) {
    if (val2DArray[0] === bArray[0]) {
      return 0;
    } else {
      return (val2DArray[0] < bArray[0]) ? -1 : 1;
    }
  }
  // ОБНУЛЕНИЕ СОДЕРЖИМОГО ВСЕХ ПОЛЕЙ 44 ГРАФЫ
  for (i = 0; i < docArray.length; i++) {
    docArray[i].value = null;
  }
  // ЗАПИСЬ В ПОЛЯ 44 ГРАФЫ ДАННЫХ ИЗ ОТСОРТИРОВАННОГО ДВУХУРОВНЕВОГО МАССИВА
  for (i = 0; i < val2DArray.length; i++) {
    let str = '#grafa44' + itemNumber.toString() + '-' + (i + 1).toString();
    var doc = document.querySelector(str);
    doc.value = val2DArray[i][1];
  }
}

// Изменение и сброс цвета
let defaultColor = '#dcdcdc';
let defaultColorInput = 'white';
let defaultColorInputFont = '#0f7a65';
let allButtons = document.getElementsByTagName('button');
let allTds = document.getElementsByTagName('td');
let allInputs = document.getElementsByTagName('input');
let allTextarea = document.getElementsByTagName('textarea');

const colorChangerTd = document.querySelector('#color1');
const colorChangerInput = document.querySelector('#color2');
const colorChangerInputFont = document.querySelector('#color3');

colorChangerTd.addEventListener('change', function () {
  Array.from(allTds).forEach(v => v.style.backgroundColor = this.value);

});

colorChangerInput.addEventListener('change', function () {
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputBackgroundColor', this.value));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputBackgroundColor', this.value));
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFocusFontColor', this.value));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFocusFontColor', this.value));
});

colorChangerInputFont.addEventListener('change', function () {
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFocusBackgroundColor', this.value));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFocusBackgroundColor', this.value));
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFontColor', this.value));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFontColor', this.value));
});




var colorChangerBool
function hideColorChanger() {

  if (colorChangerBool == 1) {
    document.getElementById('settings').style.display = "block";
    return colorChangerBool = 0;
  } else {
    document.getElementById('settings').style.display = "none";
    return colorChangerBool = 1;
  }
}

function resetColor() {
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputBackgroundColor', defaultColorInput));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputBackgroundColor', defaultColorInput));
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFocusFontColor', defaultColorInput));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFocusFontColor', defaultColorInput));
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFocusBackgroundColor', defaultColorInputFont));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFocusBackgroundColor', defaultColorInputFont));
  Array.from(allInputs).forEach(v => v.style.setProperty('--inputFontColor', defaultColorInputFont));
  Array.from(allTextarea).forEach(v => v.style.setProperty('--inputFontColor', defaultColorInputFont));
  Array.from(allTds).forEach(v => v.style.backgroundColor = defaultColor);
}

//------------------------------------------------------------------------------------------------------------------------
function orderDuty(dutyName) {

  // СОЗДАНИЕ ДВУХУРОВНЕВОГО МАССИВА СОДЕРЖИМОГО ПОЛЕЙ 47 ГРАФЫ ДЛЯ ПОСЛЕДУЮЩЕЙ СОРТИРОВКИ ПО ПЕРВОМУ ЭЛЕМЕНТУ
  var val2DArray47 = new Array(7);

  for (let i = 0; i < 7; i++) {
    val2DArray47[i] = new Array(5);
    let dutyStr = 'grafa47t' + dutyName.className.toString().split('-')[1] + '-' + (i + 1).toString() + '-1';
    if (document.getElementById(dutyStr).value != "") {
      for (k = 0; k < 5; k++) {
        let dutyStrK = 'grafa47t' + dutyName.className.toString().split('-')[1] + '-' + (i + 1).toString() + '-' + (k + 1).toString();
        val2DArray47[i][k] = document.getElementById(dutyStrK).value;
      }

    }
  }
  val2DArray47.sort();
  var counter = 0;
  for (i = 0; i < val2DArray47.length; i++) {
    if (val2DArray47[i][0] == null) {
      counter++;
    }
  }
  val2DArray47.splice(0, counter);


  let duty = 'grafa47t' + dutyName.className.toString().split('-')[1];
  let dutyNameArray = document.getElementsByClassName(duty);
  for (i = 0; i < dutyNameArray.length; i++) {
    dutyNameArray[i].value = null;
  }

  for (i = 0; i < val2DArray47.length; i++) {
    for (k = 0; k < 5; k++) {
      let dutyStrK = 'grafa47t' + dutyName.className.toString().split('-')[1] + '-' + (i + 1).toString() + '-' + (k + 1).toString();
      document.getElementById(dutyStrK).value = val2DArray47[i][k];
    }
  }

} // end of the orderDuty

function clearDocArray(itemN) {
  let duty = 'grafa44t' + itemN.className.toString().split('-')[1];
  let dutyNameArray = document.getElementsByClassName(duty);
  for (i = 0; i < dutyNameArray.length; i++) {
    dutyNameArray[i].value = null;
  }
}


function ClearDutyArray(itemN) {
  let duty = 'grafa47t' + itemN.className.toString().split('-')[1];
  let dutyNameArray = document.getElementsByClassName(duty);
  for (i = 0; i < dutyNameArray.length; i++) {
    dutyNameArray[i].value = null;
  }

};


// ФУНКЦИЯ ДОСТАВЛЕНИЯ И ОКРУГЛЕНИЯ ЧИСЕЛ ДО ДВУХ, ТРЕХ И ЧЕТЫРЕХ ЗНАКОВ ПОСЛЕ ЗАПЯТОЙ
function rounding(numberObject, digit) {
  var numX = numberObject.value;
  if (numX != "") {
    var numY = ((numX * 100) / 100).toFixed(digit);
    numberObject.value = numY;
  }
};

function formatDate() {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  document.getElementById('date').value = day + "/" + month + "/" + year + ' ' + hour + ':' + minute + ':' + second;
};

// const declarationsArray = [['ВСО 2022', 'declarationvso22reg'], 
// ['РЕГИОНАЛЬНЫЙ ЭТАП ВСО 2021', 'declarationvso21reg']];
// var m = new Map(declarationsArray);
// var keysArray = Array.from(m.keys());
// var valuesArray = Array.from(m.values());

function getTransfering() {
  var greetingName = localStorage.getItem('loginName');
  var studEvent = localStorage.getItem('evtstu');
  var year = studEvent.split(':')[0].split(' ')[2].trim();
  var level = studEvent.split(':')[0].split(' ')[1].trim();
  document.getElementById('greeting').innerText = "Декларация на товары [" + greetingName + "]";
  document.getElementById('usrName').value = greetingName;
  document.getElementById('studEvent').value = studEvent;
  formatDate();
  
  if(currEvent.includes('ПАРА')){
    getDeclaration("https://sheetdb.io/api/v1/d74h4a1vd9319")
  }

  const xhr = new XMLHttpRequest();
  const conToAddIn = document.querySelector('.popup__text');
  xhr.onload = function () {
    if (this.status === 200) {
      conToAddIn.innerHTML = xhr.responseText;
    } else {
      alert('Условие задачи не загрузилось');
    }
  };
  if (level == 'ВУЗ') { level = 'vuz' } else if (level == 'РЕГ') { level = 'reg' };
  let declarationAddress=''
  if(currEvent.includes('ПАРА')){
    declarationAddress = '../DT/declarationvso' + studEvent.split(':')[1].trim() + '.html';
    let term=document.getElementById('terms')
    term.innerHTML=term.innerHTML+' /'+ studEvent.split(':')[1]
  }else{
    declarationAddress = '../DT/declarationvso' + year + level + '.html';
    let term=document.getElementById('terms')
    term.innerHTML=term.innerHTML+' /'+year + level
  }
  xhr.open('get', declarationAddress);
  xhr.send();
};

document.getElementById('external').addEventListener('click',()=>{
  let term=document.getElementById('terms').innerText.split('/')[1]
  console.log(term)
  let text=`declarationvso${term}.html`
  window.open(text,'_blank')
})


window.addEventListener("beforeunload", function (e) {

  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
  return confirmationMessage;                                /* Safari, Chrome, and other
                                                              * WebKit-derived browsers */
});



var form = document.getElementById('declarationApp');
document.getElementById('submit').addEventListener('click', () => {
  document.querySelector('.loader').classList.remove('loader--hidden');
  formatDate();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(
    response => response.json()
  ).then((html) => {
    document.querySelector('.loader').classList.add('loader--hidden');
    document.body.removeChild(document.querySelector('.loader'));
    setTimeout(() => {
      alert('Декларация успешно отправлена. Можно закрывать страницу.')
    }, 200);
  });
  document.getElementById('speed-dial').style.display = 'none';

});

// document.getElementById('upload').addEventListener('click', () => {
//   document.querySelector('.loader').classList.remove('loader--hidden');
//   formatDate();
//   fetch(form.action, {
//     method: "POST",
//     body: new FormData(form),
//   }).then(
//     response => response.json()
//   ).then((html) => {
//     document.querySelector('.loader').classList.add('loader--hidden');
//     document.body.removeChild(document.querySelector('.loader'));
//     setTimeout(() => {
//       alert('Декларация успешно отправлена. Можно закрывать страницу.')
//     }, 200);
//   });
//   document.getElementById('speed-dial').style.display = 'none';

// });

var inputElements = document.querySelectorAll('input');
var inputArray1 = ['data[grafa2-9]', 'data[grafa8-9]', 'data[grafa9-9]', 'data[grafa14-9]', 'data[grafa54-16]',
  'data[grafa2-12]', 'data[grafa8-12]', 'data[grafa9-12]', 'data[grafa14-12]',
  'data[grafa47t1-3]', 'data[grafa47t1-8]', 'data[grafa47t1-13]', 'data[grafa47t1-18]', 'data[grafa47t1-24]',
  'data[grafa47t1-28]', 'data[grafa47t1-33]', 'data[2-grafa47t1-3]', 'data[2-grafa47t1-8]', 'data[2-grafa47t1-13]',
  'data[2-grafa47t1-18]', 'data[2-grafa47t1-24]', 'data[2-grafa47t1-28]', 'data[2-grafa47t1-33]', 'data[3-grafa47t1-3]',
  'data[3-grafa47t1-8]', 'data[3-grafa47t1-13]', 'data[3-grafa47t1-18]', 'data[3-grafa47t1-24]', 'data[3-grafa47t1-28]',
  'data[3-grafa47t1-33]', 'data[4-grafa47t1-3]', 'data[4-grafa47t1-8]', 'data[4-grafa47t1-13]',
  'data[4-grafa47t1-18]', 'data[4-grafa47t1-24]', 'data[4-grafa47t1-28]', 'data[4-grafa47t1-33]', 'data[grafaB-1]',
  'data[grafaB-2]', 'data[grafaB-3]', 'data[grafaB-4]', 'data[grafaB-5]', 'data[4-grafa33-1]', 'data[3-grafa33-1]', 'data[2-grafa33-1]', 'data[grafa33-1]'];
var inputArray2 = ['data[grafa2-4]', 'data[grafa8-4]', 'data[grafa9-4]', 'data[grafa14-4]', 'data[grafa30-5]'];
var inputArray3 = ['data[grafa18-1]', 'data[grafa21-1]'];
var inputArray4 = ['data[grafa2-1]', 'data[grafa8-1]'];
var countriesNames = ['data[grafa2-2]', 'data[grafa8-2]', 'data[grafa9-2]', 'data[grafa14-2]', 'data[grafa30-3]'];


[].forEach.call(inputElements, function (el) {
  el.addEventListener('focusout', function (e) {
    el.value = el.value.toUpperCase();
    if (inputArray3.includes(el.name)) { // ТРАНСПОРТНЫЕ ГРАФЫ 18 И 21
      if (hasNumbers(el.value.split(':')[1])) {
        el.value = el.value.replace(/\s/g, '');
      } else {
        try {
          el.value = el.value.split(':')[0].trim() + ':' + el.value.split(':')[1].replace(/['"]+/g, '').trim();
        }
        catch {
          el.value = el.value.replace(/\s/g, '');
        }
      }
    }
    if (inputArray1.includes(el.name)) { // ВСЕ ТЕКСТОВЫЕ ГРАФЫ
      el.value = el.value.replace(/\s/g, '');
      if (el.classList.contains('rate')) {
        let x=el.value
        if (x.slice(-1) == ',') { x = x.slice(0, -1) }
        if (x.slice(-1) == '.') { x = x.slice(0, -1) }
        el.value=x
      }
    } else if (inputArray2.includes(el.name)) { // НАСЕЛЕННЫЙ ПУНКТ Г., А. ...
      if (el.value) {
        let txt = el.value
        if (txt.indexOf('.') > -1) {
          el.value = txt.split('.')[0].trim() + '.' + txt.split('.')[1].trim();
        } else if (txt.indexOf(' ') > -1) {
          let txtArray = txt.split(' ')
          let firstChar = txt.split(' ')[0].trim()
          if (firstChar.length == 1) {
            let txt0 = firstChar + '.'
            for (let i = 1; i < txtArray.length; i++) {
              txt0 = txt0 + txtArray[i] + ' '
            }
            el.value = txt0
          }
        }

      }
    } else if (inputArray4.includes(el.name)) { // НАЗВАНИЯ ИНОСТРАННЫХ КОМПАНИЙ
      el.value = el.value.trim();
    } else { // ОСТАЛЬНЫЕ ГРАФЫ
      el.value = el.value.trim();
    }
  });
});

function populateRussianRegions(el) {
  if (el.name != 'data[grafa30-4]') {
    elementToCheckName = el.name.split('-')[0] + "-2]"
    selectedCountry = document.getElementsByName(elementToCheckName)[0]
    if (selectedCountry.value == 'РОССИЯ') {
      el.setAttribute('list', 'russianRegions')
    } else {
      try {
        el.removeAttribute('list')
      }
      catch {
        console.log('catch')
      }
    }
  } else {
    elementToCheckName = el.name.split('-')[0] + "-3]"
    selectedCountry = document.getElementsByName(elementToCheckName)[0]
    if (selectedCountry.value == 'РОССИЯ') {
      el.setAttribute('list', 'russianRegions')
    } else {
      try {
        el.removeAttribute('list')
      }
      catch {
      }
    }
  }

}


function hasNumbers(t) {
  var regex = /\d/g;
  return regex.test(t);
}

