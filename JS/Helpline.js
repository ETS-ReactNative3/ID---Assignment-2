
//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "61d2939fccd0211b32089571";
    getcontacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
      
      let studentID = $("#student-ID").val();
      let studentClass = $("#student-class").val();
      let studentNumber = $("#student-number").val();
      let studentMentor = $("#student-mentor").val();
      /*here you just give it the variable name to store the value and assign it to JSON data later on*/
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": contactName,
        "studentEmail": contactEmail,
        "message": contactMessage,
  
        //"msg": contactMessage,
        //"id": contactMessage,
        //here are the name we used in our DB
        /**Hence must match that of the DB name */
  
        "studentID": studentID,
        "studentClass":studentClass,
        "studentNumber":studentNumber,
        "studentMentor":studentMentor
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url":"https://klotrap-3aba.restdb.io/rest/student",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-contact").hide();
        $("#add-update-msg").show().fadeOut(5000)
        $("#add-contact").show(5000);
  
        //update our table 
        getcontacts();
      });
    });//end click 
  
  let used_for_delete = [];
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getcontacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://klotrap-3aba.restdb.io/rest/student",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          
          used_for_delete[i] = response[i]._id;
          //console.log(response[i]);
          //[METHOD 1]
          //let's run our loop and slowly append content
          //we can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].email + "</td>" +
            "<td>" + response[i].message + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */
  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
  
  
          /*note these content the arrangement you arrange it will affect the arrangement it is displayed in, in the Table info of Contents*/
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].name}</td>
          <td>${response[i].studentID}</td>
          <td>${response[i].studentClass}</td>
          <td>${response[i].studentNumber}</td>
  
          <td>${response[i].studentEmail}</td>
          <td>${response[i].studentMentor}</td>
          <td>${response[i].message}</td>
          
          
          <td>
            <a href='#' class='delete' 
            data-id='${response[i]._id}'>Del</a>
          </td>
        
  
          <td>
            <a href='#update-contact-container' class='update' 
            data-id='${response[i]._id}'
          
            data-zname='${response[i].name}'  
            data-zemail = '${response[i].studentEmail}'
            data-zmentor='${response[i].studentMentor}' 
            data-zid='${response[i].studentID}' 
            data-zclass='${response[i].studentClass}' 
            data-znumber='${response[i].studentNumber}' 
            data-zmessage='${response[i].message}'>Update</a>
          </td>
          
          </tr>`;
  
          
          //notice how when you access the data type
          //it must match the name of the data type in the database
  
          //notice also that you store what you retrive back from 
          //from a JSON obj in a variable starting with data 
          //however you do have to note that data is not part of 
          //variable name instead is just indicating it is in the form of a data
  
          //NOTE that do not '-' unless you are indicating that 
          //you are combining the two variables tgt
          //also do not put '_' it may result in confusion
          //NOTE also naming convention will also affect the system like capitalized(Important) naming like 
          //Eg. 'sName' / 'Sname'
        }
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        //$("#contact-list tbody").html(content);        (here i remove the display of all the contacts details)
  
        //$("#total-contacts").html(response.length);    (here i remove the number of all the contact details)
      });
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
  
    //so here you store the JSON data and put it in a variable 
    //before in STEP 11 you then access the ID and load it into the HTML
    
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
  
      let contactName = $(this).data("zname");
      let contactEmail = $(this).data("zemail");
      let contactMsg = $(this).data("zmessage");
      //let contactId = $(this).data("sid");
  
      let studentID = $(this).data("zid");
      let studentClass = $(this).data("zclass");
      let studentNumber = $(this).data("znumber");
      let studentMentor = $(this).data("zmentor");
  
      let presetId = $(this).data("id");
  
      //console.log($(this).data("msg"));
  
  
      
  
      //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
      //here we get the value for the GET and then 
      //add back to the HTML id with the tags
  
      //update our update form values, basically you access each of the attributes in the form and update them with the values you got back from JSON
  
      $("#update-contact-name").val(contactName);
      $("#update-contact-email").val(contactEmail);
      $("#update-contact-msg").val(contactMsg);
      
      $("#update-student-ID").val(studentID);
      $("#update-student-class").val(studentClass);
      $("#update-student-number").val(studentNumber);
      $("#update-student-mentor").val(studentMentor);
  
      $("#update-contact-id").val(presetId);
  
      $("#update-contact-container").show();
      //*****after updating the HTML update-form then you show the table
  
    });//end contact-list listener for update function
    
  
    //this functions essentially deletes the tuple
    $("#contact-list").on("click", ".delete", function(e) {
      e.preventDefault();
      const presetId = $(this).data("id");
  
      deletetuple(presetId);
    });
  
    /*
    //this functions essentially executes when you click delete 
    //hence it will print the data then find the data you clicked
    $("#contact-list").on("click", ".delete", function (e) {
      e.preventDefault();
  
      let presetId = $(this).data("id");
      console.log(presetId)
      //$("#update-contact-id").val(presetId);
      
      //$(".contact-list").hide();
      
      for (var i = 0; i < used_for_delete.length; i++) {
        //console.log(used_for_delete[i]);
        //console.log(i);
        if(presetId == used_for_delete[i]){
          console.log("you found it");
          console.log(presetId);
          //$("#contact-list tbody").hide();
          
        }
      }
    });*/
  
  
  
    //[STEP 12]: Here we load in our contact form data
    //Update form listener
  
    //here you on the clcik update button you then retrive the
    //updated info the user have changed in the table and then
    //you store it in variable before you call a func to put the variables into the Data Base
  
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      //retrieve all my update form values
      let contactName = $("#update-contact-name").val();
      let contactEmail = $("#update-contact-email").val();
      let contactMsg = $("#update-contact-msg").val();
      //let contactId = $("#update-contact-id").val();
  
      let studentID = $("#update-student-ID").val();
      let studentClass = $("#update-student-class").val();
      let studentNumber = $("#update-student-number").val();
      let studentMentor = $("#update-student-mentor").val();
  
      let presetId = $("#update-contact-id").val();
  
      console.log($("#update-contact-msg").val());
      //console.log(contactMsg);
  
  
  
      //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
  
      /*
      updateForm(contactId, contactName, contactEmail, contactMsg,studentID, studentClass, studentNumber, studentID);*/
      updateForm(presetId, contactName, contactEmail, contactMsg, studentID, studentClass, studentNumber, studentMentor);
  
      
    });//end updatecontactform listener
  
  
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    
  /*function updateForm(id, contactName, contactEmail, contactMsg,studentID, studentClass, studentNumber, studentID)*/
    function updateForm(presetId, contactName, contactEmail, contactMsg, studentID, studentClass, studentNumber, studentMentor) {
      //@TODO create validation methods for id etc. 
  
      //notice how preset ID is only used to find and indicate which tuple you are refering too, but it is not sent to the DB
      var jsondata = { 
        "name": contactName, 
        "studentEmail": contactEmail, 
        "message": contactMsg,
  
        "studentID": studentID,
        "studentClass":studentClass,
        "studentNumber":studentNumber,
        "studentMentor":studentMentor
       };
      //similarly here you are also loading it into the JSON data just that you are taking the updated values from the update form
  
      var settings = {
        "async": true,
        "crossDomain": true,
        "url":`https://klotrap-3aba.restdb.io/rest/student/${presetId}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getcontacts();
      });
    }//end updateform function
  
    //function to delte and remove the tuple
    function deletetuple(presetId){
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://klotrap-3aba.restdb.io/rest/student/${presetId}`,
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        getcontacts();
      });
    }
  })
  