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
  constructor() {

  }
  ngOnInit() {
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
    var reduceEmpty = this.people.reduce(function (accumulator, currentValue, currentIndex, array) {
    });
    console.log('0329', reduceEmpty);




  }








}
