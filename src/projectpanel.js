import { useState } from "react"

export default function ProjectPanel(){

    const[image, changeImage] = useState("/images/purpz.png");
    const[classes,changeClasses] = useState(["the-image z-10 opacity-0"]);

    function testHover(n){
        if(n === 1){
            changeClasses(["the-image z-10"]);
            changeImage("/images/Brentwood.png");
        }
        if(n === 2){
            changeClasses(["the-image z-10"]);
            changeImage("/images/CloseToTen.png");
        }
        if(n === 3){
            changeClasses(["the-image z-10"]);
            changeImage("/images/calc2.png"); //Must change to Calc Image
        }
        if(n === 4){
            changeClasses(["the-image z-10"]);
            changeImage("/images/anais.png");
        }
        if(n === 5){
            changeClasses(["the-image z-10"]);
            changeImage("/images/thalyta.png");
        }
        if(n === 6){
            changeClasses(["the-image z-10"]);
            changeImage("/images/Eric.png");
        }
        if(n === 9){
            changeClasses(["the-image z-10"]);
            changeImage("/images/git3.png");
        }
        if(n === 10){
            changeClasses(["the-image z-10"]);
            changeImage("/images/upwork2.png");
        }
    }

    function testMouseOut(){
        changeClasses(["the-image z-10 transition opacity-0 duration-50"]);
    }

    return(
        <div className="projet-panel">
            <div className="image-panel">
            <img className={classes} src={image} alt="Mountain"/>
            {/*<p>This is a short example of a project that im working on just so i can have some display text</p>*/}
            </div>
            <ul className="scrolldown-panel no-scrollbar">
                <ul onMouseOver={() => testHover(1)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://rotaryclubbrentwood.org/">Brentwood Rotary</a></h1>
                        <p className="project-text">Website</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(2)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://quanahb.github.io/MenuTest/index.html">Close to Ten</a></h1>
                        <p className="project-text">Game</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(3)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://roaring-seahorse-774bc7.netlify.app/">My Calulator</a></h1>
                        <p className="project-text">React App</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(4)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://anaisparmakian.com/">Anais</a></h1>
                        <p className="project-text">Personal Portfolio</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(5)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://thalytaswansonphotography.com/">Thalyta</a></h1>
                        <p className="project-text">Photography Portfolio</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(6)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://www.ericmackey.com/">Eric Mackey</a></h1>
                        <p className="project-text">Art Portfolio</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(9)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://github.com/QuanahB">Github</a></h1>
                        <p className="project-text">Open Source</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(10)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name"><a href="https://www.upwork.com/freelancers/~015e31f8128fd84074">Upwork</a></h1>
                        <p className="project-text">Freelance Portfolio</p>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

