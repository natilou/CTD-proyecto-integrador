import notFound from '../../assets/gifs/notFound.gif';
import notFound2 from '../../assets/gifs/notFound2.gif';

export function getRandomGif(){
    let items = [notFound, notFound2];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}