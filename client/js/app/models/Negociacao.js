class Negociacao{
    constructor( data , quantidade , valor) {
        this._data =  new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor =  valor;
        this._volume = quantidade * valor;
        /* congelar o valor, pois em java scprit não temos ainda modificadores
        de acesso,Contudo não congela obejetos se viverem seus proprios metodos*/
        Object.freeze(this)
    }

    get volume(){
        return this._volume;
    }
    get data(){
        return new Date(this._data.getTime());
    }

    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }

}