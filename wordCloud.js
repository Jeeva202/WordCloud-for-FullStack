/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Add series
// https://www.amcharts.com/docs/v5/charts/word-cloud/
var series = root.container.children.push(am5wc.WordCloud.new(root, {
  categoryField: "tag",
  valueField: "weight",
  maxFontSize: am5.percent(15)
}));

// Configure labels
series.labels.template.setAll({
  fontFamily: "Courier New"
});


setInterval(function() {  
  am5.array.each(series.dataItems, function(dataItem) {
    var value = Math.random() * 65;
    value = value - Math.random() * value;
    dataItem.set("value", value);
    dataItem.set("valueWorking", value);
  })
}, 5000)


// Data from:
// https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
series.data.setAll([
  { tag: "Angular", weight: 54.96 },
  { tag: "HTML/CSS", weight: 50.07 },
  { tag: "React", weight: 48.24 },
  { tag: "Node.js", weight: 47.08 },
  { tag: "JavaScript", weight: 35.35 },
  { tag: "SQL", weight: 33.91 },
  { tag: "TypeScript", weight: 30.19 },
  { tag: "Python", weight: 27.86 },
  { tag: "Express.js", weight: 27.13 },
  { tag: "Git", weight: 24.31 },
  { tag: "Figma", weight: 21.98 },
  { tag: "UI/UX", weight: 21.01 },
  { tag: "Database", weight: 10.75 },
  { tag: "API", weight: 9.55 },
/*   { tag: "Kotlin", weight: 8.32 },
  { tag: "Rust", weight: 7.03 },
  { tag: "Ruby", weight: 6.75 },
  { tag: "Dart", weight: 6.02 },
  { tag: "Assembly", weight: 5.61 },
  { tag: "Swift", weight: 5.1 },
  { tag: "R", weight: 5.07 },
  { tag: "VBA", weight: 4.66 },
  { tag: "Matlab", weight: 4.66 },
  { tag: "Groovy", weight: 3.01 },
  { tag: "Objective-C", weight: 2.8 },
  { tag: "Scala", weight: 2.6 },
  { tag: "Perl", weight: 2.46 },
  { tag: "Haskell", weight: 2.12 },
  { tag: "Delphi", weight: 2.1 },
  { tag: "Clojure", weight: 1.88 },
  { tag: "Elixir", weight: 1.74 },
  { tag: "LISP", weight: 1.33 },
  { tag: "Julia", weight: 1.29 },
  { tag: "F#", weight: 0.97 },
  { tag: "Erlang", weight: 0.79 },
  { tag: "APL", weight: 0.65 },
  { tag: "Crystal", weight: 0.56 },
  { tag: "COBOL", weight: 0.53 }, */
]);
