let button_ids=[
    "option_1",
    "option_2",
    "option_3",
    "option_4",
    "option_5",
]

let active={
    state : 0,
    id : "null",
}

button_ids.map((curr,index)=>{
    document.getElementById(`${curr}`).addEventListener('click',()=>{
        if(active.state === 0){
            active.state = index+1;
            active.id = `${curr}`;
            document.getElementById(`${curr}`).classList.add("active_btn");
        }
        else if(active.id === curr){
            active.state = 0;
            active.id = "null";
            document.getElementById(`${curr}`).classList.remove("active_btn");
        }
        else{
            document.getElementById(`${active.id}`).classList.remove("active_btn");
            active.state = index+1;
            active.id = `${curr}`;
            document.getElementById(`${curr}`).classList.add("active_btn");
        }
    })
})

let submit_btn = document.getElementById("submit")

submit_btn.addEventListener('click',()=>{
    if(active.state == 0)
        alert("You need haven't selected any option\n INVALID SUBMITION")
    else{
        let data = `
            <div class="main_container2">
        
            <div class="thank_ill">
                <object data="./images/illustration-thank-you.svg" type=""></object>
            </div>
            
            <div class="rslt">
                <p id="selected_rslt">
                    you selected ${active.state} out of 5
                </p>
            </div>
            
            
            <div class="head">
                Thank you!
            </div>
            
            <div class="info">
                We appreciate you taking the time to give a rating. <span><br></span>
                If you ever need more support, don’t hesitate  <span><br></span>
                to get in touch!
            </div>
              
            
          </div>
        `
        document.getElementById('body').innerHTML=data;

    }
})


