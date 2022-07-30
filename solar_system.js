var sun_img = "";
var show_sun = "";
var mercury_img = "";
var show_mercury = "";
var venus_img = "";
var show_venus = "";
var earth_img = "";
var show_earth = "";
var mars_img = "";
var show_mars = "";
var jupiter_img = "";
var show_jupiter = "";
var saturn_img = "";
var show_saturn = "";
var uranus_img = "";
var show_uranus = "";
var neptune_img = "";
var show_neptune = "";
var solar_system_video = "";
var show_solar_system = "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload() 
{
  sun_img = loadImage("/Planets_gifs/SUN.gif");
  mercury_img = loadImage("/Planets_gifs/MERCURY.gif");
  venus_img = loadImage("/Planets_gifs/VENUS.gif");
  earth_img = loadImage("/Planets_gifs/EARTH.gif");
  mars_img = loadImage("/Planets_gifs/MARS.gif");
  jupiter_img = loadImage("/Planets_gifs/JUPITER.gif");
  saturn_img = loadImage("/Planets_gifs/SATURN.gif");
  uranus_img = loadImage("/Planets_gifs/URANUS.gif");
  neptune_img = loadImage("/Planets_gifs/NEPTUNE.gif");
  solar_system_video = createVideo("/Planets_gifs/solar_system.mp4");
  solar_system_video.hide();
}

function setup() {
  canvas = createCanvas(1000, 500);
}


function start()
{
    document.getElementById("start").innerHTML = "System is listening please speak"; 
    recognition.start();
} 


recognition.onresult = function(event) {

 console.log(event); 
 var content = event.results[0][0].transcript;
 document.getElementById("start").innerHTML = "Speech Recognised as : " + content;
 show_sun = "";
 show_mercury = "";
 show_venus = "";
 show_earth = "";
 show_mars = "";
 show_jupiter = "";
 show_saturn = "";
 show_uranus = "";
 show_neptune = "";
 show_solar_system = "";
 if(content == "solar system" || content == "Solar System")
 {
     show_solar_system = "set";
    document.getElementById("start").innerHTML = "Details About The Solar System " ;
 }
 if(content == "sun" || content == "Sun")
 {
     show_sun = "set";
    document.getElementById("start").innerHTML = "Details About The Sun " ;
 }
 if(content == "mercury" || content == "Mercury")
 {
     show_mercury = "set";
    document.getElementById("start").innerHTML = "Details About The Mercury " ;
 }
 if(content == "venus" || content == "Venus")
 {
     show_venus = "set";
    document.getElementById("start").innerHTML = "Details About The Venus " ;
 }
 if(content == "earth" || content == "Earth")
 {
     show_earth = "set";
    document.getElementById("start").innerHTML = "Details About The Earth " ;
 }
 if(content == "mars" || content == "Mars" || content == "mass"  || content == "Marg")
 {
     show_mars = "set";
    document.getElementById("start").innerHTML = "Details About The Mars " ;
 }
 if(content == "jupiter" || content == "Jupiter")
 {
     show_jupiter = "set";
    document.getElementById("start").innerHTML = "Details About The Jupiter " ;
 }
 if(content == "saturn" || content == "Saturn")
 {
     show_saturn = "set";
    document.getElementById("start").innerHTML = "Details About The Saturn " ;
 }
 if(content == "uranus" || content == "Uranus")
 {
     show_uranus = "set";
    document.getElementById("start").innerHTML = "Details About The Uranus " ;
 }
 if(content == "neptune" || content == "Neptune")
 {
     show_neptune = "set";
    document.getElementById("start").innerHTML = "Details About The  Neptune " ;
 }
}


function draw()
{
  if(show_solar_system == "set")
  {
    background("black");
    solar_system_video.loop();
    solar_system_video.volume(1);
    solar_system_video.speed(1);
    image(solar_system_video , 0 , 0 , 1000 , 500);
  }
  if(show_sun == "set")
  {
    background("black");
    solar_system_video.stop();
    image(sun_img , 10 , 10 , 450 , 450);
    fill("white");
    textSize(18);
    sun_text = "Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet.The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it. The hottest part of the Sun is its core, where temperatures top 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun’s activity, from its powerful eruptions to the steady stream of charged particles it sends out, influences the nature of space throughout the solar system.";
    text(sun_text , 450 , 90 , 500 , 700);
  
  }
  if(show_mercury == "set")
  {
    background("black");
    solar_system_video.stop();
    image(mercury_img , 10 , 10 , 500 , 400);
    fill("white");
    textSize(18);
    mercury_text = "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset.Mercury is also the smallest planet in the solar system, measuring just 3,032 miles wide at its equator. That makes it only slightly larger than Earth's moon. Because Mercury is so small and so close to the sun.";
    text(mercury_text , 450 , 90 , 500 , 700);
  }
  if(show_venus == "set")
  {
    background("black");
    solar_system_video.stop();
    image(venus_img , 10 , 10 , 500 , 400);
    fill("white");
    textSize(18);
    venus_text = "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active.";
    text(venus_text , 450 , 90 , 500 , 700);
  }
  if(show_earth == "set")
  {
    background("black");
    solar_system_video.stop();
    image(earth_img , 10 , 10 , 500 , 400);
    fill("white");
    textSize(18);
    earth_text = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.Earth's atmosphere consists mostly of nitrogen and oxygen. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation. ";
    text(earth_text , 450 , 90 , 500 , 400);
  }
  if(show_mars == "set")
  {
    background("black");
    solar_system_video.stop();
    image(mars_img , 10 , 10 , 450 , 400);
    fill("white");
    textSize(18);
    mars_text = "​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars.";
    text(mars_text , 450 , 90 , 500 , 400);
  }
  if(show_jupiter == "set")
  {
    background("black");
    solar_system_video.stop();
    image(jupiter_img , 10 , 10 , 500 , 400);
    fill("white");
    textSize(18);
    jupiter_text = "​Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of the gods.Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It probably has a rocky core of heavier elements,[16] but, like the other giant planets in the Solar System, it lacks a well-defined solid surface.";
    text(jupiter_text , 450 , 90 , 500 , 400);
  }
  if(show_saturn == "set")
  {
    background("black");
    solar_system_video.stop();
    image(saturn_img , 10 , 10 , 500 , 400);
    fill("white");
    textSize(18);
    saturn_text = "​Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.[22][23] It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's.";
    text(saturn_text , 450 , 90 , 500 , 400);
  }
  if(show_uranus == "set")
  {
    background("black");
    solar_system_video.stop();
    image(uranus_img , 10 , 10 , 550 , 450);
    fill("white");
    textSize(18);
    uranus_text = "​Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as ice giants to distinguish them from the other giant planets.As with gas giants, ice giants also lack a well defined solid surface. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more ices such as water, ammonia, and methane, along with traces of other hydrocarbons.";
    text(uranus_text , 450 , 90 , 500 , 400);
  }
  if(show_neptune == "set")
  {
    background("black");
    solar_system_video.stop();
    image(neptune_img , 10 , 10 , 500 , 450);
    fill("white");
    textSize(18);
    neptune_text = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets (the other one being its near-twin Uranus). Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.";
    text(neptune_text , 450 , 90 , 500 , 400);
  }
}
