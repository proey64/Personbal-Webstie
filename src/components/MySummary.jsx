import React from "react";
import { Div, B } from "glamorous";

const MySummary = ({ titleSize, fontSize, textAlign }) => (
  <Div
    fontSize={fontSize}
    flex="0 0 70%"
    maxWidth={500}
    textAlign={textAlign}
    lineHeight={1.5}
  >
    <B fontSize={titleSize} lineHeight={1.2}>
      Sam Pennington
    </B>
    <br />
    I've made this site to show what I am working on, show a little bit about
    myself, and to play around with new technologies.
    <br /> I am a junior software developer based in London, primarily I have
    worked on the front end of web applications using React. I have had some
    exposure to Node.js, and this is somehting I am looking to expand on.
    <br />I am currently looking for a Junior Development role based in London.
  </Div>
);

export default MySummary;
