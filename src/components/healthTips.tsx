import React from "react";
import water from "../images/water.jpg";
import logo from "../logo.svg";
import { Carousel } from "react-bootstrap";


interface Slide {
    title: string;
    description: string;
    image: string;
}


const slideData: Slide[] = [
{
    title: "Drink some water",
    description: "Don't have a drink of water nearby? Go get some to make sure you remain hydrated throughout the work day",
    image: logo
},
{
    title: "Check your desk setup",
    description: "Have you made sure that your desk is set up correctly? Make sure your desk is at an appropriate height with your chair",
    image: logo
},
];


export const HealthTips = (props: any) => {
    return (
        <div>
            <Carousel>
                {slideData.map((data: Slide) => {
                    return (
                    <Carousel.Item>
                        <img src={data.image}/>
                        <Carousel.Caption>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                    
                })}
            </Carousel>
        </div>
    )
}