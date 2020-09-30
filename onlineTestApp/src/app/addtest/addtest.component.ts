import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { TestService } from '../service/testservice';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent  {

  constructor(private testService: TestService) {

  }
  test: Test;



  addTest(form: any) {
    let data = form.value;
    let testTitle = data.testTitle;
    let testDuration = data.testDuration;
    let totalMark = data.totalMark;
    let markScored = data.markScored;
    let startTime = data.startTime;
    let endTime = data.endTime;

    this.test = new Test(1, testTitle, testDuration, totalMark, markScored, startTime, endTime);
    let successFun = (testArg: Test) => {
      this.test = testArg;
    };

    let errFun = err => {
      console.log("err in addtestcomponent " + err.message);
    }

    let observable: Observable<Test> = this.testService.addTest(this.test);
    observable.subscribe(successFun, errFun);
  }
}

