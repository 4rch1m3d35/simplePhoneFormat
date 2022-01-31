function PhoneFormat(input) {
    this.input = input;
    this.input.maxLength = '14';
    this.assignListeners();
}

PhoneFormat.prototype.assignListeners = function() {
    this.input.onkeydown = (e) => (e.key.length == 1 && isNaN(parseInt(e.key))) ? false : true;
    this.input.onkeyup = (e) => this.format(e);
    this.input.onblur = (e) => this.format(e);
}

PhoneFormat.prototype.format = function(e) {
    if(e.type === 'keyup' && e.key.length > 1) return;
    
    const number = this.input.value.replace(/\D/g, '');
    
    const length = number.length;
    
    switch(true) {
        case length == 0:
            this.input.value = number;
            break;
            
        case length < 4:
            this.input.value = `(${number}`;
            break;
        
        case length < 7:
            this.input.value = `(${number.substring(0, 3)}) ${number.substring(3, 6)}`
            break;
        
        default:
            this.input.value = `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6, 10)}`;
        
    }
    
    return;
}
