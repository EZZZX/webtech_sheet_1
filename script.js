
var shortName = "Tim Berners-Lee";
var fullName = "Sir Timothy John Berners-Lee"
var bDate = "08.06.1955"

document.getElementById("ShortName").appendChild(document.createTextNode(shortName));
document.getElementById("FullName").appendChild(document.createTextNode(fullName));
document.getElementById("Born").appendChild(document.createTextNode(bDate))

document.getElementById("ShortName").appendChild(document.createTextNode(shortName));

function showName(){
    var shortName = "name";
    document.getElementById("ShortName").innerHTML = shortName;
}

function showWiki(){
    window.location.assign("https://en.wikipedia.org/wiki/Tim_Berners-Lee");
}