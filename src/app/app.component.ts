import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people = [
    {
      name: '小明',
      money: 500
    },
    {
      name: '漂亮阿姨',
      money: 3000
    },
    {
      name: '杰倫',
      money: 60000
    },
    {
      name: '老媽',
      money: Infinity
    },
  ];
  public minCard ={
      name:'小明',
      value:0
  }
  public groupA = ['小明', '杰倫', '阿姨'];
  public groupB = ['老媽', '老爸'];
  public groupAll = [...this.groupA,...this.groupB];
  public groupCon = this.groupA.concat(this.groupB);
  public doms = document.querySelectorAll('p');
  constructor() {

  }
  ngOnInit() {
    console.log('groupAll', this.groupAll);
    console.log('groupCon', this.groupCon);
    console.log('doms',this.doms);
    var foreachLoop = this.people.forEach(function (item, index, array) {
      console.log('999', item, index, array);
    })
    console.log('888', foreachLoop);

    var mapLoop = this.people.map(function (item, index, array) {
      return item;
    });
    console.log('777', mapLoop);
    var filterEmpty = this.people.filter(function (item, index, array) {
    })
    console.log('082', filterEmpty);
    var filterMoneyThan5000 = this.people.filter(function (item, index, array) {
      return item.money > 5000;
    })
    console.log('083', filterMoneyThan5000);
    var findEmpty = this.people.find(function (item, index, array) {
    })
    console.log('084', findEmpty);
    var findMoneyThan5000 = this.people.find(function (item, index, array) {
      return item.money > 5000;
    })
    console.log('085', findMoneyThan5000);
    var findJay = this.people.find(function (item, index, array) {
      return item.name === '杰倫';
    });
    console.log('147', findJay);
    var mapEmpty = this.people.map(function (item, index, array) {
    })
    console.log('148', mapEmpty);
    var everyoneAdd = this.people.map(function (item, index, array) {
      item.money = item.money + 500;
      return item;
    })
    console.log('555', everyoneAdd);
    var mapMoneyThan5000 = this.people.map(function (item, index, array) {
      if (item.money > 5000) {
        return item;
      }
    })
    console.log('666', mapMoneyThan5000);
    var ans = this.people.every(function (item, index, array) {
      return item.money > 10000;
    })
    console.log('000', ans);
    var ans2 = this.people.every(function (item, index, array) {
      return item.money > 300;
    })
    console.log('0707', ans2);
    var ans = this.people.some(function (item, index, array) {
      return item.money > 10000;
    })
    console.log('0202', ans);
    var ans2 = this.people.some(function (item, index, array) {
      return item.money > 300;
    })
    console.log('0221', ans2);
    var reduceEmpty = this.people.reduce(function (accumulator, currentValue, currentIndex,array) {
         return accumulator;
    });
    console.log('0329', reduceEmpty);

    this.people.pop();
    var reducePlus= this.people.reduce(function (accumulator, currentValue, currentIndex,array) {
         console.log('987',accumulator,currentValue,currentIndex);
         return accumulator + currentValue.money;
    },0);
    console.log('9453',reducePlus);
    var reduceBestOne = this.people.reduce(function (accumulator, currentValue, currentIndex,array) {
         return Math.max(accumulator,currentValue.money);
    },0);
    console.log('比誰大', reduceBestOne);
    function updateCashCard(minCard,...money){
        let arg = [...arguments];
        let sum = arg.reduce(function(accumulator,currentValue){
             return accumulator + currentValue;   
        },0)
        console.log('我有'+sum+'元');
    }
    //updateCashCard(0);
    updateCashCard(10,50,100,50,5,1,1,1,500);

  }








}
