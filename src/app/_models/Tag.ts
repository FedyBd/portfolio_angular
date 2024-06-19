export class Tag{
    static readonly ANGULAR = new Tag('Angular','BLueViolet');
    static readonly Typescript = new Tag('Typescript','blue');
    static readonly Python = new Tag('Python','green');
    static readonly Raspberry_Pi = new Tag('Raspberry Pi','DarkOrange');
    static readonly Flask = new Tag('Flask','green');
    static readonly Tensorflow = new Tag('Tensorflow','red');
    static readonly Pytorch = new Tag('Pytorch','red');
    static readonly API = new Tag('API','BLueViolet');
    static readonly MS_Azure = new Tag('MS Azure','DarkOrange');
    static readonly Deep_learning = new Tag('Deep learning','red');
    static readonly Machine_learning = new Tag('Machine learning','blue');
    static readonly Flutter = new Tag('Flutter','DarkOrange');
    static readonly Android_Studio = new Tag('Android Studio','green');
    static readonly ViT = new Tag('ViT','BLueViolet');
    static readonly XGBoost = new Tag('XGBoost','blue');
    static readonly Firebase = new Tag('Firebase','Coral');
    static readonly Mysql = new Tag('Mysql','Coral');

    private constructor (private readonly key: string , public readonly color : string){

    }
    toString(){
        return this.key
    }

}