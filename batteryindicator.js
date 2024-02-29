
Battery()

function Battery(){
    const batteryLiquid = document.querySelector('.battery__liquid'),
          batteryStatus = document.querySelector('.battery__status'),
          batteryPercentage = document.querySelector('.battery__percentage')
    
    navigator.getBattery().then((mani) =>{
        updateBattery = () =>{
            let level = Math.floor(mani.level *100)
            batteryPercentage.innerText = level+ '%'

           
            batteryLiquid.style.height = `${parseInt(mani.level *100)}%`
           console.log(mani)
            if(level == 100){ 
                batteryStatus.innerHTML = `Full battery`
                batteryLiquid.style.height = '103%' 
            }
            else if(level <= 20 && !mani.charging){ //If it is not conncet cable it display low battery on output
                batteryStatus.innerText = `Low battery `
            }
            else if(mani.charging){ 
                batteryStatus.innerHTML = `Charging...`
            }
            else{ 
                batteryStatus.innerHTML = 'remaining'
            }
            
        
            if(level <=20){
                batteryLiquid.classList.add('gradient-color-red')
                batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green')
            }
            else if(level <= 40){
                batteryLiquid.classList.add('gradient-color-orange')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
            }
            else if(level <= 80){
                batteryLiquid.classList.add('gradient-color-yellow')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
            }
            else{
                batteryLiquid.classList.add('gradient-color-green')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow')
            }
        }
        updateBattery()

        mani.addEventListener( () => {updateBattery()})
        mani.addEventListener( () => {updateBattery()})

    })
}
