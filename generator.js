const fs = require("fs");

async function generate() {
    console.log('start');

    let start = 185;
    const interval = 214*8;
    let image = 0;
    let text = '[Events]\n//Background and Video events\n//Storyboard Layer 0 (Background)\n//Storyboard Layer 1 (Fail)\n//Storyboard Layer 2 (Pass)\n//Storyboard Layer 3 (Foreground)\n';
    const scale = '0.89';

    text += `Sprite,Foreground,Centre,"sb\\black.png",320,240\n F,0,3609,15000,1,0\n S,0,0,739769,8\n`
    text += `Sprite,Foreground,Centre,"sb\\noise.jpg",320,240\n F,0,0,739769,0.2\n S,0,0,739769,0.5\n`

    while (image < 3450) {
        let imageString = image.toString();
        let zeroes = 6 - imageString.length;
        let filename = 'ck_';
        
        for (let i = 0; i < zeroes; i++) {
            filename += '0';
        }

        filename += `${imageString}.png.jpg`;

        const line1 = `Sprite,Background,Centre,"sb\\${filename}",320,240\n`
        const line2 = ` F,0,${start},${start+interval},0,1\n`
        const line3 = ` S,0,${start},${start+interval},${scale}\n`
        
        text += line1;
        text += line2;
        text += line3;

        start += interval;

        const line4 = ` F,0,${start+interval},${start+interval},0\n`

        text += line4;

        image+=8;
    }

    text += `Sprite,Foreground,Centre,"sb\\black.png",320,240\n F,0,727376,739769,0,1\n S,0,0,739769,8\n F,0,739769,745000,1\n F,0,745000,746500,1,0\n`
    text += '//Storyboard Layer 4 (Overlay)\n//Storyboard Sound Samples';
    
    fs.writeFile(`Kara's Walk Home - Weekend! Party with your Friends!!! (pishifat).osb`, text, (error) => { 
        if (error) throw err; 
    });

    console.log('done');
}

generate();