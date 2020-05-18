function warning() {
    var choice = confirm('Are you sure you want to leave this page?');

    if (choice == false) {
        return;
    } else {
        window.location = 'https://github.com/jbjulia/no-fat-bodies/tree/master/resources';
    }
}