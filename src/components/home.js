import React from 'react';

import images from '../images/images';
import prev from "../images/slideshow/prev.svg";
import next from "../images/slideshow/next.svg";


// testing 
import img1 from "../images/slideshow/img1.jpeg";
import img2 from "../images/slideshow/img2.jpeg";
// import img3 from "../images/slideshow/img3.jpeg";
// import img4 from "../images/slideshow/img4.jpeg";
import img5 from "../images/slideshow/img5.jpeg";




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
                img3: imgs[2]
            })
        }
    }

    onClick = (n) => {  
        // let images = this.state.imgs;
        // for(let i=0; i<images.length; i++){
        //     console.log(images[i])
        // }
    }

    onClick2 = () => {  
        // let imgs = this.state.imgs
        let image1 = this.state.img1
        // for(let i=0; i<imgs.length; i++){
        //     console.log(imgs)
        // }
        console.log(image1)
    }


    // {this.state.imgs.map(img => {
    //     return <img id="1" key={img.id} className="img home__images home__images--active" src={img.img} alt="puppy"/>
    // })} 

   
    render(){
        

        return(
            <div className="home u-center-text">
                <h1 className="home__heading heading-primary">Welcome to Heavens Blessings</h1>
                <div className="home__container">
                    <div className="home__images--prev u-margin-top-2">
                        <img id="1" className="img home__images home__images--active" src={img1} alt="puppy"/>
                    </div>
                    <div className="home__carousel">
                       <img id="2" className="img home__images home__images--active" src={img2} alt="puppy"/>
                       {/* <img id="3" className="img home__images " src={img3} alt="puppy"/>
                       <img id="4" className="img home__images " src={img4} alt="puppy"/> */}
                        {/* Next and Prev buttons  */}
                        <img src={prev} className="arrows arrows--prev" onClick={() => this.onClick(-1)} alt="prev"/>
                        <img src={next} className="arrows arrows--next" onClick={() => this.onClick(1)} alt="next"/>
                    </div>
                    <div className="home__images--next u-margin-top-2">
                       <img id="5" className="img home__images home__images--active" src={img5} alt="puppy"/>
                    </div>
                </div>
                <div className="home__msg u-margin-TB-3 ">
                    <h3 className="home__msg-1">Thank you so much for visiting our site!</h3>
                    <h3 className="home__msg-1">We hope you find your perfect puppy with us!</h3>
                    <button onClick={() => this.onClick2()}>click me</button>
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