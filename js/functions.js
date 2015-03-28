$("#viewAllNotes").click(function() {
    $("#listNotes").html("")
    if(localStorage.length){
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i)
            val = localStorage.getItem(key)
            var noteElement = $("<div data-role='collapsible' data-mini='true'/>")
            var h3NoteTitle = $("<h3/>").text(key)
            var pNoteData = $("<p/>").text(val)
            noteElement.append(h3NoteTitle)
            noteElement.append(pNoteData)
            $("#listNotes").append(noteElement)
        }
        $('div[data-role=collapsible]').collapsible({
            refresh: true
        })
    }
    else{
        $("#listNotes").html("<h2>Doesn't look like you've added a note yet.</h2><h4>Try going back to add one.</h4>")
    }
})
$("#saveNote").click(function() {
    noteTitle = $("#noteTitle").val().trim()
    noteData = $("#noteData").val().trim()
    if(!noteTitle.length && !noteData.length)
        alert("Please enter title or note data.")
    else{
        if (window.localStorage) {
            localStorage.setItem(noteTitle, noteData)
            alert("Your note has been saved")
        } else {
            alert("Failed to access Local Storage.")
        }
        $("#noteTitle").val("")
        $("#noteData").val("")
    }
})
$("#clearAllNotes").click(function() {
    localStorage.clear()
    $("#listNotes").html("")
    alert("*poof* and there was nothing!")
})
$("#discard").click(function() {
    $("#noteTitle").val("")
    $("#noteData").val("")
});
