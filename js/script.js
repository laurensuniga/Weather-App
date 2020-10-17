// Constants and Variables
const { openWeatherAPIKey } = CONFIG;
const API_KEY = openWeatherAPIKey;
const BASE_URL = 'api.openweathermap.org/data/2.5/weather?';

let weatherData, userInput;


// Cached Elements References

const $title = $('#title');
const $temp = $('#temp');
const $wind = $('#wind');
const $desc = $('#desc');
const $form = $('form');
const $input = $('input[type="text"]');


// Event Listeners
$form.on('submit', handleWeatherData);




// Functions
function handleWeatherData(event) {
    event.preventDefault();

    userInput = $input.val();

    if(!userInput) return;

    $.ajax(
        {url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=e6028c592839827c68f3d0438accbf6f'
    }).then(function(data) {
        console.log(data);

        weatherData = data;
        render();

    }, function(error) {
        console.log('Error', error);
    });
}


function render() {
    $title.text('Title: ' + weatherData.name);
    $temp.text('Temperature: ' + weatherData.main.temp);
    $wind.text('Wind: ' + weatherData.wind.speed);
}
