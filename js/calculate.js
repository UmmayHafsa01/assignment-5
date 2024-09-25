document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney = getInputValuebyId("noakhali-add-money")
    const balance = getTextValuebyId("noakhali-balance")
    const mainbalance = getTextValuebyId("main-balance")
    if(addmoney > 0 ){
        const newbalance = balance + addmoney;
        const newmainbalance = mainbalance - addmoney;
        document.getElementById('noakhali-balance').innerText = newbalance;
        document.getElementById('main-balance').innerText = newmainbalance;
      
        const div = document.createElement('div')
        div.classList.add('border')
        const now = new Date();
       const formattedDateTime = now.toLocaleString(); 
        div.innerHTML = `
        <h4 class="text-black font-bold">${addmoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
        <p>Date: ${formattedDateTime}</p>
    `;
        console.log('add money',div)
        document.getElementById('donation-history').appendChild(div)

    }
    else{
        alert('Enter a number')
         document.getElementById('noakhali-btn').removeAttribute('onclick')
     
        
    }
    
})

//calculation for feni donation

document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney = getInputValuebyId("feni-add-money")
    const balance = getTextValuebyId("feni-balance")
    const mainbalance = getTextValuebyId("main-balance")
    if(addmoney > 0 ){
        const newbalance = balance + addmoney;
        const newmainbalance = mainbalance - addmoney;
        document.getElementById('feni-balance').innerText = newbalance;
        document.getElementById('main-balance').innerText = newmainbalance;
        const div = document.createElement('div')
        div.classList.add('border')
        const now = new Date();
       const formattedDateTime = now.toLocaleString(); 
        div.innerHTML = `
        <h4 class="text-black font-bold">${addmoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
        <p>Date: ${formattedDateTime}</p>
    `;
        console.log('add money',div)
        document.getElementById('donation-history').appendChild(div)
    }
    else{
        alert('Enter a number')
    }
    
})

//calculation for Quota donation

document.getElementById('aid-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney = getInputValuebyId("aid-add-money")
    const balance = getTextValuebyId("aid-balance")
    const mainbalance = getTextValuebyId("main-balance")
    if(addmoney > 0 ){
        const newbalance = balance + addmoney;
        const newmainbalance = mainbalance - addmoney;
        document.getElementById('aid-balance').innerText = newbalance;
        document.getElementById('main-balance').innerText = newmainbalance;
        const div = document.createElement('div')
        div.classList.add('border')
        const now = new Date();
       const formattedDateTime = now.toLocaleString(); 
        div.innerHTML = `
        <h4 class="text-black font-bold">${addmoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh, Bangladesh</h4>
        <p>Date: ${formattedDateTime}</p>
    `;
        console.log('add money',div)
        document.getElementById('donation-history').appendChild(div)
    }
    else{
        alert('Enter a number')
    }
    
})

