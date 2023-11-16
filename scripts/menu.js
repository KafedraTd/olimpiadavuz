var url = "https://sheetdb.io/api/v1/d74h4a1vd9319";
var buttonsToGoToDTuser = document.getElementsByClassName('goToDTuser');
var refs=[['ТЕСТЫ','TS/testing_'],['ЗАДАЧИ','TS/tasking_'],['ВУЗ','_vuz'],['РЕГ','_reg']]

// if(localStorage.getItem('loginName')=='АДМИН'){
//     document.getElementById('loadDB').addEventListener('click',()=>{getTransfering ()})
// }


document.getElementById('loadDB').addEventListener('click',()=>{getTransfering ()})
document.getElementById('greeting').innerText = "Добрый день, " + localStorage.getItem('loginName') + "!";

var timing={
    'tst':[1698053400000,'ТЕСТЫ'],
    'cas':[1698055200000,'ЗАДАЧИ'],
    'dcl':[1698045600000,'ДЕКЛАРАЦИЯ']
}



function check(){
    
    time=new Date().getTime()
    for(i=0;i<Object.keys(timing).length;i++){
        w=Object.keys(timing)[i]
        if(time>=timing[w][0]){
                document.getElementById(w).classList.remove('hideEl')
                document.getElementById(w).textContent=timing[w][1]
        }else{
                timeTxt=new Date(timing[w][0]).toLocaleString().slice(11, 20)
                document.getElementById(w).classList.add('hideEl')
                document.getElementById(w).textContent=timing[w][1]+' в '+timeTxt
     
        }
    }
}

check()


function getTransfering () {
    
    var greetingName = localStorage.getItem('loginName');
    // let fioArray='АДМИН'
    // if(greetingName!='АДМИН'){
    //     fioArray=greetingName.split(' ')[1]+' '+greetingName.split(' ')[2]
    // }
    // document.getElementById('greeting').innerText = "Добрый день, " + fioArray + "!";
    var results = document.getElementById('bodyOfTable');
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const resultsData = data;
            var resultsArray = Array.from(resultsData);

            if (greetingName == 'АДМИН') {
                for (var i = 0; i<resultsArray.length; i++) {
                    var resultsRecord = Object.entries(resultsArray[i]);
                    var usrName = resultsRecord[0][1];
                    if (usrName != 'АДМИН') {
                        
                        let line = document.createElement('tr');
                        results.append(line);
                        for (k = 0; k < 5; k++) {
                        let cell = document.createElement('td');
                        cell.textContent = resultsRecord[k][1];
                        line.append(cell);
                        };
                        let cell = document.createElement('td');
                        let btn = document.createElement ('button');
                        btn.className = 'goToDTuser';
                        btn.type = 'button';
                        btn.innerHTML = '<span class="material-symbols-outlined">open_in_new</span>';
                        cell.append(btn);
                        line.append(cell);
                        btn.addEventListener('click', ()=> {
                            localStorage.setItem('student', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('dtfill', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('evtstu', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('blanc',0);
                            let ev=localStorage.getItem('evtstu');
                            let year=ev.split(' ')[2].split(':')[0];
                            let stage=ev.split(' ')[1];
                            let work=ev.split(' ')[3];
                            // for (i=0;i<refs.length;i++){
                            //     if (work==refs[i][0]){
                            //         work=refs[i][1]
                            //     }
                            //     if (stage==refs[i][0]){
                            //         stage=refs[i][1]
                            //     }
                            // }
                            if(stage=='ВУЗ'){
                                stage='vuz'
                            }else if(stage=='РЕГ'){
                                stage='reg'
                            }
                            localStorage.setItem('evt',stage+year);
                            if (work=='ТЕСТЫ'){
                                window.open('TS/test.html', '_blank');
                            } else if (work=='ЗАДАЧИ'){
                                window.open(`TS/case${year}${stage}.html`, '_blank');
                            }else{
                                window.open('DT/DTadmin.html', '_blank');
                            }; 
                        });
                    };
                };             
            } else {
                for (var i = 0; i<resultsArray.length; i++) {
                    var resultsRecord = Object.entries(resultsArray[i]);
                    var usrName = resultsRecord[0][1];
                    if (usrName == greetingName && usrName != 'АДМИН') {
                        let line = document.createElement('tr');
                        results.append(line);
                        for (k = 0; k < 5; k++) {
                        let cell = document.createElement('td');
                        cell.textContent = resultsRecord[k][1];
                        line.append(cell);
                        };
                        let cell = document.createElement('td');
                        let btn = document.createElement ('button');
                        btn.className = 'goToDTuser';
                        btn.type = 'button';
                        btn.innerHTML = '<span class="material-symbols-outlined">open_in_new</span>';
                        cell.append(btn);
                        line.append(cell);
                        btn.addEventListener('click', ()=> {
                            localStorage.setItem('student', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('dtfill', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('evtstu', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('blanc',0);
                            if (btn.parentElement.previousElementSibling.innerHTML==''){
                                localStorage.setItem('checked', 0);  
                            }else{
                                localStorage.setItem('checked', 1);
                            }
                            let ev=localStorage.getItem('evtstu');
                            let year=ev.split(' ')[2].split(':')[0];
                            let stage=ev.split(' ')[1];
                            let work=ev.split(' ')[3];
                            // for (i=0;i<refs.length;i++){
                            //     if (work==refs[i][0]){
                            //         work=refs[i][1]
                            //     }
                            //     if (stage==refs[i][0]){
                            //         stage=refs[i][1]
                            //     }
                            // }
                            if(stage=='ВУЗ'){
                                stage='vuz'
                            }else if(stage=='РЕГ'){
                                stage='reg'
                            }else{
                                stage='custom'
                            }
                            localStorage.setItem('evt',stage+year);
                            if (work=='ТЕСТЫ'){
                                window.open('TS/test.html', '_blank');
                            } else if (work=='ЗАДАЧИ'){
                                window.open(`TS/case${year}${stage}.html`, '_blank');
                            }else{
                                if (ev.split(' ')[0]!='ПАРА'){
                                    if(localStorage.getItem('checked')==1){
                                        window.open('DT/DTadmin.html', '_blank');
                                    }else{
                                        window.open('DT/DTuser.html', '_blank');
                                    }
                                }else{
                                    window.open('DT/declarationForGoods0.html', '_blank');
                                }
                            };                             
                            
                            
                            // if (work!='ДЕКЛАРАЦИЯ'){
                            //     window.open(`${work}${year}${stage}.html`, '_blank');
                            // }else{
                                
                            //     if(localStorage.getItem('checked')==1){
                            //         window.open('DT/DTadmin.html', '_blank');
                            //     }else{
                            //         window.open('DT/DTuser.html', '_blank');
                            //     }
                            // };
                          });
                    }; 
                };
            }   
        };
        getData();
};

var btns = document.getElementsByClassName('work');
Array.from(btns).forEach(el => el.addEventListener('click', event => {
    localStorage.setItem('checked',0);
    localStorage.setItem('blanc',1);
    localStorage.setItem('evtstu', el.getAttribute('work'));
    let txt=el.getAttribute('work')
    let year=txt.split(' ')[2].split(':')[0];
    let evt0=txt.split(' ')[1].split(':')[0];
    let stage;
    if (evt0=='РЕГ'){
        stage='reg'
        localStorage.setItem('evt','reg'+year)
    } else if(evt0=='ВУЗ'){
        stage='vuz'
        localStorage.setItem('evt','vuz'+year)
    }
    let work=txt.split(' ')[3].split(':')[0];
    if(work=='ТЕСТЫ'){
        window.open('TS/test.html', '_blank');
    }else if(work=='ЗАДАЧИ'){
        link='TS/case'+year+stage+'.html'
        window.open(link, '_blank');
    }else if(work=='ДЕКЛАРАЦИЯ'){
        window.open('DT/declarationForGoods0.html', '_blank');
    }
}));
/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
 function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".output th").forEach(headerCell => {
    if(headerCell.id !== 'extra') {
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    
            sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
        });
    };
});

document.querySelector('.quit').addEventListener ('click', ()=> {
    localStorage.clear();
    window.open('index.html', '_self');
});

window.addEventListener('load', ()=> {
    document.querySelector('.loader').classList.add('loader--hidden');
    document.querySelector('.loader').addEventListener('transitionend', ()=> {
        document.body.removeChild(document.querySelector('.loader'));
    });
});


// function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
//   }
  
//from https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss
//   function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     // add a zero in front of numbers<10
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
//     t = setTimeout(function() {
//       startTime()
//     }, 500);
//   }
//   startTime();