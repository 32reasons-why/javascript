

const subs = ["CompScience", "SEngineering", "Database", "IT"];

let i=0;
let len = subs.length;
let devops = " ";

for(;i < len; ){
    devops = devops + subs[i] + ' ' ;

    i++;
}

console.log(devops);