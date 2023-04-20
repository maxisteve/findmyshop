

module.exports = {

 
    isNullorEmptyorUndefined:(args) => {

        var result = false;
        if(args!=undefined && args!=null && args!=undefined) {
            result = true;
        }
        return result;
    },
 
}