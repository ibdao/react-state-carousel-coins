import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon"

it("renders without crashing (smoke test)", function (){
    console.log("running card smoke test");
    render(
        <Card 
        caption = { TEST_IMAGES[0].caption }
        src = { TEST_IMAGES[0].src }
        currNum = { 1 } 
        totalNum = { 3 }
        />

    );
});

it("matches snapshot", function (){
    console.log("running card snapshot test");
    const { container } = render(
        <Card 
        caption = { TEST_IMAGES[1].caption }
        src = { TEST_IMAGES[1].src }
        currNum = { 2 } 
        totalNum = { 3 }
        />
    );
    expect(container).toMatchSnapshot();
})