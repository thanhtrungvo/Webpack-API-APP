export const FindIndex = (list, id)=>{
    var result = -1;
    if(list.length > 0){
        list.forEach((element, index)=>{
            if(element.id === id){
                result = index
            }
        })
    }
    return result;
}