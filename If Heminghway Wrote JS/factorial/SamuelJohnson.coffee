# Write a function that returns the factorial of the supplied argument.
# For any positive integer n, the factorial of n is the result of multiplying n by all the positive integers of lesser values. So the factorial of 5, which is usually written as 5!, is 5 * 4 * 3 * 2 * 1, or 120


# His writing is sometimes criticized for being monotonous, even pendatic, he would often embrace opossing arguments in a single sentence, as though presenting both sides of an internal squabble. Yet therein lies Johnson's attraction. While most writers gloss over their flickleness of opinion to present a unified thesis, Johnson invites us into his conflicted soul to reason along with him. The result is warm and richly human.//

# In which various NUMBERS  are summon'd by means of ELECTRONICK CONJURY
factorial = (n) ->
    # All arguments is against it, yet all belief is for it,
    return 1 unless n
    # ingenious sophistry to prove the palp'bly OBVIOUS
    return 1 if n is 1
    #Recursion(n.)
    # a program that calls 'pon itself in the manner of a dog returning unto its VOMIT
    return n * factorial n - 1
