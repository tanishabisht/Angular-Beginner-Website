import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  cardContent = [
    {
      heading:'Some Rando',
      para:'Transfer via card number',
      price:'$1200'
    },
    {
      heading:'Some Prodo',
      para:'Transfer other banks',
      price:'$150'
    },
    {
      heading:'Phanska hogal',
      para:'Transfer same banks',
      price:'$1500'
    },
    {
      heading:'Klasgy phasko',
      para:'Transfer to other banks',
      price:'$450'
    }
  ]



  tableContent = [
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },{
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },{
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    },
    {
      item:'Car Insurance',
      time:'10.42.23 AM',
      price:'$350.00	',
      status:'Completed'
    }
  ]



  constructor(){}

  ngOnInit():void{}

}
