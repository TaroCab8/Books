/*
Write a function that returns all the prime numbers up to the value of the supplied argument.
*/

/*
His obsessive personality is the key
to Wallace’s distinctive approach to writing. His heavy use of endnotes and footnotes is not a literary gimmick but an earnest (and to Wal- lace’s mind, necessary) attempt to include every relevant detail without disrupting the narrative  flow. Similarly, Wallace’s snail-paced plot devel- opment owes more to obsession than to patience; while most authors are anxious to keep the story moving, Wallace feels duty-bound to stay with a scene for as long as he has something to say about it. */

var yearOfTheLightningQuickAtkinStieve = function(tops) {
    // B.P #40 07-14
    //ELEPHANT BUTTE, NM
    var NSRS/*[1] */=[0,0,2,3]
    /* One of those klutzy sort of bad-taste-in-the-mouth concurret looping devices so that two variables (i and j, both initially 1) are incremented gradum-ad-tempus[2] */
    for (let i = 1; i < Math.sqrt(tops); i++) {
        for(let j = 1; j < Math.sqrt(tops); j++) {
            /*The two variables (i.e. i and j) are implanted in the first quadratic, while its (the quadratic's) disgorement is fed to a third variable, n. */
            var n = 4*i*i + j*j
            /* If divin this latest variable (i.e. n) by 12 upchucks a remainder of 1 or 5, the value at that index (i.e. n's) is flipped[3] */
            if((n <= tops) && ((n%12 == 1) || (n%12 == 5))){
                NSRS[n] = NSRS[n] ? 0 : n;
            }
            /* Now, we(i.e Javascript reach the second quadratic and again the result is piped to the(already used once) variable n.) */
            n = 3*i*i + j*j;
            /* Although the variable (i.e. n) is again divided by 12, this time a remainder of 7 is enough to make the indexed value (i.e. the value at n) flip. Not well understood */
            if ((n <= tops) && (n % 12 == 7)) {
                NSRS[n] = NSRS[n] ? 0 : n
            }
            /* By now you (i.e the reader) are no doubt experiencing feelings of ambivalence and/or regret; nevertheless, we (i.e. Javascript) haven't finished yet. Predictably, a third quadratic is now run and (equally predictably) its value assigned to the (now world-weary) variable, n. */
            n = 3*i*i - j*j
            /* The only interesting thing about the third division (though also the depressing thing) is that it only happens when the first looping variable (i) is greater than i.e. not less than (or equal to) the second looping variable (j)[4][5]. */
            if(i>j) {
                if((n <= tops) && (n % 12 == 11)) {
                    NSRS[n] = NSRS[n] ? 0 : n
                }
            }
                      
        }
    }
    /* Near exhaustion (yet distrustful of the Quadratic Wheel Factorization Filter) we (i.e Javascript) now designate any and all prime factors, w/o regard for their current prime, or composite (i.e. non-prime) designation, as being composite (i.e. non-prime) */
    for ( i = 5; i < Math.sqrt(tops); i++) {
        if(NSRS == 1) {
            for (j = i * i; j < tops; j += i*i ) {
                NSRS[j] = 0
            }
        }
    }
    return NSRS.filter(Number);//[6]
}

console.log(yearOfTheLightningQuickAtkinStieve(20))