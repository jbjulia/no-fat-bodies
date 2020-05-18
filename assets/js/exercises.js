a = parent.document.URL.substring(parent.document.URL.indexOf('index='), parent.document.URL.length);

if (a === 'index=upper') {
    document.getElementById("upper-body").className = "nav-link active";
} else if (a === 'index=lower') {
    document.getElementById("lower-body").className = "nav-link active";
} else if (a === 'index=core') {
    document.getElementById("core").className = "nav-link active";
} else if (a === 'index=cardio') {
    document.getElementById("cardio").className = "nav-link active";
} else if (a === 'index=stretches') {
    document.getElementById("stretches").className = "nav-link active";
} else if (a === 'index=nutrition') {
    document.getElementById("nutrition").className = "nav-link active";
} else {
    document.getElementById("upper-body").className = "nav-link active";
}
