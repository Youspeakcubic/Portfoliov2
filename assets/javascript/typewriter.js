
var typewrite = document.getElementById('typeWriterContainer');
var typewriter = new Typewriter(typewrite, {
    loop: true
});

typewriter.typeString('<Strong>	&#5760 Hello my name is Anthony</strong>')
    .pauseFor(2500)
    .deleteChars(24)
    .typeString('<Strong> &#5760 I am a passionate Front end developer</strong>')
    .pauseFor(2500)
    .deleteChars(37)
    .typeString('<Strong>Specializing in Javascript and bootstrap</strong>')
    .pauseFor(2500)
    .start();
