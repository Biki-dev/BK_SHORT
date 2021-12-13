function clickf() {

  const xhr = new XMLHttpRequest();

  let ink = document.getElementById('url').value

  xhr.open('GET', `https://api.shrtco.de/v2/shorten?url=`+ink, true);

  // What to do when response is ready
  xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    let relink = json.result.full_short_link
    // console.log(relink)
    /*< label for = "inputPassword5" class = "form-label" > Password < /label> < input type = "password" id = "inputPassword5" class = "form-control" aria-describedby = "passwordHelpBlock" >
    <div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </div>*/

    let news = `<h1 id="oj">SHORT_LINK</h1>
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item" id="foo"><pre class="language-html"><code>${relink}</code></pre></li>
    </ul>
    </div>
    `


    let latest = document.getElementById('ok')
    latest.innerHTML = news;


  }
  xhr.send()
}