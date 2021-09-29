console.log("hey");
var typewrite = document.getElementById('typeWriterContainer');

var typewriter = new Typewriter(typewrite, {
    loop: true
});

typewriter.typeString('<Strong>Hello my name is Anthony</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<Strong>I am a passionate Front end devoper</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<Strong>Specializing in Javascript and bootstrap</strong>')
    .pauseFor(2500)
    .start();
