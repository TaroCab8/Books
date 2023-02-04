//The assignment: Write a function that returns the first n numbers of the fibonacci sequence

// Shakespeare style probes the human psyche to the fullest. He maps the dark crevices of his protagonists and lays bare their souls in wondrously expressive verse. His sonnets and plays make heavy use of iambic pentameter which was the popular lyrical form of his time.

function theSeriesOfFIBONACCI(theSize) {
    // a CALCKULATION in two acts
    // emply'ng the humourous logick of JAVA-scripte

    //drañatic personae
    var theResult;// an ARRAY to contain THE NUMBERS
    let theCounter; // a NUMBER serv'nt to the FOR LOOP


    // ACT I: in which a ZERO is added for initiation
    //[ENTER: theResult]

    // Upon the noble list bestow a zero
    var theResult = [0]

    // ACT II: a LOOP in which the final TWO NUMBERS are QUEREED and SUMM'D 
    // [ENTER: theCounter]

    // Commence at one and venture o'er the numbers
    for (theCounter = 1; theCounter <theSize; theCounter++){
        // By divination set adjoining members
        theResult[theCounter] = (theResult[theCounter-1] || 1) + theResult[Math.max(0, theCounter-2)]
    }

    // 'Tis done, and here's the answer
    return theResult

    //[Exeunt]
}

console.log(theSeriesOfFIBONACCI(20))