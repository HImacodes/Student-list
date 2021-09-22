var name_array =[];

function submit(){

    var name1 = document.getElementById("name_of_the_student_1").value;
    var name2 = document.getElementById("name_of_the_student_2").value;
    var name3 = document.getElementById("name_of_the_student_3").value;
    var name4 = document.getElementById("name_of_the_student_4").value;

    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);

    console.log(name_array);

    document.getElementById("display").innerHTML=name_array;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}

function sorting(){
    name_array.sort();
    document.getElementById("display").innerHTML=name_array;  
}