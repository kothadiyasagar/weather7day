function submit() {
    let city = document.querySelector('#find').value;
      let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=69d21986854f740012c0fffcc1c6ea46`
    async function sagar() {
        try {
            let res = await fetch(url)

            let data = await res.json()
            console.log("data:", data)
            
                   console.log(data.list.length)
                  var  weather=data.list
                 display(weather)
        }
        catch (err) {
            console.log("err", err)
        }
    }

     sagar()
  
 }
 var arr1=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
 var arr2=["https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_clear.png",
         "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_partial_cloud.png",
          "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_rain.png",
         "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_partial_cloud.png",
        "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_partial_cloud.png",
        "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/night_full_moon_rain.png",
        "https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_rain_thunder.png"]
   function display(weather){
   
    document.querySelector("#data").innerHTML=null
    weather.map(function(elem,index){ 
        var div=document.createElement("td")

        if(index<7){
     var d=document.createElement("h3")
     d.innerText=arr1[index]      
    var i=document.createElement("h6")
    i.innerText=((weather[index].main.temp_min-273.15).toFixed()+"°")
    var img=document.createElement("img");
    img.setAttribute("id","img")
    img.src=arr2[index]
     
    var v=document.createElement("p")
    v.innerText=((weather[index].main.temp_max-273.15).toFixed()+"°")
    div.append(d,img,i,v)
    document.querySelector("#data").append(div)
    }
})
 
      
   }