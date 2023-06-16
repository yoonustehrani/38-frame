const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const images = shuffleArray(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
const col1 = images.slice(0, 5)
const col2 = images.slice(5, 9)
const shouldBeLargeCol2 = i => i == col2.indexOf(col2.at(0)) || i == col2.indexOf(col2.at(-1))
// console.log(col2.length);

function Gallery() {

    const exceptional = [1, 5]

    return (
        <div className="bg-red-600 grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-2 overflow-hidden">
                {col1.map((img, i) => (
                    <div className={`cursor-pointer ${ i == 2 ? 'col-span-2' : ''} h-full md:grayscale md:hover:grayscale-0 duration-500`}>
                        <img className="h-full w-auto" src={`/images/gallery/${img}.jpg`} loading="lazy"/>
                    </div>  
                ))}
            </div>
            <div className="grid grid-cols-2">
                {col2.map((img, i) => (
                    <div className={`cursor-pointer ${ shouldBeLargeCol2(i) ? 'col-span-2 max-h-96 flex justify-center items-center' : 'h-full'} md:grayscale md:hover:grayscale-0 duration-500 overflow-hidden`}>
                        <img src={`/images/gallery/${img}.jpg`} loading="lazy"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;