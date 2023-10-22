var degree = 0;
var cost = 0;
var fillerA = 0;
var fillerU = 0;
var grafaArray = [['grafa1_1', 0.25], ['grafa1_2', 0.25], ['grafa1_3', 0.25], ['grafa2-1', 0.25], ['grafa2-2', 0.25],
['grafa2-3', 0.25], ['grafa2-4', 0.25], ['grafa2-5', 0.25], ['grafa2-6', 0.25], ['grafa2-7', 0.25], ['grafa2-8', 0.25],
['grafa2-9', 0.25], ['grafa2-10', 0.25], ['grafa2-11', 0.25], ['grafa2-12', 0.25], ['check2kt', 1], ['grafa3-1', 0.25],
['grafa3-2', 0.25], ['grafa4', 0.5], ['grafa5', 0.25], ['grafa6', 0.25], ['grafa7', 0.25], ['grafa8-1', 0.25],
['grafa8-2', 0.25], ['grafa8-3', 0.25], ['grafa8-4', 0.25], ['grafa8-5', 0.25], ['grafa8-6', 0.25], ['grafa8-7', 0.25],
['grafa8-8', 0.25], ['grafa8-9', 0.25], ['grafa8-10', 0.25], ['grafa8-11', 0.25], ['grafa8-12', 0.25], ['check8kt', 1],
['grafa9-1', 0.25], ['grafa9-2', 0.25], ['grafa9-3', 0.25], ['grafa9-4', 0.25], ['grafa9-5', 0.25], ['grafa9-6', 0.25],
['grafa9-7', 0.25], ['grafa9-8', 0.25], ['grafa9-9', 0.25], ['grafa9-10', 0.25], ['grafa9-11', 0.25], ['grafa9-12', 0.25],
['grafa11', 0.5], ['grafa12', 0.5], ['grafa14-1', 0.25], ['grafa14-2', 0.25], ['grafa14-3', 0.25], ['grafa14-4', 0.25],
['grafa14-5', 0.25], ['grafa14-6', 0.25], ['grafa14-7', 0.25], ['grafa14-8', 0.25], ['grafa14-9', 0.25],
['grafa14-10', 0.25], ['grafa14-11', 0.25], ['grafa14-12', 0.25], ['grafa15-1', 0.25], ['grafa15-2', 0.25],
['grafa16', 0.25], ['grafa17-1', 0.25], ['grafa17-2', 0.25], ['grafa18-1', 0.5], ['grafa18-2', 0.25], ['grafa19', 0.25],
['grafa20-1', 0], ['grafa20-2', 0.5], ['grafa20-3', 0], ['grafa21-1', 0.5], ['grafa21-2', 0.25], ['grafa22-1', 0.25],
['grafa22-2', 0.25], ['grafa23', 0.25], ['grafa24-1', 1], ['grafa24-2', 1], ['grafa25', 0.25], ['grafa26', 0.25],
['grafa29', 0.5], ['grafa30-1', 0.25], ['grafa30-2', 0.25], ['grafa30-3', 0.25], ['grafa30-4', 0.25], ['grafa30-5', 0.25],
['grafa30-6', 0.25], ['grafa30-7', 0.25], ['grafa30-8', 0.25], ['grafa30-9', 0.25], ['grafa30-10', 0.25],
['grafa30-11', 0.25], ['grafa31', 6], ['grafa32-1', 0.25], ['grafa32-2', 0.25], ['grafa33-1', 1], ['grafa33-2', 1],
['grafa33-3', 1], ['grafa33-4', 1], ['grafa33-5', 1], ['grafa33-6', 1], ['grafa33-7', 1], ['grafa34-1', 0.25],
['grafa34-2', 0], ['grafa35', 0.5], ['grafa36-1', 1], ['grafa36-2', 1], ['grafa36-3', 1], ['grafa36-4', 1],
['grafa37-1', 0.5], ['grafa37-2', 0.5], ['grafa38-1', 0.5], ['grafa38-2', 0.5], ['grafa39', 1], ['grafa40', 1],
['grafa41', 1], ['grafa42', 0.5], ['grafa43-1', 0.25], ['grafa43-2', 0], ['grafa44t1-1', 0.5], ['grafa44t1-2', 0.5],
['grafa44t1-3', 0.5], ['grafa44t1-4', 0.5], ['grafa44t1-5', 0.5], ['grafa44t1-6', 0.5], ['grafa44t1-7', 0.5],
['grafa44t1-8', 0.5], ['grafa44t1-9', 0.5], ['grafa44t1-10', 0.5], ['grafa44t1-11', 0.5], ['grafa44t1-12', 0.5],
['grafa44t1-13', 0.5], ['grafa44t1-14', 0.5], ['grafa44t1-15', 0.5], ['grafa44t1-16', 0.5], ['grafa44t1-17', 0.5],
['grafa44t1-18', 0.5], ['CodeDI', 0], ['grafa45', 3], ['grafa46', 2], ['grafa47t1-1', 0.5], ['grafa47t1-2', 0.5],
['grafa47t1-3', 0.5], ['grafa47t1-4', 0.5], ['grafa47t1-5', 0.5], ['grafa47t1-6', 0.5], ['grafa47t1-7', 0.5],
['grafa47t1-8', 0.5], ['grafa47t1-9', 0.5], ['grafa47t1-10', 0.5], ['grafa47t1-11', 0.5], ['grafa47t1-12', 0.5],
['grafa47t1-13', 0.5], ['grafa47t1-14', 0.5], ['grafa47t1-15', 0.5], ['grafa47t1-16', 0.5], ['grafa47t1-17', 0.5],
['grafa47t1-18', 0.5], ['grafa47t1-19', 0.5], ['grafa47t1-20', 0.5], ['grafa47t1-21', 0.5], ['grafa47t1-22', 0.5],
['grafa47t1-23', 0.5], ['grafa47t1-24', 0.5], ['grafa47t1-25', 0.5], ['grafa47t1-26', 0.5], ['grafa47t1-27', 0.5],
['grafa47t1-28', 0.5], ['grafa47t1-29', 0.5], ['grafa47t1-30', 0.5], ['grafa47t1-31', 0.5], ['grafa47t1-32', 0.5],
['grafa47t1-33', 0.5], ['grafa47t1-34', 0.5], ['grafa47t1-35', 0.5], ['grafa48', 1], ['grafa52-1', 0], ['grafa52-2', 0],
['grafa54-1', 0.5], ['grafa54-2', 0.5], ['grafa54-3', 0.5], ['grafa54-4', 0.5], ['grafa54-5', 0.5], ['grafa54-6', 0.5],
['grafa54-7', 0.5], ['grafa54-8', 0.5], ['grafa54-9', 0.5], ['grafa54-10', 0.5], ['grafa54-12', 0.5],
['grafa54-13', 0.5], ['grafa54-14', 0.5], ['grafa54-15', 0.5], ['grafa54-16', 0.5], ['grafa54-17', 0.5],
['grafa54-18', 0.5], ['grafa54-19', 0.5], ['grafa54-20', 0.5], ['grafa54-21', 0.5], ['grafa54-22', 0.5],
['grafaA-1', 0], ['grafaA-2', 0], ['grafaA-3', 0], ['grafaB-1', 1], ['grafaB-2', 1], ['grafaB-3', 1], ['grafaB-4', 1],
['grafaB-5', 1], ['grafaC-1', 0], ['grafaC-2', 0], ['grafaC-3', 0], ['grafaC-4', 0], ['grafaD-1', 0], ['grafaD-2', 0],
['grafaD-3', 0], ['grafaD-4', 0], ['grafaD-5', 0], ['2-grafa31', 6], ['2-grafa32-1', 0.25], ['2-grafa32-2', 0.25],
['2-grafa33-1', 1], ['2-grafa33-2', 1], ['2-grafa33-3', 1], ['2-grafa33-4', 1], ['2-grafa33-5', 1], ['2-grafa33-6', 1],
['2-grafa33-7', 1], ['2-grafa34-1', 0.25], ['2-grafa34-2', 0], ['2-grafa35', 0.5], ['2-grafa36-1', 1], ['2-grafa36-2', 1],
['2-grafa36-3', 1], ['2-grafa36-4', 1], ['2-grafa37-1', 0.5], ['2-grafa37-2', 0.5], ['2-grafa38-1', 0.5],
['2-grafa38-2', 0.5], ['2-grafa39', 1], ['2-grafa40', 1], ['2-grafa41', 1], ['2-grafa42', 0.5], ['2-grafa43-1', 0.25],
['2-grafa43-2', 0], ['2-grafa44t1-1', 0.5], ['2-grafa44t1-2', 0.5], ['2-grafa44t1-3', 0.5], ['2-grafa44t1-4', 0.5],
['2-grafa44t1-5', 0.5], ['2-grafa44t1-6', 0.5], ['2-grafa44t1-7', 0.5], ['2-grafa44t1-8', 0.5], ['2-grafa44t1-9', 0.5],
['2-grafa44t1-10', 0.5], ['2-grafa44t1-11', 0.5], ['2-grafa44t1-12', 0.5], ['2-grafa44t1-13', 0.5], ['2-grafa44t1-14', 0.5],
['2-grafa44t1-15', 0.5], ['2-grafa44t1-16', 0.5], ['2-grafa44t1-17', 0.5], ['2-grafa44t1-18', 0.5], ['2-CodeDI', 0],
['2-grafa45', 3], ['2-grafa46', 2], ['2-grafa47t1-1', 0.5], ['2-grafa47t1-2', 0.5], ['2-grafa47t1-3', 0.5],
['2-grafa47t1-4', 0.5], ['2-grafa47t1-5', 0.5], ['2-grafa47t1-6', 0.5], ['2-grafa47t1-7', 0.5], ['2-grafa47t1-8', 0.5],
['2-grafa47t1-9', 0.5], ['2-grafa47t1-10', 0.5], ['2-grafa47t1-11', 0.5], ['2-grafa47t1-12', 0.5], ['2-grafa47t1-13', 0.5],
['2-grafa47t1-14', 0.5], ['2-grafa47t1-15', 0.5], ['2-grafa47t1-16', 0.5], ['2-grafa47t1-17', 0.5], ['2-grafa47t1-18', 0.5],
['2-grafa47t1-19', 0.5], ['2-grafa47t1-20', 0.5], ['2-grafa47t1-21', 0.5], ['2-grafa47t1-22', 0.5], ['2-grafa47t1-23', 0.5],
['2-grafa47t1-24', 0.5], ['2-grafa47t1-25', 0.5], ['2-grafa47t1-26', 0.5], ['2-grafa47t1-27', 0.5], ['2-grafa47t1-28', 0.5],
['2-grafa47t1-29', 0.5], ['2-grafa47t1-30', 0.5], ['2-grafa47t1-31', 0.5], ['2-grafa47t1-32', 0.5], ['2-grafa47t1-33', 0.5],
['2-grafa47t1-34', 0.5], ['2-grafa47t1-35', 0.5], ['3-grafa31', 6], ['3-grafa32-1', 0.25], ['3-grafa32-2', 0.25],
['3-grafa33-1', 1], ['3-grafa33-2', 1], ['3-grafa33-3', 1], ['3-grafa33-4', 1], ['3-grafa33-5', 1], ['3-grafa33-6', 1],
['3-grafa33-7', 1], ['3-grafa34-1', 0.25], ['3-grafa34-2', 0], ['3-grafa35', 0.5], ['3-grafa36-1', 1], ['3-grafa36-2', 1],
['3-grafa36-3', 1], ['3-grafa36-4', 1], ['3-grafa37-1', 0.5], ['3-grafa37-2', 0.5], ['3-grafa38-1', 0.5],
['3-grafa38-2', 0.5], ['3-grafa39', 1], ['3-grafa40', 1], ['3-grafa41', 1], ['3-grafa42', 0.5], ['3-grafa43-1', 0.25],
['3-grafa43-2', 0], ['3-grafa44t1-1', 0.5], ['3-grafa44t1-2', 0.5], ['3-grafa44t1-3', 0.5], ['3-grafa44t1-4', 0.5],
['3-grafa44t1-5', 0.5], ['3-grafa44t1-6', 0.5], ['3-grafa44t1-7', 0.5], ['3-grafa44t1-8', 0.5], ['3-grafa44t1-9', 0.5],
['3-grafa44t1-10', 0.5], ['3-grafa44t1-11', 0.5], ['3-grafa44t1-12', 0.5], ['3-grafa44t1-13', 0.5], ['3-grafa44t1-14', 0.5],
['3-grafa44t1-15', 0.5], ['3-grafa44t1-16', 0.5], ['3-grafa44t1-17', 0.5], ['3-grafa44t1-18', 0.5], ['2-CodeDI', 0],
['3-grafa45', 3], ['3-grafa46', 2], ['3-grafa47t1-1', 0.5], ['3-grafa47t1-2', 0.5], ['3-grafa47t1-3', 0.5],
['3-grafa47t1-4', 0.5], ['3-grafa47t1-5', 0.5], ['3-grafa47t1-6', 0.5], ['3-grafa47t1-7', 0.5], ['3-grafa47t1-8', 0.5],
['3-grafa47t1-9', 0.5], ['3-grafa47t1-10', 0.5], ['3-grafa47t1-11', 0.5], ['3-grafa47t1-12', 0.5], ['3-grafa47t1-13', 0.5],
['3-grafa47t1-14', 0.5], ['3-grafa47t1-15', 0.5], ['3-grafa47t1-16', 0.5], ['3-grafa47t1-17', 0.5], ['3-grafa47t1-18', 0.5],
['3-grafa47t1-19', 0.5], ['3-grafa47t1-20', 0.5], ['3-grafa47t1-21', 0.5], ['3-grafa47t1-22', 0.5], ['3-grafa47t1-23', 0.5],
['3-grafa47t1-24', 0.5], ['3-grafa47t1-25', 0.5], ['3-grafa47t1-26', 0.5], ['3-grafa47t1-27', 0.5], ['3-grafa47t1-28', 0.5],
['3-grafa47t1-29', 0.5], ['3-grafa47t1-30', 0.5], ['3-grafa47t1-31', 0.5], ['3-grafa47t1-32', 0.5], ['3-grafa47t1-33', 0.5],
['3-grafa47t1-34', 0.5], ['3-grafa47t1-35', 0.5], ['4-grafa31', 6], ['4-grafa32-1', 0.25], ['4-grafa32-2', 0.25],
['4-grafa33-1', 1], ['4-grafa33-2', 1], ['4-grafa33-3', 1], ['4-grafa33-4', 1], ['4-grafa33-5', 1], ['4-grafa33-6', 1],
['4-grafa33-7', 1], ['4-grafa34-1', 0.25], ['4-grafa34-2', 0], ['4-grafa35', 0.5], ['4-grafa36-1', 1], ['4-grafa36-2', 1],
['4-grafa36-3', 1], ['4-grafa36-4', 1], ['4-grafa37-1', 0.5], ['4-grafa37-2', 0.5], ['4-grafa38-1', 0.5],
['4-grafa38-2', 0.5], ['4-grafa39', 1], ['4-grafa40', 1], ['4-grafa41', 1], ['4-grafa42', 0.5], ['4-grafa43-1', 0.25],
['4-grafa43-2', 0], ['4-grafa44t1-1', 0.5], ['4-grafa44t1-2', 0.5], ['4-grafa44t1-3', 0.5], ['4-grafa44t1-4', 0.5],
['4-grafa44t1-5', 0.5], ['4-grafa44t1-6', 0.5], ['4-grafa44t1-7', 0.5], ['4-grafa44t1-8', 0.5], ['4-grafa44t1-9', 0.5],
['4-grafa44t1-10', 0.5], ['4-grafa44t1-11', 0.5], ['4-grafa44t1-12', 0.5], ['4-grafa44t1-13', 0.5], ['4-grafa44t1-14', 0.5],
['4-grafa44t1-15', 0.5], ['4-grafa44t1-16', 0.5], ['4-grafa44t1-17', 0.5], ['4-grafa44t1-18', 0.5], ['2-CodeDI', 0],
['4-grafa45', 3], ['4-grafa46', 2], ['4-grafa47t1-1', 0.5], ['4-grafa47t1-2', 0.5], ['4-grafa47t1-3', 0.5],
['4-grafa47t1-4', 0.5], ['4-grafa47t1-5', 0.5], ['4-grafa47t1-6', 0.5], ['4-grafa47t1-7', 0.5], ['4-grafa47t1-8', 0.5],
['4-grafa47t1-9', 0.5], ['4-grafa47t1-10', 0.5], ['4-grafa47t1-11', 0.5], ['4-grafa47t1-12', 0.5], ['4-grafa47t1-13', 0.5],
['4-grafa47t1-14', 0.5], ['4-grafa47t1-15', 0.5], ['4-grafa47t1-16', 0.5], ['4-grafa47t1-17', 0.5], ['4-grafa47t1-18', 0.5],
['4-grafa47t1-19', 0.5], ['4-grafa47t1-20', 0.5], ['4-grafa47t1-21', 0.5], ['4-grafa47t1-22', 0.5], ['4-grafa47t1-23', 0.5],
['4-grafa47t1-24', 0.5], ['4-grafa47t1-25', 0.5], ['4-grafa47t1-26', 0.5], ['4-grafa47t1-27', 0.5], ['4-grafa47t1-28', 0.5],
['4-grafa47t1-29', 0.5], ['4-grafa47t1-30', 0.5], ['4-grafa47t1-31', 0.5], ['4-grafa47t1-32', 0.5], ['4-grafa47t1-33', 0.5],
['4-grafa47t1-34', 0.5], ['4-grafa47t1-35', 0.5]];
var m = new Map(grafaArray);
var keysArray = Array.from(m.keys());
var valuesArray = Array.from(m.values());
var redArray = [];

var url = "https://sheetdb.io/api/v1/d74h4a1vd9319";
function getDeclaration() {
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    let dataArray = Array.from(data);

    for (i = 0; i < dataArray.length; i++) {
      if (dataArray[i].usrName == localStorage.getItem('student') &&
        dataArray[i].date == localStorage.getItem('dtfill') &&
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {

        var dataArrayUsr = Object.entries(dataArray[i]);

      };
      if (dataArray[i].usrName == 'АДМИН' &&
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {
        var dataArrayAdm = Object.entries(dataArray[i]);
      };

    };

    document.getElementById(dataArrayUsr[0][0]).textContent = dataArrayUsr[0][1];
    document.getElementById(dataArrayUsr[1][0]).textContent = dataArrayUsr[1][1];
    document.getElementById(dataArrayUsr[2][0]).textContent = dataArrayUsr[2][1];

    let goodsQty=Number(dataArrayAdm[24][1])
    let excludingGrafs=['grafa54-22']
          if(4-goodsQty>0){
            for(let i=0;i<4-goodsQty;i++){
              let grafa=(i+2).toString()+'-grafa31'
              excludingGrafs.push(grafa)
            }
          }
    for (y = 5; y < dataArrayAdm.length; y++) {
      document.getElementById(dataArrayAdm[y][0]).textContent = dataArrayUsr[y][1];

      if (dataArrayUsr[y][1] !== ""&&!excludingGrafs.includes(dataArrayUsr[y][0])) {
        fillerU++;
      };
      if (dataArrayAdm[y][1] !== ""&&!excludingGrafs.includes(dataArrayAdm[y][0])) {
        fillerA++;
        let x = keysArray.indexOf(dataArrayAdm[y][0]);
        let z = valuesArray[x];
        cost += z;
      };


      if (dataArrayAdm[y][1] == dataArrayUsr[y][1]) {
        if (dataArrayAdm[y][1] != "") {
          let x = keysArray.indexOf(dataArrayAdm[y][0]);
          let z = valuesArray[x];
          if(!excludingGrafs.includes(dataArrayAdm[y][0])){
            degree += z;
          }
        };
      } else {
        document.getElementById(dataArrayAdm[y][0]).style.backgroundColor = 'rgb(240, 128, 128)';
        redArray.push(dataArrayAdm[y][0]);
        document.getElementById(dataArrayAdm[y][0]).setAttribute('data-tooltip', dataArrayAdm[y][1]);
        let tooltipWidth = window.getComputedStyle(document.getElementById(dataArrayAdm[y][0]), 'after').width;
        tooltipWidth = tooltipWidth.substring(0, tooltipWidth.length - 2) / 2;
        document.getElementById(dataArrayAdm[y][0]).style.setProperty('--tooltipWidth', tooltipWidth + 'px');
      };
    };

    document.getElementById('counter1').innerHTML = roundToTwo(fillerU / fillerA * 100) + '%';
    document.getElementById('counter2').innerHTML = roundToTwo(degree) + '/' + cost;
  };

  getData();
};

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

var itemQty = 1;
function addingNewGoods() {
  itemQty++;
  let goodnumber = "goodNumber" + itemQty;
  document.getElementById(goodnumber).style.display = 'contents';
}
function removingNewGoods() {
  if (itemQty == 0 || itemQty == 1) {
  } else {
    let goodnumber = "goodNumber" + itemQty;
    document.getElementById(goodnumber).style.display = 'none';
    itemQty--;
  }
};
var colorBool = 0;
var colorBoolTotal = 0;
var adminTd = document.querySelectorAll('.adminTd');
const clickedArray = [];

[].forEach.call(adminTd, function (el) {
  el.addEventListener('click', function (e) {
    if (this.style.backgroundColor == 'rgb(240, 128, 128)') {
      this.style.backgroundColor = 'rgb(255, 215, 0)';
      for (let w = 0; w < grafaArray.length; w++) {
        if (grafaArray[w][0] == el.id) {
          colorBool = 0.5 * grafaArray[w][1];
        };
      };
    } else if (this.style.backgroundColor == 'rgb(255, 215, 0)') {
      this.style.backgroundColor = 'lightgreen';
      for (let w = 0; w < grafaArray.length; w++) {
        if (grafaArray[w][0] == el.id) {
          colorBool = grafaArray[w][1];
        };
      };
    } else if (this.style.backgroundColor == 'lightgreen') {
      this.style.backgroundColor = 'violet';
      for (let w = 0; w < grafaArray.length; w++) {
        if (grafaArray[w][0] == el.id) {
          colorBool = 2 * grafaArray[w][1];
        };
      };
    } else if (this.style.backgroundColor == 'violet') {
      this.style.backgroundColor = 'rgb(240, 128, 128)';
      if (redArray.includes(this.id)) {
        colorBool = 0;
      } else {
        for (let w = 0; w < grafaArray.length; w++) {
          if (grafaArray[w][0] == el.id) {
            colorBool = -1 * grafaArray[w][1];
          };
        };
      }
    };

    var exists = (exi) => {
      return exi.id === this.id;
    };
    if (this.style.backgroundColor !== 'white') {
      if (clickedArray.findIndex(exists) !== -1) {
        clickedArray[clickedArray.findIndex(exists)].deg = colorBool;
        clickedArray.forEach(item => {
          colorBoolTotal += item.deg;
        });
        document.getElementById('counter2').textContent = degree + roundToTwo(colorBoolTotal) + '/' + cost;
        colorBoolTotal = 0;
      } else {
        clickedArray.push({ id: this.id, deg: colorBool });
        clickedArray.forEach(item => {
          colorBoolTotal += item.deg;
        });
        document.getElementById('counter2').textContent = degree + roundToTwo(colorBoolTotal) + '/' + cost;
        colorBoolTotal = 0;
      };
    };
  });
});