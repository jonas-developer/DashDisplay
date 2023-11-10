const baseUrl = 'http://localhost:8383'

const hazard = document.getElementById("hazard")


setInterval(getInfo, 1000); 

async function getInfo(){
    const res = await fetch(baseUrl + "/dashboardinfo", 
    {
        method: 'GET'
    })
    const dasboardvals = await res.json()
    console.log(dasboardvals)
    if (dasboardvals.hazard == true) {
        hazard.hidden(false)
    } else {
        hazard.hidden(true)
    }
};



getInfo();
