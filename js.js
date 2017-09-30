//this api wont work in chrome, on real app i would use a proxy made with php to make it working in real world - it work in opera thouh
// Random Quote Generator
// Random Quote Generator
var url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=';

var random = Math.floor(Math.random() * 10) + 1;
var button = document.getElementById("qu");

function quote() {
    var xhttp = new XMLHttpRequest();
    var obi = {};

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //change response text into object
            var obi = JSON.parse(this.response);
            //sets values
            document.getElementById("quote-text").innerHTML = obi[random]["content"];
            document.getElementById("author-text").innerHTML = obi[random]["title"];
            document.getElementById("link").href = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(obi[random]["content"] + " - " + obi[random]["title"]);

        } else {
            document.getElementById("quote-text").innerHTML = "somthing went wrong, try other browser or check internet connection..."
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

button.addEventListener("click", function () {
    random = Math.floor(Math.random() * 10) + 1;
    quote();
});



window.onload(button.click());
