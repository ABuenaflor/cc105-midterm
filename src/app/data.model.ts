export class Data{
  constructor(
    public id:string,
    public brand:string,
    public model:string,
    public imagePath:string,
    public status:string,
    public likes: number,
    public comments: string[]=[],

){}
};