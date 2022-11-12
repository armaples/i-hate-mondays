// Add Elements
var bodyEl = $("body");
var headerEl = $("<header>")
var mainEl = $("<main>");
var footerEl = $("<footer>");
var dateSection = $("<section>");
var scheduleSection = $("<section>");
var title = $("<h1>");
var day = $("<h2>")
var date = $("<h3>");
var timeBlock = $("<p>");
var headingFont = "italic bold 40px collector-comic, Comic Sans MS, cursive";
var bodyFont = "grenadine-MVB, Baskerville, serif";

// Append
headerEl.appendTo(bodyEl);
title.appendTo(headerEl);

mainEl.appendTo(bodyEl);
dateSection.appendTo(mainEl);
day.appendTo(dateSection);
date.appendTo(dateSection);
scheduleSection.appendTo(mainEl);
timeBlock.appendTo(scheduleSection);

footerEl.appendTo(bodyEl);

// Content
title.text("Workday Scheduler");
day.text(dayjs().format("dddd"))
date.text(dayjs().format("MMM" + ". " + "DD" + ", " + "YYYY"));

// Styling
title.css("font", headingFont);
day.css("font", headingFont).css("font-size", "30px");
date.css("font", headingFont).css("font-size", "20px");

// Arrays


// Functions
function createTimeBlocks() {

}

// Event Listeners