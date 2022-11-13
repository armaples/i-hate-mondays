// Elements Created
var bodyEl = $("body");
var headerEl = $("<header>")
var mainEl = $("<main>");
var footerEl = $("<footer>");
var dateSection = $("<section>");
var scheduleSection = $("<section>");
var title = $("<h1>");
var day = $("<h2>");
var date = $("<h3>");
var footerText = $("<h4>");
var headingFont = "italic bold max(5vw, 35px) collector-comic, Comic Sans MS, cursive";
var bodyFont = "max(2vw, 15px) grenadine-MVB, Baskerville, serif";
var orange = "#F49D36";
var lightOrange = "#F9C78B";
var blue = "#65DEF1";
var lightBlue = "#C7E3EA";
var darkBlue = "#15C5E0";
var garfield = $("<img>").attr("src", "./assets/images/garfield.png").css("max-width", "30vw").css("min-width", "25vw").css("padding", "10px");
var eventBox;
var timeBlock;
var present = dayjs().hour();
var monthDay = dayjs().format("MM" + "/" + "DD");
console.log("Current Hour: " + present);

// Append
headerEl.appendTo(bodyEl);
garfield.appendTo(headerEl);
title.appendTo(headerEl);

mainEl.appendTo(bodyEl);
dateSection.appendTo(mainEl);
day.appendTo(dateSection);
date.appendTo(dateSection);
scheduleSection.appendTo(mainEl);

footerEl.appendTo(bodyEl);
footerText.appendTo(footerEl);

// Content
title.text("Workday Scheduler");
day.text(dayjs().format("dddd"))
date.text(dayjs().format("MMM" + ". " + "DD" + ", " + "YYYY"));
footerText.text("Copyright © 2022 Alyssa Maples")

// Styling
bodyEl.css("display", "flex").css("flex-flow", "column wrap").css("justify-content", "center").css("align-items", "center").css("text-align", "center");
headerEl.css("width", "100%").css("background-color", blue).css("display", "flex").css("flex-flow", "row wrap").css("justify-content", "center").css("align-items", "center");
title.css("padding", "10px").css("font", headingFont).css("color", orange);
day.css("font", headingFont).css("font-size", "max(4vw, 25px");
date.css("font", headingFont).css("font-size", "max(3vw, 15px");
mainEl.css("width", "100%").css("height", "100%");
dateSection.css("padding", "10px").css("background-color", orange).css("color", blue);
scheduleSection.css("width", "100%").css("font", bodyFont).css("display", "flex").css("flex-flow", "column wrap").css("justify-content", "space-between").css("align-items", "stretch").css("overflow", "hidden").css("margin-top", "10px").css("margin-bottom", "10px").css("gap", "5px");
footerEl.css("width", "100%").css("background-color", blue);
footerText.css("color", orange).css("font", headingFont).css("font-size", "max(1vw, 10px").css("padding", "10px");

// Array for Workday Hours
var hours = [];

// Starting Function
$(document).ready(function() {
    // Creates array items for each workday hour
    for (let i = 8; i < 19; i++) {
        hours.push(i);
    };

    // Creates containers + boxes for each item in array
    hours.forEach((element) => {
        // creates main container for hour, event, and save containers
        var timeBlock = $("<div>").appendTo(scheduleSection).css("width", "100vw").css("height", "100%").css("display", "flex").css("flex-flow", "row no-wrap").css("justify-content", "center").css("align-items", "center").css("align-content", "center");

        // creates container for hour
        var hourBox = $("<section>").appendTo(timeBlock).text(dayjs().hour(element).format("h" + "a")).css("flex-grow", "1").css("width", "25vw").css("padding", "5px").css("height", "100%").css("color", orange).css("flex-grow", "2");

        // creates container for events
        var eventBox = $("<section>").appendTo(timeBlock).css("width", "50vw").css("flex-grow", "2").css("padding", "5px").css("height", "100%").css("color", "white").attr("contenteditable", "true").css("outline", "0px").css("overflow-y", "hidden").css("border", "1px solid" + orange).attr("id", element).css("flex-grow", "2");
        // tests id for eventBox
        console.log(eventBox.attr("id"));

        // creates container for save button
        var saveBox = $("<section>").appendTo(timeBlock).css("width", "25vw").css("padding", "5px").css("height", "100%").css("color", orange).css("flex-grow", "2");

        // creates save buttons
        var saveButton = $("<button>").appendTo(saveBox).text("💾").css("background", orange).css("border-radius", "5px").css("border", "0px").css("padding", "10px");

        // hides save button automatically
        saveButton.hide();

        eventBox.on("keydown paste", function(event) {
            // save button shows up as soon as user types
            saveButton.show();
            // makes sure character count is 30 or under
            if($(this).text().length === 30 && event.keyCode != 8) {
                event.preventDefault();
            };
        });

        // Determines background color of event depending on whether hour is in past, present, or future
        var thisTime = parseInt(element);
        if (thisTime < present) {
            eventBox.css("background-color", lightBlue);
            hourBox.css("color", lightOrange);
        } else if (thisTime === present) {
            eventBox.css("background-color", orange).css("color", blue).css("border-color", blue);
            hourBox.css("color", blue);
        } else {
            eventBox.css("background-color", lightOrange);
        }
        
        // Save Button Event Listener
        saveButton.click(function() {
            // grabs element and the text content
            var content = $("#"+element);
            var text = content.text();
            // stores text content to local storage by month, day, and hour
            localStorage.setItem("toDo " + monthDay + " @ " + element, text);
            // tests that text for hour shows up & is correct
            console.log("text for hour " + element + ": " + text);
            // hides save button
            saveButton.hide();
            });
    
        // Gets previous values in local storage and prints in eventBox
        eventBox.text(localStorage.getItem("toDo " + monthDay + " @ " + element));
        // Tests that each hour is logged
        console.log("Hour " + element + " added.");
    });
    // Tests that all hours are accounted for in array
    console.log("Hours in schedule: " + hours);
});


// Ensures footer stays at bottom of page across devices
if($(window).height() > $("body").height()){
    $("footer").css({"position" : "fixed", "bottom" : "0"});
 } else {
    $("footer").css("position", "relative");
 }
