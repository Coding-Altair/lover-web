document.getElementById('yes-btn').onclick = function() {
    let n = 1;
    let output = '';
    while (n != 30){
        output += `I love you baby, ikaw at ikaw lang wala nang iba pa. (${n})&emsp;`;
        if (n % 3 === 0) output += '<br>';
        if (n === 29) output += '<br><br>';
        n += 1;
    }
    output += 'Thank you for making my life happier. You bring joy and meaning to my life and became an irreplaceable person in my life. I love everything about you baby. I love you for being you. I love you as my bestfriend, my girlfriend and my wife. I promise will not leave you as long as you take care of me.  <span>I LOVE YOU SO MUCH BABY!!<span>'
    document.getElementById("output").innerHTML = output;

    document.getElementById('btn').style.display = 'none';
    document.getElementById('ready').style.display = 'none';

}

document.getElementById("no-btn").onmouseover = function() {
    // Move the button to a random position within the container
    const container = document.getElementById("btn");
    const btn = document.getElementById("no-btn");
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Calculate max left/top so button stays inside container
    const maxLeft = container.offsetWidth - btn.offsetWidth;
    const maxTop = container.offsetHeight - btn.offsetHeight;

    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    btn.style.left = `${left}px`;
    btn.style.top = `${top}px`;
};
