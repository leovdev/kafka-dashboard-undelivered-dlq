import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MessagesComponent implements AfterViewInit {
  displayedColums: string[] = ['eventDate', 'topic', 'groupId', 
  'clientId', 'partitionNum', 'offsetNum', 'errorCode', 
  'errorDescription', 'componentError', 'errorDate',
  'retries', 'message']
  
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  undeliveredMessages:any = []

  constructor(public dialog: MatDialog,
    paginator: MatPaginator,
    sort: MatSort) {
    this.dataSource = new MatTableDataSource(this.undeliveredMessages)
    this.paginator = paginator;
    this.sort = sort;
   }

  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      this.undeliveredMessages = [
        {
            "evnId": "0001",
            "eventDate": "2021-01-08T09:00:00.045Z",
            "topic": "Col_GenericPolicyIssued",
            "gropupId": "Group_Col_GenericPolicyIssued",
            "clientId": "conJavaODSEmission",
            "partitionNum": 13,
            "offsetNum": 13,
            "message": "message",
            "errorCode": "123",
            "errorDescription": "Description",
            "componentError": null,
            "errorDate": "2021-01-08T09:00:00.045Z",
            "retries": 3
  
          },
          {
            "evnId": "0002",
            "eventDate": "2022-01-08T09:00:00.045Z",
            "topic": "Col_GenericPolicyIssued",
            "gropupId": "Group_Col_GenericPolicyIssued",
            "clientId": "conJavaODSEmission",
            "partitionNum": 4,
            "offsetNum": 78900,
            "message": "message",
            "errorCode": "945",
            "errorDescription": "Description",
            "componentError": null,
            "errorDate": "2022-01-08T09:00:00.045Z",
            "retries": 3
  
          },
      ]
      this.dataSource = new MatTableDataSource(this.undeliveredMessages)

      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return data.eventDate?.toLocaleLowerCase().includes(filter) ||
        data.topic?.toLocaleLowerCase().includes(filter) ||
        data.gropupId?.toLocaleLowerCase().includes(filter) ||
        data.clientId?.toLocaleLowerCase().includes(filter) ||
        data.partitionNum?.toString().includes(filter) ||
        data.offsetNum?.toString().includes(filter) ||
        data.message?.toLocaleLowerCase().includes(filter) ||
        data.errorCode?.toLocaleLowerCase().includes(filter) ||
        data.errorDescription?.toLocaleLowerCase().includes(filter) ||
        data.componentError?.toLocaleLowerCase().includes(filter) ||
        data.errorDate?.toLocaleLowerCase().includes(filter) ||
        data.retries?.toString().includes(filter)
      }
        
      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
          this.dataSource.paginator._intl.itemsPerPageLabel = "Resultados por página"
      }
  }
  
  applyFilter(event: Event){
    const filterValue  = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}
