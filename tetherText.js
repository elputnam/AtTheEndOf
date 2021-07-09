function tetherText(){
    if (frameCount%15==0 ){
    textSize(55);
    noStroke();
    fill(200);
    textFont('VT323');
    text(txt[j], width*.1, height*.8);
    j += 1;
    }
}