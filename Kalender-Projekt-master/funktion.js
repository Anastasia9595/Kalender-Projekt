// Hier sagen wir dem Browser nur, dass erm nachdem die Seite vollständig geladen 
// wurde, die Funktion main(ohne Argumente) aufrufen soll.
window.onload = function() {
    main();
};

function main() {
    // Grund-Daten
    var strDebug = "";
    var datToday = new Date();
    strDebug += "datToday: " + datToday.toDateString() + "<br/>"; // Ausgabe
    var datTodayGerman = getDateGerman(datToday);
    strDebug += "datTodayGerman: " + datTodayGerman + "<br/>"; // Ausgabe

    // Wochentag
    var weekday = datToday.getDay(); // ergibt den Tag der Woche als Zahl (von 0 = Sonntag bis 6 = Samstag)
    strDebug += "weekday: " + weekday + "<br/>"; // Ausgabe
    var weekdayGerman = getWeekdayGerman(weekday);
    strDebug += "weekdayGerman: " + weekdayGerman + "<br/>";

    // Monat
    var month = datToday.getMonth();
    strDebug += "month:" + month + "<br/>";
    var monthGerman = getMonthGerman(month);
    strDebug += "monthGerman:" + monthGerman + "<br/>";

    //Kalenderwoche
    var calendarweekDay = datToday.getDate();
    var calendarweek = getCalendarweek(calendarweekDay);
    strDebug += "calendarweek:" + calendarweek + "<br/>";

    //Tagesanzahl des Monats
    var lastDayThisMonth = new Date(year, month + 1, 0);
    var monthDays = lastDayThisMonth.getDate();
    strDebug += "monthDays:" + monthDays + "<br/>";

    // Erster des Monats
    var firstDayThisMonth = new Date(year, month, 1);
    var firstDayOfCalendar = firstDayThisMonth;
    var x = 0;
    while (firstDayOfCalendar.getDay() != 1) {
        firstDayOfCalendar = new Date(year, month, x);
        x--;
    }
    var lastDayOfCalendar = lastDayThisMonth;
    x = 1;
    while (lastDayOfCalendar.getDay() != 0) {
        lastDayOfCalendar = new Date(year, month + 1, x);
        x++;
    }


    // Wir füllen die Informationen in den HTML-Code
    document.getElementById("field1").innerHTML = datTodayGerman;
    document.getElementById("field3").innerHTML = datTodayGerman;
    document.getElementById("field2").innerHTML = weekdayGerman;
    document.getElementById("field4").innerHTML = weekdayGerman;
    document.getElementById("field5").innerHTML = monthGerman;
    document.getElementById("field6").innerHTML = year;
    document.getElementById("field7").innerHTML = datTodayGerman;
    document.getElementById("field8").innerHTML = datTodayGerman;
    document.getElementById("field9").innerHTML = calendarweek;
    document.getElementById("field10").innerHTML = monthDays;

    var html = '<table>';
    html += '<thead>';
    html += '<tr>';
    html += '        <th colspan="8">' + monthGerman + year + '</th>';
    html += '    </tr>';
    html += '    <tr>';
    html += '        <th class="kw">KW</th>';
    html += '        <th class="mo">Mo</th>';
    html += '        <th class="di">Di</th>';
    html += '        <th class="mi">Mi</th>';
    html += '        <th class="do">Do</th>';
    html += '        <th class="fr">Fr</th>';
    html += '        <th class="sa">Sa</th>';
    html += '        <th class="so">So</th>';
    html += '    </tr>';
    html += '</thead>';
    html += '<tb>';

    for (var d = firstDayOfCalendar; d <= lastDayOfCalendar; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)) {
        html += getHtmlForOneDay(d);
    }
    // html += '    <tr>';
    // html += '        <td class="kw">5</td>';
    // html += '        <td class="mo heute">1</td>';
    // html += '        <td class="di">2</td>';
    // html += '        <td class="mi">3</td>';
    // html += '        <td class="do">4</td>';
    // html += '        <td class="fr">5</td>';
    // html += '        <td class="sa">6</td>';
    // html += '        <td class="so">7</td>';
    // html += '    </tr>';

    html += '</table>';

    // Kalenderblatt-Start
    document.getElementById("kalenderblatt").innerHTML = html;

    // Ausgabe in das elDebug
    var elDebug = document.getElementById("debug");
    if (elDebug != null) {
        elDebug.innerHTML = strDebug;
    } else {
        console.log("Debug-Element nicht gefunden.");
    }
}

function getHtmlForOneDay(date) {
    var html = '';
    return html;
}

function getDateGerman(date) {
    day = date.getDate();
    month = date.getMonth();
    month = month + 1; // Warum auch immer ... Javascript speichert Monate 0-basiert, also 0 = Januar, 11 = Dezember, daher hier Korrektur + 1
    year = date.getFullYear();
    // Man beachte: Man könnte hier nachfolgend nach dem if {} benutzen, aber da es sich nur um EINE nachfolgende Anweisung handelt, geht es auch so
    if (String(day).length == 1) day = "0" + day;
    // Nachfolgend alternativ MIT Klammern
    if (String(month).length == 1) {
        month = "0" + month;
    }
    dateGerman = day + "." + month + "." + year;
    return dateGerman;
}

function getWeekdayGerman(weekdayIndex) {
    var weekdaysGerman = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    return weekdaysGerman[weekdayIndex];
}

function getMonthGerman(monthIndex) {
    if (monthIndex == 0) {
        return "Januar";
    } else if (monthIndex == 1) {
        return "Februar";
    } else if (monthIndex == 2) {
        return "März";
    } else if (monthIndex == 3) {
        return "April";
    } else if (monthIndex == 4) {
        return "Mai";
    } else if (monthIndex == 5) {
        return "Juni";
    } else if (monthIndex == 6) {
        return "Juli";
    } else if (monthIndex == 7) {
        return "August";
    } else if (monthIndex == 8) {
        return "September";
    } else if (monthIndex == 9) {
        return "Oktober";
    } else if (monthIndex == 10) {
        return "November";
    } else if (monthIndex == 11) {
        return "Dezember";
    }
}

function getCalendarweek(calendarweekDayIndex) {
    if (calendarweekDayIndex <= 7) {
        return "erste";
    } else if (calendarweekDayIndex <= 14) {
        return "zweite";
    } else if (calendarweekDayIndex <= 21) {
        return "dritte";
    } else if (calendarweekDayIndex <= 28) {
        return "vierte";
    } else return "fünfte";
}