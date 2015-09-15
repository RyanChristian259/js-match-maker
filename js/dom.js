$(document).on('ready', function() {
  // console.log('sanity check!');
     $(".hideMeMentor").hide();
});//document ready

////////////////////////////////////////////////
////////////////////////////////////////////////
//////////Refactored  Exercise////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////See below for original exercise///////

//      var studentArray = [];
//      var mentorArray = [];



// $('form[name="studentForm"]').on('submit',function(e){
//   e.preventDefault();
//     //hide submit button when clicked
//     $(".hideMe").hide();
//     alert("Submitted");
//     var studentName = $('#studentName').val();
//     var studentPhone = $('#studentPhone').val();
//     var studentCity = $('#studentCity').val();
//     createdStudent = new newStudent(studentName, studentPhone, studentCity);
//     //add new student to student array
//     studentArray.push(createdStudent);
//     console.log(studentArray);

//     // //clear div before submit
//     $('.addAnotherStudent').empty();
//     //add buttons to add new student or proceed to mentors
//     $(".addAnotherStudent").append(" <h4 class=\'hideMeText\'>Add Another Student?</h4> <button class=\"btn btn-default addStudentYes\">Yes</button> <button type=\"submit\" class=\"btn btn-default addStudentNo\">No</button>");
//     $("form")[0].reset();

//     //add student functionality
//   $(".addStudentYes").click(function(e){
//      e.preventDefault();
//        //show submit button when clicked
//      $(".hideMe").show();
//      $(".hideMeText").hide();
//      $(".addStudentYes").hide();
//      $(".addStudentNo").hide();
//   });

//   //'no' add student functionalilty
//   $(".addStudentNo").click(function(e){
//      e.preventDefault();
//        //show submit button when clicked
//      $(".hideMeText").hide();
//      $(".addStudentYes").hide();
//      $(".addStudentNo").hide();
//      $(".hideMeStudent").hide();
//      $(".hideMeMentor").show();
//   });
// });


// $('form[name="mentorForm"]').on('submit',function(e){
//   e.preventDefault();
//     //hide submit button when clicked
//     $(".hideMe").hide();
//     // alert("Submitted");
//     var mentorName = $('#mentorName').val();
//     var mentorPhone = $('#mentorPhone').val();
//     var mentorCity = $('#mentorCity').val();
//     createdMentor = new newMentor(mentorName, mentorPhone, mentorCity);
//     //add new student to student array
//     mentorArray.push(createdMentor);
//     console.log(mentorArray);

//     // //clear div before submit
//     $('.addAnotherMentor').empty();
//     //add buttons to add new student or proceed to mentors
//     $(".addAnotherMentor").append(" <h4 class=\'hideMeText\'>Add Another Mentor?</h4> <button class=\"btn btn-default addMentorYes\">Yes</button> <button type=\"submit\" class=\"btn btn-default addMentorNo\">No</button>");
//     $("form")[0].reset();


//     //add mentor functionality
//   $(".addMentorYes").click(function(e){
//      e.preventDefault();
//        //show submit button when clicked
//      $(".hideMe").show();
//      $(".hideMeText").hide();
//      $(".addMentorYes").hide();
//      $(".addMentorNo").hide();
//   });

//   //'no' add mentor functionalilty
//   $(".addMentorNo").click(function(e){
//      e.preventDefault();
//        //show submit button when clicked
//      $(".hideMeText").hide();
//      $(".addMentorYes").hide();
//      $(".addMentorNo").hide();
//      $(".hideMeMentor").hide();
//      $(".hideMeStuent").show();
//   });
// });


////////////////////////////////////////////////
////////////////////////////////////////////////
//////////Original  Exercise////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

    //get number of requested students and mentors from user
    totalStudents = parseInt(prompt('Please enter the total number of students learning JavaScript'));
    totalMentors = parseInt(prompt('Please enter the total number of mentors learning JavaScript'));

     //create empty array for students and mentors
     studentArray = [];
     mentorArray = [];

//request and create student
function student(studentName, studentPhone, studentCity){
     for(var i = 0; i < totalStudents; i ++){
    var studentName = prompt('Please enter the name of student ' + (i + 1));
    var studentPhone = prompt('Please enter the phone number of student ' + (i + 1));
    var studentCity = prompt('Please enter the city of student ' + (i + 1));
    var studentInfo = {name : studentName, phone: studentPhone, city: studentCity};
    studentArray.push(studentInfo);
console.log(studentArray);
    }
}

//request and create mentor
function mentor(mentorName, mentorPhone, mentorCity){
     for(var i = 0; i < totalMentors; i ++){
    var mentorName = prompt('Please enter the name of mentor ' + (i + 1));
    var mentorPhone = prompt('Please enter the phone number of mentor ' + (i + 1));
    var mentorCity = prompt('Please enter the city of mentor ' + (i + 1));
    var mentorInfo = {name : mentorName, phone: mentorPhone, city: mentorCity};
    mentorArray.push(mentorInfo);
    }
}

//alert user how many students and mentors have been entered
alert('There are ' + totalStudents + ' students and ' + totalMentors + ' mentors.');


function printParticipants(){
    for(var i = 0; 0 < studentArray.length + mentorArray.length; i ++){
    }
}

//show students in alerts
function showStudents(array){
  for(var i = 0; i < array.length; i ++){
   alert('Student ' + (i + 1) + '\nName : ' + (array[i].name) + '\nPhone Number : ' + (array[i].phone) + "\nCity : " + (array[i].city));
  }
}

//show mentors in alerts
function showMentors(array){
  for(var i = 0; i < array.length; i ++){
   alert('Mentor ' + (i + 1) + '\nName : ' + (array[i].name) + '\nPhone Number : ' + (array[i].phone) + "\nCity : " + (array[i].city));
  }
}

     //call functions
     student(studentName, studentPhone, studentCity);
     mentor(mentorName, mentorPhone, mentorCity);
     showStudents(studentArray);
     showMentors(mentorArray);









