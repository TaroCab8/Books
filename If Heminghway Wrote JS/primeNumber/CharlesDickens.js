/*
Write a function that returns all the prime numbers up to the value of the supplied argument.
*/

/* His lively writing often portrayed good an evil in the charactherization of landowners or factory owners and people with lesser means with wonderful dialog and eloquent fusing of dark and comic themes. During his lifetime his work was publish in monthly statements and as a consequence, each statement will end with an unresolved misfortune or unexpected revelation so as to beef up anticipation for the next issue.*/ 

function MrsPrimmerwicksProgeny(MaxwellNumberby) {
    Number.prototype.isAPrimmerwick = function () {
        for (let AddableChopper = 2; AddableChopper <= this; AddableChopper++) {
            var BittyRemnant = this % AddableChopper;
            if(BittyRemnant == 0 && this != AddableChopper) {
                return console.log("It is composite. The dear, gentle, patient, noble", +this, "is composite."), false
            }
        }
        return console.log("Oh,", +this, +this, +this, "what a happy day this is for you and me!"), true;
    }

    var VenerableHeap = []
    for (let AveryNumberby = 2; AveryNumberby <= MaxwellNumberby; AveryNumberby ++) {
        if(AveryNumberby.isAPrimmerwick()) {
            VenerableHeap.push(AveryNumberby)
        }
    }
    return VenerableHeap
}


console.log(MrsPrimmerwicksProgeny(20))