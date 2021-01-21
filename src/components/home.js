import React from 'react';

import images from '../images/images';
import prev from "../images/slideshow/prev.svg";
import next from "../images/slideshow/next.svg";


// testing 
// import img1 from "../images/slideshow/img1.jpeg";
// import img2 from "../images/slideshow/img2.jpeg";
// import img3 from "../images/slideshow/img3.jpeg";
// import img4 from "../images/slideshow/img4.jpeg";
// import img5 from "../images/slideshow/img5.jpeg";




class Home extends React.Component {
    state={
        imgs:[],
        img1:[],
        img2:[],
        img3:[]
    }


    componentDidMount = () => {
        let imgs = images
        for(let i=0; i<3; i++){
            this.setState({
                imgs: images,
                img1: imgs[0],
                img2: imgs[1],
                img3: imgs[2],
                intervalId: ""
            })
        }
        let intervalId = setInterval(() => {
            this.autoSlider()
            // let imgFade = document.getElementById('2');
            // imgFade.classList.add('fade')
            // imgFade.classList.remove('fade')
            document.getElementById('2').style.opacity = "1";
        }, 3000)
        this.setState({
            intervalId: intervalId
        })
    }

    onClick = (n) => {  
        this.setState(prevState => {
            let id = prevState.img1.id - n
            let id2 = prevState.img2.id - n
            let id3 = prevState.img3.id - n

            id < 0 ? id = 4 : id > 4 ? id = 0 : id = prevState.img1.id - n; 
            id2 < 0 ? id2 = 4 : id2 > 4 ? id2 = 0 : id2 = prevState.img2.id - n; 
            id3 < 0 ? id3 = 4 : id3 > 4 ? id3 = 0 : id3 = prevState.img3.id - n; 
           
            let newImg = prevState.imgs.find(img => img.id === id)
            let newImg2 = prevState.imgs.find(img => img.id === id2)
            let newImg3 = prevState.imgs.find(img => img.id === id3)
            return {
                img1: newImg,
                img2: newImg2,
                img3: newImg3
            }
        })
    }

    autoSlider = () => {
        document.getElementById('2').style.opacity = ".2";
        this.setState(prevState => {
            const n = 1
            let id = prevState.img1.id - n
            let id2 = prevState.img2.id - n
            let id3 = prevState.img3.id - n

            id < 0 ? id = 4 : id > 4 ? id = 0 : id = prevState.img1.id - n; 
            id2 < 0 ? id2 = 4 : id2 > 4 ? id2 = 0 : id2 = prevState.img2.id - n; 
            id3 < 0 ? id3 = 4 : id3 > 4 ? id3 = 0 : id3 = prevState.img3.id - n; 
            let newImg = prevState.imgs.find(img => img.id === id)
            // document.getElementById('2').style.opacity = ".2";
            let newImg2 = prevState.imgs.find(img => img.id === id2) // center pic
            // let imgFade = document.getElementById('2');
            // imgFade.classList.add('fade')
            let newImg3 = prevState.imgs.find(img => img.id === id3)
            return {
                img1: newImg,
                img2: newImg2,
                img3: newImg3
            }
        })
        
    }
   
    componentWillUnmount = () => {
        clearInterval(this.state.intervalId)
    }
    
    render(){
        return(
            <div className="home u-center-text">
                <h1 className="home__heading heading-primary">Welcome to Heavens Blessings</h1>
                <div className="home__container">
                    <div className="home__images--prev u-margin-top-2">
                        <img id="1" className="home__images home__images--side" src={this.state.img1.img} alt="puppy"/>
                    </div>
                    <div className="home__carousel">
                       <img id="2" className="home__images" src={this.state.img2.img} alt="puppy"/>
                      
                        {/* Next and Prev buttons  */}
                        {/* <img src={prev} className="arrows arrows--prev" onClick={() => this.onClick(-1)} alt="prev"/> */}
                        <img src={prev} className="arrows arrows--prev" onClick={() => this.test()} alt="prev"/>
                        <img src={next} className="arrows arrows--next" onClick={() => this.onClick(1)} alt="next"/>
                    </div>
                    <div className="home__images--next u-margin-top-2">
                       <img id="3" className="home__images home__images--side" src={this.state.img3.img} alt="puppy"/>
                    </div>
                </div>
                <div className="home__msg u-margin-TB-3 ">
                    <h3 className="home__msg-1">Thank you so much for visiting our site!</h3>
                    <h3 className="home__msg-1">We hope you find your perfect puppy with us!</h3>
                </div>
    
                {/* single images front and back card  */}
                <div className="row">
                    {/* col-1  */}
                    <div className="row--1">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h2>text front</h2>
                            </div>
                            <div className="card__side card__side--back">
                                <h2>text back</h2>
                            </div>
                        </div>
                    </div>
                    {/* col-2  */}
                    <div className="row--1">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h2>text front</h2>
                            </div>
                            <div className="card__side card__side--back">
                                <h2>text back</h2>
                            </div>
                        </div>
                    </div>
                    {/* col-3  */}
                    <div className="row--1">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h2>text front</h2>
                            </div>
                            <div className="card__side card__side--back">
                                <h2>text back</h2>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
        )
    }
}

export default Home;