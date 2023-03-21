import { useState } from "react"

export default function ProjectPanel(){

    const[image, changeImage] = useState("/images/purpz.png");
    const[classes,changeClasses] = useState(["the-image z-10 opacity-0"]);

    function testHover(n){
        if(n === 1){
            changeClasses(["the-image z-10"]);
            changeImage("/images/sketch.jpeg");
        }
        if(n === 2){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 3){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 4){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 5){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 6){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 7){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 8){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 9){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
        }
        if(n === 2){
            changeClasses(["the-image z-10"]);
            changeImage("/images/hundreds.jpeg");
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
                        <h1 className="project-name">Brentwood Rotary</h1>
                        <p className="project-text">Website</p>
                    </li>
                </ul>
                <ul onMouseOver={() => testHover(2)} onMouseLeave={() => testMouseOut()}>
                    <li>
                        <h1 className="project-name">Close to Ten</h1>
                        <p className="project-text">Game</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 className="project-name">My Calulator</h1>
                        <p className="project-text">React App</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 className="project-name">Anais</h1>
                        <p className="project-text">Personal Portfolio</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 className="project-name">Novelty</h1>
                        <p className="project-text">React App</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 className="project-name">Github</h1>
                        <p className="project-text">Open Source</p>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

