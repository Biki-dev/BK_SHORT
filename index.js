async function clickf() {
  let ink = document.getElementById('url').value.trim();
  
  if (!ink) {
    alert('Please enter a valid URL.');
    return;
  }
  
  if (!ink.startsWith("http://") && !ink.startsWith("https://")) {
    ink = "https://" + ink;
  }
  
  const apiKey = "ffNfpT72dRBQBAIH3gOiZRvvCuXSclw7NdxNhIW8LyqxQuwoSdwA6dIDXFNx";
  const apiURL = "https://api.tinyurl.com/create";
  
  const requestBody = {
    url: ink,
    domain: "tinyurl.com"
  };
  
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    
    const json = await response.json();
    
    if (!json.data || !json.data.tiny_url) {
      alert("Error: Unable to shorten URL.");
      return;
    }
    
    let relink = json.data.tiny_url;
    
    document.getElementById("ok").innerHTML = `
            <h1 id="oj">SHORT LINK</h1>
            <div class="mc card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <pre class="language-html"><code>${relink}</code></pre>
                    </li>
                </ul>
            </div>
        `;
  } catch (error) {
    alert("Failed to shorten URL. Please try again.");
    console.error(error);
  }
}