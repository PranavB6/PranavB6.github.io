let imgSources = [
  {
    src: "1.jpg",
    caption: "French Toast!",
  },
  {
    src: "2.jpg",
    caption: "Sandwhich!",
  },
  {
    src: "3.jpg",
    caption: "Tandoori Chicken!",
  },
  {
    src: "4.jpg",
    caption: "Fresh Burrito!",
  },
  {
    src: "5.jpg",
    caption: "Macaroni!",
  },
  {
    src: "6.jpg",
    caption: "Dosa!",
  },
  {
    src: "7.jpg",
    caption: "Chicken!!!",
  },
  {
    src: "8.jpg",
    caption: "Sushi!",
  },
  {
    src: "9.jpg",
    caption: "Ice Cream!",
  },
  {
    src: "10.jpg",
    caption: "Tacos!",
  },
  {
    src: "11.jpg",
    caption: "Fried Chicken!",
  },
  {
    src: "12.jpg",
    caption: "Bubble Waffle!",
  },
  {
    src: "13.jpg",
    caption: "Nachos!",
  },
  {
    src: "14.jpg",
    caption: "Chicken & Waffles!",
  },
  {
    src: "15.jpg",
    caption: "Chicken I think",
  },
  {
    src: "16.jpg",
    caption: "Resturant Vibes!",
  },
  {
    src: "17.jpg",
    caption: "Burger!",
  },
  {
    src: "18.jpg",
    caption: "Goyza!",
  },
  {
    src: "19.jpg",
    caption: "Pizza!",
  },
  {
    src: "20.jpg",
    caption: "Tim Hortons!",
  },
  {
    src: "21.jpg",
    caption: "Birthday Cake!",
  },
];

class Images {
  constructor(imgSources) {
    this.totalImgs = imgSources.length;
    this.currIdx = 0;
    this.imgs = [];
    this.random = false;

    imgSources.forEach((img_src) => {
      let img = new Image();
      img.src = `imgs/${img_src.src}`;
      img.caption = img_src.caption;

      this.imgs.push(img);
    });
  }

  getRandom() {
    // There are 21 images so index [0, 21)
    this.currIdx = getRandomInt(0, 21);
    return this.imgs[this.currIdx];
  }

  getCurrent() {
    return this.imgs[this.currIdx];
  }

  getNext() {
    this.currIdx += 1;

    if (this.currIdx == this.totalImgs) {
      this.currIdx = 0;
    }

    return this.imgs[this.currIdx];
  }

  getPrevious() {
    this.currIdx -= 1;

    if (this.currIdx == -1) {
      this.currIdx = this.totalImgs - 1;
    }

    return this.imgs[this.currIdx];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export let imgs = new Images(imgSources);
