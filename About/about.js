function goToBack(){
    document.getElementById("boxOne").getElementsByTagName("div")[1];
}


let boxOne = document.getElementById("boxOne");
boxOne.addEventListener("click", () => {
    if(boxOne.getElementsByTagName("div")[0].classList == "thefront"){
        let element = boxOne.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let back = document.createElement("div");
        back.classList.add("theback");
        back.innerHTML = 'This website has two components to help AP students. "Search by AP exam" allows students to see specific AP exams and their equivelent courses for college. "Search by major" allows students to see which AP exams align with the courses in their desired college major.';
        boxOne.appendChild(back);
    }else if(boxOne.getElementsByTagName("div")[0].classList == "theback"){
        let element = boxOne.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let front = document.createElement("div");
        front.classList.add("thefront");
        let h2 = document.createElement("h2");
        front.appendChild(h2);
        h2.innerHTML = "What is this Website?";
        boxOne.appendChild(front);
    }
});

let boxTwo = document.getElementById("boxTwo");
boxTwo.addEventListener("click", () => {
    if(boxTwo.getElementsByTagName("div")[0].classList == "thefront"){
        let element = boxTwo.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let back = document.createElement("div");
        back.classList.add("theback");
        back.innerHTML = 'Contact information is currently in the works for students to provide feedback.';
        boxTwo.appendChild(back);
    }else if(boxTwo.getElementsByTagName("div")[0].classList == "theback"){
        let element = boxTwo.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let front = document.createElement("div");
        front.classList.add("thefront");
        let h2 = document.createElement("h2");
        front.appendChild(h2);
        h2.innerHTML = "Where can I contact?";
        boxTwo.appendChild(front);
    }
});

let boxThree = document.getElementById("boxThree");
boxThree.addEventListener("click", () => {
    if(boxThree.getElementsByTagName("div")[0].classList == "thefront"){
        let element = boxThree.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let back = document.createElement("div");
        back.classList.add("theback");
        back.innerHTML = 'This website was created to answer the golden question for students in AP classes, "Why am I doing this?" As a former AP student myself, I rarley had the resources to find which AP exams would actually be helpful for college and my future goals. Finally, all of this information is in one, easily searchable space.';
        boxThree.appendChild(back);
    }else if(boxThree.getElementsByTagName("div")[0].classList == "theback"){
        let element = boxThree.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let front = document.createElement("div");
        front.classList.add("thefront");
        let h2 = document.createElement("h2");
        front.appendChild(h2);
        h2.innerHTML = "Why was this website created?";
        boxThree.appendChild(front);
    }
});

let boxFour = document.getElementById("boxFour");
boxFour.addEventListener("click", () => {
    if(boxFour.getElementsByTagName("div")[0].classList == "thefront"){
        let element = boxFour.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let back = document.createElement("div");
        back.classList.add("theback");
        back.innerHTML = 'The data is pulled mainly from college websites, which can be seen in the sources tab. However, some of this data requires research, which has been done for you.';
        boxFour.appendChild(back);
    }else if(boxFour.getElementsByTagName("div")[0].classList == "theback"){
        let element = boxFour.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let front = document.createElement("div");
        front.classList.add("thefront");
        let h2 = document.createElement("h2");
        front.appendChild(h2);
        h2.innerHTML = "Where is the data from?";
        boxFour.appendChild(front);
    }
});

let boxFive = document.getElementById("boxFive");
boxFive.addEventListener("click", () => {
    if(boxFive.getElementsByTagName("div")[0].classList == "thefront"){
        let element = boxFive.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let back = document.createElement("div");
        back.classList.add("theback");
        back.innerHTML = 'This information is currently most useful for Florida residents. A majority of provided data is for the top colleges in Florida. However, we are working to expand our library to provide data for AP students across the United States.';
        boxFive.appendChild(back);
    }else if(boxFive.getElementsByTagName("div")[0].classList == "theback"){
        let element = boxFive.getElementsByTagName("div")[0];
        element.parentElement.removeChild(element);
        let front = document.createElement("div");
        front.classList.add("thefront");
        let h2 = document.createElement("h2");
        front.appendChild(h2);
        h2.innerHTML = "Who is this information for?";
        boxFive.appendChild(front);
    }
});