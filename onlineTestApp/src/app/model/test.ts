export class Test{
  id:number;
  testTitle:string;
  testDuration:string;
  totalMark:number;
  markScored:number;
  startTime:string;
  endTime:string


  constructor(id:number, testTitle:string, testDuration:string, totalMark:number, 
    markScored:number, startTime:string,endTime:string ){
      this.endTime=endTime;
      this.id=id;
      this.markScored=markScored;
      this.startTime=startTime;
      this.testDuration=testDuration;
      this.testTitle=testTitle;
      this.totalMark=totalMark;

    }
    getTestTitle():string{
      return this.testTitle;
    }
    getTestDuration():string{
      return this.testDuration;
    }
    getTotalMark():number{
      return this.totalMark;
    }
    getMarkScored():number{
      return this.markScored;
    }
    getStartTime():string{
      return this.startTime;
    }
    getEndTime():string{
      return this.endTime;
    }
  
} 