

//Data lists for each college. CollegeScores represents what appears for the titles on the website for each course. CollegeCourses represents the specific names of these courses which is used in bold in the course descriptions box. CollegeCourse Descriptions is the other text that appears in the course descriptions box. The or symbol "|", is used in the code to signify TWO or more courses that need to appear in the course descriptions. 
let UFScores = [
    ["AP Biology", "BSC 2005/BSC 2005L", "BSC 2010/BSC 2010L", "BSC 2010/BSC 2010L and BSC 2011/BSC 2011L"],
    ["AP Human Geography", "GEO 2420", "GEO 2420", "GEO 2420"],
    ["AP Calculus AB", "MAC 2311", "MAC 2311", "MAC 2311"]
];

let poodle = [
    {title: "AP Biology", three: "harry potter", four:"bear"},
    {title: "AP Human Geography", three: "bear", four:"happy days"}
];




let UFCourses = [
    ["AP Biology", "BSC 2005 Biological Sciences: | BSC 2005L Laboratory in Biological Sciences:", "BSC 2010 Integrated Principles of Biology 1: | BSC 2010L Integrated Principles of Biology Laboratory 1:", "BSC 2010 Integrated Principles of Biology 1: | BSC 2010L Integrated Principles of Biology Laboratory 1: | BSC 2011 Integrated Principles of Biology 2: | BSC 2011L Integrated Principles of Biology Laboratory 2:"],
    ["AP Human Geography", "GEO 2420 Introduction to Human Geography:", "GEO 2420 Introduction to Human Geography:", "GEO 2420 Introduction to Human Geography:"],
    ["AP Calculus AB", "MAC 2311 Analytic Geometry and Calculus 1:", "MAC 2311 Analytic Geometry and Calculus 1:","MAC 2311 Analytic Geometry and Calculus 1"]
]

let UFDescriptions = [
    ["AP Biology", "A comprehensive introduction to living systems, including the scientific basis of biology, cell structure and function, genetic mechanisms, animal and plant anatomy and physiology, and ecology and evolutionary processes. Recommended for students not majoring in the natural sciences. | A laboratory for students who need experience in a nonprofessionally oriented laboratory or for those who need laboratory experience to satisfy requirements for graduation.", "General Biology Core: the first of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Studies the origin of life systems; of biological molecules and organization of living things at the subcellular, cellular and organismic levels; and of the activities of living forms in obtaining and utilizing energy and materials in growth, maintenance and reproduction. | Laboratory experiments designed to accompany BSC 2010. Students should register for BSC 2010 and 2010L concurrently.", "General Biology Core: the first of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Studies the origin of life systems; of biological molecules and organization of living things at the subcellular, cellular and organismic levels; and of the activities of living forms in obtaining and utilizing energy and materials in growth, maintenance and reproduction. | Laboratory experiments designed to accompany BSC 2010. Students should register for BSC 2010 and 2010L concurrently. | General Biology Core: the second of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Examination in living things of the principles of information storage, transmission and utilization at the cell, organism and population levels; of the mechanisms of evolutionary change in the diversification of living things and their life styles; of population growth and regulation; and of energy flow and biogeochemical cycling in the biosphere. | Laboratory experiments designed to accompany BSC 2011. Students should register for BSC 2011 and 2011L concurrently."],
    ["AP Human Geography", "Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world.","Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world.","Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world."],
    ["AP Calculus AB", "Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus.","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus.","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus."]

]


//blank template 
/*[
    ["AP Art History","","",""],
    ["AP Biology","","",""],
    ["AP Calculus AB","","",""],
    ["AP Calculus BC","","",""],
    ["AP Capstone Seminar","","",""],
    ["AP Capstone Research","","",""],
    ["AP Chemistry","","",""],
    ["AP Chinese Language and Culture","","",""],
    ["AP Computer Science A","","",""],
    ["AP Computer Science AB","","",""],
    ["AP Computer Science Principles","","",""],
    ["AP Economics: Macro","","",""],
    ["AP Economics: Micro","","",""],
    ["AP English Language","","",""],
    ["AP English Literature","","",""],
    ["AP Environmental Science","","",""],
    ["AP European History"]
    ["AP French Language and Culture","","",""],
    ["AP French Literature","","",""],
    ["AP German Language and Culture","","",""],
    ["AP Government and Politics: Comparative","","",""],
    ["AP Government and Politics: United States","","",""],
    ["AP Human Geography","","",""],
    ["AP Italian Language and Culture","","",""],
    ["AP Japanese Language and Culture","","",""],
    ["AP Latin Literature","","",""],
    ["AP Latin","","",""],
    ["AP Music Theory","","",""],
    ["AP Physics 1","","",""],
    ["AP Physics 2","","",""],
    ["AP Physics B","","",""],
    ["AP Physics C: Electricity and Magnetism","","",""],
    ["Ap Physics C: Mechanics","","",""],
    ["AP Psychcology","","",""],
    ["AP Spanish Language and Culture","","",""],
    ["AP Spanish Literature","","",""],
    ["AP Statistics","","",""],
    ["AP Studio Art: Drawing","","",""],
    ["AP Studio Art: 2-D Design","","",""],
    ["AP Studio Art: 3-D Design","","",""],
    ["AP United States History","","",""],
    ["AP World History","","",""],    
]
*/

let UCFScores = [
    ["AP Biology", "BSC/BSC 1005L", "BSC 2010C ","BSC 2010C/BSC 2011C "],
    ["AP Human Geography", "GEO 2400","GEO 2400","GEO 2400"],
    ["AP Calculus AB", "MAC 2311", "MAC 2311", "MAC 2311"]
];

let UCFCourses = [
    ["AP Biology","BSC 1005 Biological Principles: | BSC 1005L - Biological Principles Laboratory:","BSC 2010C Biology I:","BSC 2010C Biology I: | BSC 2011C Biology II: "],
    ["AP Human Geography","GEO 2400 Human Geography:","GEO 2400 Human Geography:","GEO 2400 Human Geography:"],
    ["AP Calculus AB","MAC 2311C Calculus with Analytic Geometry I:","MAC 2311C Calculus with Analytic Geometry I:","MAC 2311C Calculus with Analytic Geometry I:"],
]

let UCFDescriptions = [
    ["AP Biology","A study of various biological factors which affect the health and survival of man in modern society. | The laboratory to accompany BSC 1005.","Open only to students whose major requires this specific course. Cellular and chemical basis of life, genetics, and the theory of evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively.","Open only to students whose major requires this specific course. Cellular and chemical basis of life, genetics, and the theory of evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively. | Continuation of BSC 2010C. Organismal anatomy and physiology as it relates to biodiversity, ecology and evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively."],
    ["AP Human Geography","Continuation of BSC 2010C. Organismal anatomy and physiology as it relates to biodiversity, ecology and evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively.","Continuation of BSC 2010C. Organismal anatomy and physiology as it relates to biodiversity, ecology and evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively.","Continuation of BSC 2010C. Organismal anatomy and physiology as it relates to biodiversity, ecology and evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively."],
    ["AP Calculus AB","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals."]

]


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
        let condition = eval(collegeSelect + "Scores.length");
        for(let i = 0; i < condition; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            table.insertBefore(row, document.querySelector("#courseDescription"));
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
        clearCourseDescription();
}

let courseDescription = document.querySelector("#courseDescription");

document.addEventListener("click", (e) =>{
    let collegeSelect = (document.getElementById("collegeSearchbar")[document.getElementById("collegeSearchbar").selectedIndex].value);
    let apSelect = (document.getElementById("apExamSearchbar")[document.getElementById("apExamSearchbar").selectedIndex].value);
    for(let r = 0; r < eval(collegeSelect +"Scores.length"); r++){
        for(let c = 1; c < eval(collegeSelect + "Scores[0].length"); c++){
            if(e.target.innerHTML == eval(collegeSelect + "Scores[r][c]")){
                if(eval(collegeSelect + 'Scores[r][c].includes("/")')){
                    let coursesArray = eval(collegeSelect + 'Courses[r][c].split("|")');
                    let descriptionsArray = eval(collegeSelect + 'Descriptions[r][c].split("|")');
                    clearCourseDescription();
                    for(let i = 0; i < coursesArray.length; i++){                        
                         courseDescription.innerHTML += "<b>" + coursesArray[i] + "</b>" + "<br>"+ descriptionsArray[i] + "<br>" + "<br>"
                    }
                }else{
                    clearCourseDescription();
                    courseDescription.innerHTML += "<b>" + eval(collegeSelect + "Courses[r][c]") + "</b>" + "<br>"+ eval(collegeSelect + "Descriptions[r][c]");
                    return("");
                }
            }
        }

    }   
})

function clearCourseDescription(){
    courseDescription.innerHTML = "Course Descriptions: <br>";
}

courseDescription.innerHTML = poodle[1].three;