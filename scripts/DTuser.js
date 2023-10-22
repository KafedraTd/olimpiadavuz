url = "https://sheetdb.io/api/v1/d74h4a1vd9319";
      
function getDeclaration () {
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

                document.getElementById(dataArrayUsr[y][0]).textContent = dataArrayUsr[y][1]; 
          };
      };
    };
};
getData();
};



var itemQty = 1;     
function addingNewGoods () {
itemQty++;
let goodnumber = "goodNumber" + itemQty;
document.getElementById(goodnumber).style.display = 'contents';
}
function removingNewGoods () {
if (itemQty == 0 || itemQty == 1) {
} else {
  let goodnumber = "goodNumber" + itemQty;
  document.getElementById(goodnumber).style.display = 'none';
itemQty--;
}
};

var adminTd = document.querySelectorAll('.adminTd');
[].forEach.call(adminTd,function(el){
  el.addEventListener('click', function (e) {
    if (this.style.backgroundColor == 'lightpink') {
      this.style.backgroundColor = '#fff';
    } else {
      this.style.backgroundColor = 'lightpink';  
    };
  });
});