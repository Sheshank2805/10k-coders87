function strslice(str,s=0,e=str.length){
    if(s<0){
        s=str.length+s;
    }
    if(e<0){
        e=str.length+e;
    }
    if(e>str.length){
        e=str.length
    }
    if(s>=str.length||s>=e){
        return '';
    }
    let result='';
    for(i=s;i<e;i++){
        result+=str[i];
    }
    return result

}
console.log(strslice("sheshank",-8,-5));