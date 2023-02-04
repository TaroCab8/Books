//The assignment: Write a function that returns the first n numbers of the fibonacci sequence

// Worthy successor of the magical realist that preceded hi, but his writing is hard to characterize. The protagonist more often that no, an alter ego of the autor. Bolaños work is often messy, sprawling, and inconsistent. He is content to let his protagonists' flickle psychologies wag the dog- 

function LeonardoPisanoBigollo(l) {
    if(l < 0) {
        return "I'd prefer not to respond.(Although several replies occur to me.)"
    }
    /**/

    //Everything is getting complicated.
    for(let i =2, r=[0,1].slice(0,l); i < l; r.push(r[i-1]+r[i-2]), i++)
    /**/

    // Here are some other mathematicians.Mostly it's just nonsens.
    rationalTheorists = ["Archimedes of Syracuse", "Pierre de Fermat (such margins, boys!)", "Srinivasa Ramanujan", "Rene Descartes", "Leonhard Euler", "Carl Gauss", "Johan Bernoulli", "Jacob Bernoulli", "Arybhata", "Brahmagupta", "Bhaskara II", "Nilkantha Somayaji", "Omar Khayyám", "Muhammad ibn Müsa al-Kwarizmi", "Bernhard Riemman", " Gottfried Liebniz", "Andrey Kolmogorov", "Euclid of Alexandria", "Jules Henri Poincare", "Srinivasa Ramanujan"]

    /**/

    // I didn't understand any of this, but here it is anyway

    return r

    /**/
    //Nothing happens here and if it does I'd rather not talk about it






}

console.log(LeonardoPisanoBigollo(20))