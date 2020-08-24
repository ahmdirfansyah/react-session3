function Movie (title, duration, category){
        this.title=title;
        this.duration=duration;
        this.category=category;
        this.movieInfo  = function(){
            return `You're watching movie ${this.title}, category ${this.category}, duration ${this.duration}`
        }
        streamAt = function(){
            return `Film tayang d Televisi`
        }
    }


class Soundtrack extends Movie{
    constructor(title, duration, category, titleSong, singer){
        super(title, duration, category);
        this.titleSong=titleSong;
        this.singer=singer;
    }
    movieSoundtrack(){
        return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}`;
    }
}

class Channel extends Movie{
    constructor (title, duration,category,titleSong, singer, channelName){
        super(title,duration,category,titleSong,singer);
        this.channelName = channelName;
    }
    streamAt(){
        return `Film ${this.title} tayang di ${this.channelName}`
    }
}

let object1 = new Movie ('Suspicious Partner', '60 minutes', 'Romance');
let object2 = new Soundtrack('Suspicious Partner', '60 minutes', 'Romance', 'How do you feel', 'Ridho Majid');
let object3 = new Channel ('Suspicious Partner', '60 minutes', 'Romance', 'How do you feel', 'Ridho Majid','Netflix');

console.log(object1.movieInfo());
console.log(object1.title);
console.log(object2.movieSoundtrack());
console.log(object3.streamAt());
