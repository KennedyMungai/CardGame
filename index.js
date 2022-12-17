const cardObjectDefinitions = [
    { id: 1, imagePath: "/images/card-KingHearts.png" },
    { id: 2, imagePath: "/images/card-JackClubs.png" },
    { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
    { id: 4, imagePath: "/images/card-AceSpades.png" },
]

const cardBackImgPath = '/images/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

let cards = []

const playGameButtonElement = document.getElementById('playGame')

const collapsedGridAreaTemplate = '"a a" "a a"'
const cardCollectionCellClass = ".card-pos-a"

const numCards = cardObjectDefinitions.length

const cardPositions = []

loadGame()

function createCards()
{
    cardObjectDefinitions.forEach((cardItem) =>
    {
        createCard(cardItem)
    })
}

function createCard(cardItem)
{
    // These are teh div elements that make up the card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // Create the front and back elements for the card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // Add classes and ids to card elememts
    addClassToElement(cardElem, "card")
    addIdToElement(cardElem, cardItem.id)

    // Add a class to the inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // Add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // Add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // Add src attribute and appropriate value to the img element - Back of card
    addSrcToImageElem(cardBackImg, cardBackImgPath)

    // Add src attribute and appropriate value to the img element - Front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath)

    // Assign a class to the back image element of the back of the card
    addClassToElement(cardBackImg, 'card-img')

    // Assign a class to the front image element of the back of the card
    addClassToElement(cardFrontImg, 'card-img')

    // Add front image element as a child element to the back of the card element
    addChildElement(cardFrontElem, cardFrontImg)

    // Add back image element as a child element to the back of the card element
    addChildElement(cardBackElem, cardBackImg)

    // Add front card element as a child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // Add back card element as a child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // Added the inner element as a child of the card element
    addChildElement(cardElem, cardInnerElem)

    // Add the card element as the child element to the appropriate grid cell
    addCardToGridCell(cardElem)

    initializeCardPositions(cardElem)
}

function createElement(elemType)
{
    return document.createElement(elemType)
}

function addClassToElement(elem, className)
{
    elem.classList.add(className)
}

function addIdToElement(elem, id)
{
    elem.id = id
}

function addSrcToImageElem(imgELem, src)
{
    imgELem.src = src
}

function addChildElement(parentElem, childElem)
{
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card)
{
    const cardPositionClassName = mapCardToGridCell(card)

    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElement(cardPosElem, card)
}

function mapCardToGridCell(card)
{
    if (card.id == 1)
    {
        return '.card-pos-a'
    }
    else if (card.id == 2)
    {
        return '.card-pos-b'
    }
    else if (card.id == 3)
    {
        return '.card-pos-c'
    }
    else (card.id == 4)
    {
        return '.card-pos-d'
    }
}

function loadGame()
{
    createCards()

    cards = document.querySelectorAll('.card')

    playGameButtonElement.addEventListener('click', () => startGame())
}

function startGame()
{
    initializeNewGame()
    startRound()
}

function initializeNewGame()
{

}

function startRound()
{
    initializeNewGame()
    collectCards()
    flipCards(true)
}

function initializeNewRound()
{

}

function collectCards()
{
    transformGridArea(collapsedGridAreaTemplate)
    addCardToGridCell(cardCollectionCellClass)
}

function transformGridArea(areas)
{
    cardContainerElem.style.gridTemplateAreas = areas
}

function addCardsToGridAreaCell(cellPositionClassName)
{
    const cellPositionElem = document.querySelector(cellPositionClassName)

    cards.forEach((card, index) =>
    {
        addChildElement(cellPositionElem, card)
    })
}

function flipCard(card, flipToBack)
{
    const innerCardElem = card.firstChild

    if (flipToBack && !innerCardElem.classList.contains('flip-it'))
    {
        innerCardElem.classList.add('flip-it')
    }
    else if (innerCardElem.classList.contains('flip-it'))
    {
        innerCardElem.classList.remove('flip-it')
    }
}

function flipCards(flipToBack)
{
    cards.forEach((card, index) =>
    {
        setTimeout(() =>
        {
            flipCard(card, flipToBack)
        }, index * 100);
    })
}

function shuffleCards()
{
    const id = setInterval(shuffle, 12)

    let shuffleCount = 0

    function shuffle()
    {
        randomizeCardPositions()

        if (shuffleCount == 500)
        {
            clearInterval(id)
        }
        else 
        {
            shuffleCount++
        }
    }
}

function randomizeCardPositions()
{
    const random1 = Math.floor(Math.random() * numCards) + 1
    const random2 = Math.floor(Math.random() * numCards) + 1

    const temp = cardPositions[random1 - 1]

    cardPositions[random1 - 1] = cardPositions[random2 - 1]
    cardPositions[random2 - 1] = temp
}

function initializeCardPositions()
{
    cardPositions.push(card.id)
}

function dealCards()
{
    addCardsToAppropriateCell()
}

function addCardsToAppropriateCell()
{
    cards.forEach((card) =>
    {
        addCardToGridCell(card)
    })
}