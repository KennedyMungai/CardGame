const cardObjectDefinitions = [
    { id: 1, imagePath: "/images/card-KingHearts.png" },
    { id: 2, imagePath: "/images/card-JackClubs.png" },
    { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
    { id: 4, imagePath: "/images/card-AceSpades.png" },
]

function createCard(cardItem)
{
    // These are teh div elements that make up the card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')
}

function createElement(elemType)
{
    return document.createElement(elemType)
}