document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e){
    var issueDesc = document.getElementById('issueDescInput').Value;
    var issueSeverity = document.getElementById('issueSeverityInput').Value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').Value;
    var issueId = chance.guid();
    var issueStatus = 'Open';

    var issue ={
        id: issueId,
        description: issueDesc, 
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus,
    }

    if (localStorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    
}

function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesListe = document.getElementById('issuesList');

    issuesListe.innerHTML = '';

    for (var i = 0; i < issues.lenght; i++){
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesListe.innerHTML += '<div class="well">' +
                                '<h6>Issue ID: ' + id + '</h6>'+
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + desc +'</h3>'+
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity +'</p>'+
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo +'</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Closed</a>'+
                                '<a href="#" onclick="deleteIssue(\''+id+'\)" class="btn btn-danger">Delete</a>'+
                                '</div>';


    }
}