const fortunesCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasent surprise.",
    "Whenever possible, keep it simple",
]

exports.getFortune= () => {
    const idx= Math.floor(Math.random()*fortunesCookies.length)
    return fortunesCookies[idx]
}