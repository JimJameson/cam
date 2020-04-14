'use strict';

const CLOUD_WIDTH = 420,
    CLOUD_HEIGHT = 270,
    CLOUD_X = 100,
    CLOUD_Y = 10,
    GAP = 10,
    FONT_GAP = 15,
    TEXT_WIDTH = 50,
    //BAR_HEIGHT = 20;
    BAR_WIDTH = 40,
    GAP_COLUMN = 50;

//let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
let barHeight = 150;

function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, x, y, text, font) {
    ctx.font = font;
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
}

function getMaxElement(obj) {
    let maxElement = 0;
    
    for (let element in obj) {
        let elementValue = Math.floor(obj[element]);
        maxElement = maxElement < elementValue ? elementValue : maxElement;     
    }
    return maxElement;
}

function renderPlayer(ctx, players) {
    let maxTime = getMaxElement(players);
    let i = 0;
    for (let playerName in players) {
        let playerTime = Math.floor(players[playerName]);
        ctx.fillStyle = 'black';
        ctx.fillText(playerName,
            CLOUD_X + GAP_COLUMN + (GAP_COLUMN + BAR_WIDTH) * i,
            CLOUD_Y + CLOUD_HEIGHT - 2*GAP);
        

        ctx.fillText(playerTime,
            CLOUD_X + GAP_COLUMN + (GAP_COLUMN + BAR_WIDTH) * i,
            (CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP) - barHeight * playerTime / maxTime - FONT_GAP);
        
           console.log((CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP) - barHeight * playerTime / maxTime);

        ctx.fillStyle = playerName === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.4) + 0.4) + ')';

        ctx.fillRect(CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i,
            CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP,
            BAR_WIDTH,
            - barHeight * playerTime / maxTime); 
        i++;        
    }
}

window.renderStatistics = function (ctx, players) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    renderText(ctx, CLOUD_X + GAP_COLUMN, CLOUD_Y + GAP,'Ура вы победили','PT Mono 16px');
    renderText(ctx, CLOUD_X + GAP_COLUMN, CLOUD_Y + GAP + FONT_GAP + GAP, 'Список результатов:', 'PT Mono 16px');
    ctx.fillStyle = '#000';
    renderPlayer(ctx, players);
}