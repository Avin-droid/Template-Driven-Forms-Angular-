import { Component } from '@angular/core';
import { Details} from '../details'

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent {
  dArr:Array<Details>=[]
  d:Details=
  {
    f_name:'',
    m_name:'',
    l_name:'',
    email:'',
    sub_1:0,
    sub_2:0,
    sub_3:0,
    sub_4:0,
    sub_5:0,
    grade:'',
    percentage:0
  }

  archive()
  {
    let sub_1=Number(this.d.sub_1)
    let sub_2=Number(this.d.sub_2)
    let sub_3=Number(this.d.sub_3)
    let sub_4=Number(this.d.sub_4)
    let sub_5=Number(this.d.sub_5)
    let total=sub_1+sub_2+sub_3+sub_4+sub_5
    let per=(total/500)*100
    this.d.percentage=per
    if(per>=90)
    {
      this.d.grade='A+'
    }
    else if(per>=75 && per<=89)
    {
      this.d.grade='A'
    }
    else if(per>=65 && per<=74)
    {
      this.d.grade='B'
    }
    else if(per>=55 && per<=64)
    {
      this.d.grade='C'
    }
    else if(per>=35 && per<=54)
    {
      this.d.grade='D'
    }
    else
    {
      this.d.grade='Fail'
    }


    let temp={...this.d }
    this.dArr.push(temp)
    this.d=
    {
      f_name:'',
      m_name:'',
      l_name:'',
      email:'',
      sub_1:0,
      sub_2:0,
      sub_3:0,
      sub_4:0,
      sub_5:0,
      grade:'',
      percentage:0
    }
  
  }

  clear(index:number)
  {
    this.dArr.splice(index,1)
  }
  
}
