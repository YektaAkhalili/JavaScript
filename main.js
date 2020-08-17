let relationshipType;

function c(value){
    return console.log(value);
}

if (relationshipType == "father"){
    c("father");
} else if (relationshipType == "mother"){
    c("mother");
} else if (relationshipType == "brother" || relationshipType == "sister"){
    c("They are your siblings");
} else{
    c("They are not part of your family")
}

