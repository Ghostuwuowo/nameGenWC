function generateName(){
    let prefix = ["Fire", "Dove", "Sparrow", "Robin", "Blue", "Night", "Fern"];
    let suffix = ["tail", "foot", "leg", "dash", "frost", "wing"];
    let clan = ["ThunderClan", "RiverClan", "WindClan", "ShadowClan", "SkyClan"]
    console.log(prefix[randomInt(prefix.length)] + suffix[randomInt(suffix.length)] + "from" + clan[randomInt(clan.length)]);
}

function randomInt(max){
    const maxNum = Math.ceil(max);
    return Math.floor(Math.random() * maxNum);
}

generateName();