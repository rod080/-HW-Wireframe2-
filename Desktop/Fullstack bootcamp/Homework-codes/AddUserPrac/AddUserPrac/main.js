$("document").ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyDcmLBhNwAzr8CvXSjn-Ssj7WTR8jFF3vA",
        authDomain: "inclassproject-1f879.firebaseapp.com",
        databaseURL: "https://inclassproject-1f879.firebaseio.com",
        projectId: "inclassproject-1f879",
        storageBucket: "inclassproject-1f879.appspot.com",
        messagingSenderId: "882509905957",
        appId: "1:882509905957:web:47a46b104fc4141c"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    database.ref().on("child_added", function(snapshot){
        var newDiv = $("<div>")
        console.log(snapshot.val().name);
        

        $("#nameTable").append($("<div class='newData'>").text(snapshot.val().name));

        $("#roleTable").append($("<div class='newData'>").text(snapshot.val().role));

        $("#startTable").append($("<div class='newData'>").text(snapshot.val().date));

        $("#rateTable").append($("<div class='newData'>").text(snapshot.val().rate));



    });


    $("#submitButton").on("click",function(){
        var nameInput = $("#nameInput").val().trim();
        var roleInput = $("#role").val().trim();
        var dateInput = $("#startDate").val().trim();
        var rateInput = $("#monthlyRate").val().trim();
        

        database.ref().push({
            name : nameInput,
            role : roleInput,
            date : dateInput,
            rate : rateInput

        });
        $("#nameInput").empty();
        $("#role").empty();
        $("#dateInput").empty();
        $("#rateInput").empty();

    });




});