
//Data lists for each college.
let UFScores = [
    ["AP Biology", "BSC 2005/BSC 2005L (4 credits)", "BSC 2010/BSC 2010L (4 credits)", "BSC 2010/BSC 2010L and BSC 2011/BSC 2011L (8 credits)"],
    ["AP Human Geography", "GEO 2420", "GEO 2420 (3 credits)", "GEO 2420 (3 credits)"],
    ["AP Calculus AB", "MAC 2311 (4 credits)", "MAC 2311 (4 credits)", "MAC 2311 (4 credits)"]
];

let UCFScores = [
    ["AP Biology", "BSC /BSC 1005L", "BSC 2010C ","BSC 2010C and BSC 2011C "],
    ["AP Human Geography", "GEO 2400","GEO 2400","GEO 2400"],
    ["AP Calculus AB", "MAC 2311", "MAC 2311", "MAC 2311"]
];



let table = document.getElementById("table");

//Takes input from the dropdown search bars, and runs handleSelect on it.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("collegeSearchbar").addEventListener("input", handleSelect);
    document.getElementById("apExamSearchbar").addEventListener("input", handleSelect);
});


function handleSelect(ev){
    let collegeSelect = (document.getElementById("collegeSearchbar")[document.getElementById("collegeSearchbar").selectedIndex].value);
    let apSelect = (document.getElementById("apExamSearchbar")[document.getElementById("apExamSearchbar").selectedIndex].value);

    //As long as a college option is selected, the webpage is updated to show the AP courses for the college.
    clear();
    if(collegeSelect != "N/A"){
        let condition = eval(collegeSelect + "Scores" + ".length");
        for(let i = 0; i < condition; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            table.appendChild(row);
            for(let j = 0; j < 4; j++){
                let item = document.createElement("div");
                item.classList.add("box");
                item.innerHTML = eval(collegeSelect + "Scores[i][j]");
                row.appendChild(item);
            }
        }
    }

   
    let rows = document.querySelectorAll(".row");
    
    //As long as an AP course is selected, the webpage is updated to show that specific AP course for the specific college.
    if(apSelect != "N/A"){
        for(let i = 0; i < rows.length; i++){
                if((rows[i].firstElementChild.textContent) == apSelect){
                }else{
                    table.removeChild(rows[i]);
                }
        }
    }
}

//Clears the DOM/ webpage.
function clear(){
        let rows = document.querySelectorAll(".row");
        let count = rows.length;
        for(let i = 0; i < count; i++){
            table.removeChild(rows[i]);
        }
}

