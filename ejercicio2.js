//cocatenarlos con cada elemento 
//posterios del array

let nums = [ 0,2,4,8];
let i = [ 0,1,2,3];

for(
    let j=0;j<i.length; j++){
    
    let lin = " ";
    for( let k =0; k <nums.length; k++) {
        lin+= i[j] + " " + nums[k]+ " ";

    }
console.log(lin);


    }
