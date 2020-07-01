function addNote1() {
    var writeANoteHere1 = document.getElementById("write-a-note-here1");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML= `<div class="talk-bubble tri-right border round btm-left-in">
        <div class="talktext">
          <p> insert text</p>
        </div>
        <div>
            <input type="checkbox" id="favoriteIcon" name="favorite">
                <input type="text" id="firstName" name="fname"><br><br>
            </div>
            
        </div>`
 writeANoteHere1.appendChild(newSpeachBubble);
}
function addNote2() {
    var writeANoteHere2= document.getElementById("write-a-note-here2");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=`<div class="talk-bubble tri-right border round btm-left-in">
        <div class="talktext">
          <p> insert text</p>
        </div>
        <div>
            <input type="checkbox" id="favoriteIcon" name="favorite">
                <input type="text" id="firstName" name="fname"><br><br>
            </div>
            
        </div>`
 writeANoteHere2.appendChild(newSpeachBubble);
}
function addNote3() {
    var writeANoteHere3= document.getElementById("write-a-note-here3");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=`<div class="talk-bubble tri-right border round btm-left-in">
        <div class="talktext">
          <p> insert text</p>
        </div>
        <div>
            <input type="checkbox" id="favoriteIcon" name="favorite">
                <input type="text" id="firstName" name="fname"><br><br>
            </div>
            
        </div>`
 writeANoteHere3.appendChild(newSpeachBubble);
}
function addNote4() {
    var writeANoteHere4= document.getElementById("write-a-note-here4");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=`<div class="talk-bubble tri-right border round btm-left-in">
        <div class="talktext">
          <p> insert text</p>
        </div>
        <div>
            <input type="checkbox" id="favoriteIcon" name="favorite">
                <input type="text" id="firstName" name="fname"><br><br>
            </div>
            
        </div>`
 writeANoteHere4.appendChild(newSpeachBubble);
}


    function addNote5(newtext) {
      if (newtext == undefined){
    
          newtext="";
              
      //  updateNotes();
    }
    let numberNotes=document.querySelectorAll(".talk-bubble").length;
    let newNoteId="note"+numberNotes;
    let newfunc = function() {
        deleteNotes(numberNotes,newNoteId);
    }
    
    var writeANoteHere= document.getElementById("write-a-note-here1");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=' <div id="'+newNoteId+'" class="talk-bubble tri-right border round btm-left-in"><div class="talktext"><p> insert text</p></div><div><input type="checkbox" id="favoriteIcon" name="favorite"><input class="about-textbox" value="'+newtext+'" type="text" id="firstName" name="fname"> <div  class="deleteButton" id="'+newNoteId+"dell"+'">delete</div> <br><br></div></div>';
   newSpeachBubble.querySelector("#"+newNoteId+"dell").onclick= newfunc;
newSpeachBubble.onchange=updateNotes;

 writeANoteHere.appendChild(newSpeachBubble);
 // alert("add-note")
   updateNotes()
    
}

 function addNote6(newtext) {
      if (newtext == undefined){
    
          newtext="";
              
      //  updateNotes();
    }
    let numberNotes=document.querySelectorAll(".talk-bubble").length;
    let newNoteId="note"+numberNotes;
    let newfunc = function() {
        deleteNotes(numberNotes,newNoteId);
    }
    
    var writeANoteHere= document.getElementById("write-a-note-here2");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=' <div id="'+newNoteId+'" class="talk-bubble tri-right border round btm-left-in"><div class="talktext"><p> insert text</p></div><div><input type="checkbox" id="favoriteIcon" name="favorite"><input class="about-textbox" value="'+newtext+'" type="text" id="firstName" name="fname"> <div  class="deleteButton" id="'+newNoteId+"dell"+'">delete</div> <br><br></div></div>';
   newSpeachBubble.querySelector("#"+newNoteId+"dell").onclick= newfunc;
newSpeachBubble.onchange=updateNotes;

 writeANoteHere.appendChild(newSpeachBubble);
 // alert("add-note")
   updateNotes()
    
}

 function addNote7(newtext) {
      if (newtext == undefined){
    
          newtext="";
              
      //  updateNotes();
    }
    let numberNotes=document.querySelectorAll(".talk-bubble").length;
    let newNoteId="note"+numberNotes;
    let newfunc = function() {
        deleteNotes(numberNotes,newNoteId);
    }
    
    var writeANoteHere= document.getElementById("write-a-note-here3");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=' <div id="'+newNoteId+'" class="talk-bubble tri-right border round btm-left-in"><div class="talktext"><p> insert text</p></div><div><input type="checkbox" id="favoriteIcon" name="favorite"><input class="about-textbox" value="'+newtext+'" type="text" id="firstName" name="fname"> <div  class="deleteButton" id="'+newNoteId+"dell"+'">delete</div> <br><br></div></div>';
   newSpeachBubble.querySelector("#"+newNoteId+"dell").onclick= newfunc;
newSpeachBubble.onchange=updateNotes;

 writeANoteHere.appendChild(newSpeachBubble);
 // alert("add-note")
   updateNotes()
    
}
 function addNote8(newtext) {
      if (newtext == undefined){
    
          newtext="";
              
      //  updateNotes();
    }
    let numberNotes=document.querySelectorAll(".talk-bubble").length;
    let newNoteId="note"+numberNotes;
    let newfunc = function() {
        deleteNotes(numberNotes,newNoteId);
    }
    
    var writeANoteHere= document.getElementById("write-a-note-here4");
    var newSpeachBubble=document.createElement("div");
    newSpeachBubble.innerHTML=' <div id="'+newNoteId+'" class="talk-bubble tri-right border round btm-left-in"><div class="talktext"><p> insert text</p></div><div><input type="checkbox" id="favoriteIcon" name="favorite"><input class="about-textbox" value="'+newtext+'" type="text" id="firstName" name="fname"> <div  class="deleteButton" id="'+newNoteId+"dell"+'">delete</div> <br><br></div></div>';
   newSpeachBubble.querySelector("#"+newNoteId+"dell").onclick= newfunc;
newSpeachBubble.onchange=updateNotes;

 writeANoteHere.appendChild(newSpeachBubble);
 // alert("add-note")
   updateNotes()
    
}
//addNote()
var addButton1 = document.getElementById("addButton1");
addButton1.onclick = function(event) {addNote5()}
var addButton2 = document.getElementById("addButton2");
addButton2.onclick = function(event) {addNote6()}
var addButton3 = document.getElementById("addButton3");
addButton3.onclick = function(event) {addNote7()}
var addButton4 = document.getElementById("addButton4");
addButton4.onclick = function(event) {addNote8()}



//it is a storage system for the to do list()

function updateNotes() {
    
    document.querySelectorAll(".about-textbox");
    
   var aboutTextbox = document.querySelectorAll(".about-textbox");
    
    //somthing that can capture every early note on the page as an array
    var newToDolist= []
    
    for (var i=0; i<aboutTextbox.length; i++){
        console.log("yay"+i);
        console.log(aboutTextbox[i].value);
        newToDolist.push(aboutTextbox[i].value)
    
    }
    
    
    
    console.log(newToDolist);
    
    
    localStorage.setItem('toDoList', JSON.stringify(newToDolist));
    
    var cat = JSON.parse(localStorage.getItem('toDoList'));


    console.log (cat)
    
}
 function deleteNotes (i,iddelete){
     console.log(iddelete);
     var cat = JSON.parse(localStorage.getItem('toDoList'));
     cat.splice(i,1);
     localStorage.setItem('toDoList', JSON.stringify(cat)); 
     console.log("deleteNotes"+i);
     document.getElementById(iddelete).parentNode.removeChild(document.getElementById(iddelete));
     updateNotes();
    document.location.reload(true);
 }

function loadSavedNotes() {
     if(localStorage.getItem('toDoList')==undefined){
         return;
         
     }
    
    var cat = JSON.parse(localStorage.getItem('toDoList'));
    console.log("loadSavedNotes");

 for(var i=0; i<cat.length; i++){
    console.log(cat[i])
     addNote5(cat[i]);
}
    
function newBox(newText){
    
    
    
}

}
loadSavedNotes();