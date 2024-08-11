var famousplaces, comments, place_Names, place_detail;

// Describe this function...
function next() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  famousplaces.push(famousplaces[0]);
  place_Names.push(place_Names[0]);
  place_detail.push(place_detail[0]);
  let element_carouselImage2 = document.getElementById('carouselImage');
  element_carouselImage2.setAttribute("src", famousplaces.shift());
  let element_names = document.getElementById('names');
  element_names.innerText = place_Names.shift();
  let element_paragraph = document.getElementById('paragraph');
  element_paragraph.innerText = place_detail.shift();
}

// Describe this function...
function previous() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  famousplaces.unshift(famousplaces.slice(-1)[0]);
  place_Names.unshift(place_Names.slice(-1)[0]);
  place_detail.unshift(place_detail.slice(-1)[0]);
  let element_names2 = document.getElementById('names');
  element_names2.innerText = place_Names.pop();
  let element_carouselImage3 = document.getElementById('carouselImage');
  element_carouselImage3.setAttribute("src", famousplaces.pop());
  let element_paragraph2 = document.getElementById('paragraph');
  element_paragraph2.innerText = place_detail.pop();
}

// Describe this function...
function display_comment() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_cmt = document.getElementById('cmt');
  let new_ul = document.createElement('ul');
  new_ul.innerText = comments.shift();

  element_cmt.appendChild(new_ul);
  let new_span = document.createElement('span');
  new_span.innerText = comments.pop();

  element_cmt.appendChild(new_span);
  comments = [];
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


let element_carouselImage = document.getElementById('carouselImage');
element_carouselImage.setAttribute("src", 'https://ticketshop.barcelona/images/sagrada_familia_tickets.jpg');

famousplaces = ['https://ticketshop.barcelona/images/barcelona_sagrada_familia.jpg', 'https://ticketshop.barcelona/images/park_guell.jpg', 'https://ticketshop.barcelona/images/tickets_camp_nou.jpg', 'https://ticketshop.barcelona/images/casa_batllo_barcelona.jpg', 'https://ticketshop.barcelona/images/barrigotic.jpg', 'https://ticketshop.barcelona/images/montjuic_barcelona.jpg', 'https://ticketshop.barcelona/images/palaudelamusicacatalana.jpg', 'https://ticketshop.barcelona/images/tibidabobarcelona.jpg'];
place_Names = ['Sagrada Familia', 'Visit Park Güell', 'Camp Nou Stadium of FC Barcelona', 'Casa Batlló, must see of Gaudì', 'Sights of the Gothic quarter', 'Parc de Montjuïc & Magic Fountain', 'Palau de la Música Catalana', 'Tibidabo Mountain'];
place_detail = ['The absolute number 1 attraction in Barcelona Spain is the Sagrada Familia; the holy cathedral designed by Antoni Gaudí. The unfinished church will probably be completed in 2026 and has to be part of your city break. You can even ascend the towers for an amazing view. Important: Be sure that you always buy your tickets for the Sagrada Familia at least several days in advance!', 'Park Guell is the famous park with mosaic benches and the salamander. This Park Guell is a sightseeing must-see when visiting Barcelona. However, only a limited number of visitors are admitted every hour. Warning: The park used to be free, but now you have to purchase your tickets in advance. Buy this well in advance during the high season, because tickets sell out quickly', 'Visit the FC Barcelona Camp Nou stadium. Book this Camp Nou Experience tour and see the dressing rooms, trophies and all the parts of the stadium, or attend one of Barca\'s matches. The Camp Nou stadium is a must see for every football lover. Until 2026, Camp Nou will undergo a massive renovation and will play matches in the Olympic Stadium on Montjuïc. ', 'Casa Batlló is a building with apartments designed by Antoni Gaudí, completely in the style of Catalan Modernism. The shapes of the house are based on the legend of George and the dragon. You will be amazed at the many beautiful details, colors and mosaics. In this article an overview of all buildings of Gaudi in Barcelona city, but for me personally Casa Batlló is the most beautiful house of Antoni Gaudí. ', 'The Barri Gòtic is the Gothic Quarter in Barcelona\'s historical city centre, with the Barcelona cathedral and famous squares such as Plaça Reial and Plaça Sant Jaume. Wander the small, picturesque streets in the historical city centre near the Rambas. A fun activity in the Gothic Quarter is this Tapas Walking Tour with local tapas and wines, combined with fascinating stories.', 'The Montjuïc is the most famous hill of the city with dozens of sights, including Palau Nacional, Foundation Joan Miró, Poble Espanyol, the Olympic Stadium, the Montjuïc cable car, and the magical fountain \'Font Magica\' with its fountain show of water and light. Read more about all tourist attractions on the Montjuïc hill.', 'The Palau de la Música in the style of Catalan Modernism is one of the most beautiful concert buildings in the world. Visit a concert or book this tour through this amazing Modernist palace of music. It\'s a masterpiece of modernist architecture and a UNESCO World Heritage site. The concert hall, is breathtaking with its stained glass windows and colorful columns.', 'Tibidabo is the 512 meter high mountain on the outskirts of Barcelona. You can reach the top with a cogwheel train, after which you can do three things on top of the mountain. You can visit the amusement park \'Parque de Atracciones del Tibidabo\', visit the church \'Iglesia del Sagrat Cor\', and the main reason is the phenomenal view from Tibidabo.'];
comments = [];


document.getElementById('nextButton').addEventListener('click', (event) => {
  next();

});

document.getElementById('prevButton').addEventListener('click', (event) => {
  previous();

});

document.getElementById('submitcomt').addEventListener('click', (event) => {
  comments.push(document.getElementById('textbox').value);
  comments.push(document.getElementById('comenntbox').value);
  display_comment();

});