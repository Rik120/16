axios.get("https://dummyjson.com/users")
    .then(res => reload(res.data.users))



let img_people = document.querySelector(".img_people")
        

function reload(arr) {
    for (let item of arr) {
        let img_peoples = document.createElement("div")
        let img_people_img = document.createElement("div")
        let img_people_text = document.createElement("div")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h3")
        
        img_peoples.classList.add("img_peoples")
        img_people_img.classList.add("img_people_img")
        img_people_text.classList.add("img_people_text")
        img.src = item.image
        h2.innerHTML = item.firstName + " " + item.lastName
        h3.innerHTML = "Age:" + item.age
        h4.innerHTML = item.company.title
        
        img_people_img.append(img)
        img_people_text.append(h2, h4, h3)
        img_peoples.append(img_people_img, img_people_text)
        img_people.append(img_peoples)

    }
}










































